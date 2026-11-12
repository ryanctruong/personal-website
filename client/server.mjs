import express from "express";
import { GoogleAuth } from "google-auth-library";
import { fileURLToPath } from "node:url";

const app = express();
const auth = new GoogleAuth();
const apiBaseUrl = process.env.API_BASE_URL;
const apiOrigin = apiBaseUrl ? new URL(apiBaseUrl).origin : undefined;
const isLocalApi =
  process.env.NODE_ENV !== "production" &&
  apiOrigin === "http://127.0.0.1:8080";
let apiClient;

async function requestFlask(path, { method = "GET", cookie } = {}) {
  if (!apiOrigin) throw new Error("API_BASE_URL is missing");

  const headers = new Headers();
  if (!isLocalApi) {
    apiClient ??= await auth.getIdTokenClient(apiOrigin);
    const authHeaders = await apiClient.getRequestHeaders();
    for (const [name, value] of authHeaders) {
      headers.set(name, value);
    }
  }
  if (cookie) headers.set("Cookie", cookie);

  return fetch(new URL(path, apiOrigin), {
    method,
    headers,
    signal: AbortSignal.timeout(5000),
    redirect: "error",
  });
}

app.use("/api", (request, response, next) => {
  const startedAt = performance.now();
  const path = request.baseUrl + request.path;
  response.once("finish", () => {
    const elapsedMs = Math.round(performance.now() - startedAt);
    console.info(`${request.method} ${path} ${response.statusCode} (${elapsedMs} ms)`);
  });
  next();
});

app.get("/api/health", async (_request, response) => {
  try {
    const upstream = await requestFlask("/api/health");
    response.set("Content-Type", upstream.headers.get("Content-Type") ?? "text/plain");
    response.status(upstream.status).send(await upstream.text());
  } catch (error) {
    console.error("Flask API request failed:", error.message);
    response.status(502).type("text").send("The API is unavailable.");
  }
});

app.post("/api/visit", async (request, response) => {
  response.set("Cache-Control", "no-store");
  try {
    const upstream = await requestFlask("/api/visit", {
      method: "POST",
      cookie: request.get("Cookie"),
    });
    const cookie = upstream.headers.get("Set-Cookie");
    if (cookie) response.set("Set-Cookie", cookie);
    response.status(upstream.status).end();
  } catch (error) {
    console.error("Flask visit request failed:", error.message);
    response.status(502).end();
  }
});

app.use(express.static(fileURLToPath(new URL("./dist/", import.meta.url))));
const port = Number(process.env.PORT || 8080);
const server = app.listen(port, "0.0.0.0", (error) => {
  if (error) throw error;
  console.info(`Frontend server listening on port ${server.address().port}`);
});

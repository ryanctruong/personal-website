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

async function requestFlask(path) {
  if (!apiOrigin) throw new Error("API_BASE_URL is missing");

  let headers;
  if (!isLocalApi) {
    apiClient ??= await auth.getIdTokenClient(apiOrigin);
    headers = await apiClient.getRequestHeaders();
  }

  return fetch(new URL(path, apiOrigin), {
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

app.get("/api/hello", async (_request, response) => {
  try {
    const upstream = await requestFlask("/api/hello");
    response.status(upstream.status).type("text").send(await upstream.text());
  } catch (error) {
    console.error("Flask API request failed:", error.message);
    response.status(502).type("text").send("The API is unavailable.");
  }
});

app.use(express.static(fileURLToPath(new URL("./dist/", import.meta.url))));
const port = Number(process.env.PORT || 8080);
const server = app.listen(port, "0.0.0.0", (error) => {
  if (error) throw error;
  console.info(`Frontend server listening on port ${server.address().port}`);
});

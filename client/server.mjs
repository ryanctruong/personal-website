import express from "express";
import { GoogleAuth } from "google-auth-library";
import { fileURLToPath } from "node:url";

const app = express();
const auth = new GoogleAuth();
const apiBaseUrl = process.env.API_BASE_URL;
let apiClient;

app.get("/api/hello", async (request, response) => {
  const startedAt = performance.now();
  response.once("finish", () => {
    const elapsedMs = Math.round(performance.now() - startedAt);
    console.info(`${request.method} /api/hello ${response.statusCode} (${elapsedMs} ms)`);
  });

  try {
    const apiOrigin = new URL(apiBaseUrl).origin;
    if (
      process.env.NODE_ENV !== "production" &&
      apiOrigin === "http://127.0.0.1:8080"
    ) {
      const upstream = await fetch(new URL("/api/hello", apiOrigin), {
        signal: AbortSignal.timeout(5000),
        redirect: "error",
      });
      response
        .status(upstream.status)
        .type("text")
        .send(await upstream.text());
      return;
    }
    apiClient ??= await auth.getIdTokenClient(apiOrigin);
    const upstream = await apiClient.request({
      url: new URL("/api/hello", apiOrigin).href,
      responseType: "text",
      timeout: 5000,
      maxRedirects: 0,
    });
    response.status(upstream.status).type("text").send(upstream.data);
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

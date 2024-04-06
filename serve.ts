import Server from "lume/core/server.ts";
import { load } from "std/dotenv/mod.ts";

const env = await load();

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

const kv = await Deno.openKv();

function isBody(test: unknown): test is string {
  return test !== undefined && typeof test === "string";
}

kv.listenQueue(async (body) => {
  if (isBody(body)) {
    const webhookURL = Deno.env.get("SLACK_WEBHOOK_URL") ||
    env["SLACK_WEBHOOK_URL"];
    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      if (!response.ok) {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  }
});

server.use(async (request, next) => {
  const { method, url } = request;
  if (method == "POST" && url.endsWith("/slack")) {
    const body = await new Response(request.body).text();
    const result = await kv.enqueue(body);
    if (!result.ok) {
      console.error(result);
    }
  }
  return await next(request);
});

server.use(async (request, next) => {
  const response = await next(request);
  const { headers, status } = response;
  if (status === 404) {
    headers.set("content-type", "text/html; charset=utf-8");
    const body = await Deno.readFile(`${Deno.cwd()}/_site/404.html`);
    return new Response(body, { status, headers });
  }
  return response;
});

server.start();

console.log("Listening on http://localhost:8000");

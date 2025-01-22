import Server from "lume/core/server.ts";
import { load } from "std/dotenv/mod.ts";

const env = await load();

const server = new Server({
  root: `${Deno.cwd()}/_site`,
});

const getPath = (request: Request) => (new URL(request.url).pathname);
const slackWebhookURL = Deno.env.get("SLACK_WEBHOOK_URL") ||
  env["SLACK_WEBHOOK_URL"];

server.use(async (request, next) => {
  if (request.method == "POST" && getPath(request) === "/slack") {
    const body = await request.text();
    const response = await fetch(slackWebhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    if (!response.ok) {
      console.error(response);
    }
    return new Response(body, { status: response.ok ? 200 : 500 });
  }
  return await next(request);
});

server.use(async (request, next) => {
  if (request.method == "GET" && getPath(request) === "/api/docs.json") {
    return await fetch("https://api.clipcrow.dev/docs.json");
  }
  return await next(request);
});

server.use(async (request, next) => {
  const response = await next(request);
  const { headers, status } = response;
  if (status === 404) {
    headers.set("content-type", "text/html; charset=utf-8");
    const body = await Deno.readFile(`${Deno.cwd()}/_site/404/index.html`);
    return new Response(body, { status, headers });
  }
  return response;
});

server.start();

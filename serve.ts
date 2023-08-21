import Server from "lume/core/server.ts";

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

server.use(async (request, next) => {
  const response = await next(request);
  if (response.status === 404) {
    const { headers, status } = response;
    headers.set("content-type", "text/html; charset=utf-8");
    const body = await Deno.readFile(`${Deno.cwd()}/_site/404/index.html`);
    return new Response(body, { status, headers });
  }
  return response;
});

server.start();

console.log("Listening on http://localhost:8000");

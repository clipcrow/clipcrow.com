import Server from "lume/core/server.ts";

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

server.use(async (request, next) => {
  const response = await next(request);
  if (response.status === 404) {
    return Response.redirect("/404/, 404");
  }
  return response;
});

server.start();

console.log("Listening on http://localhost:8000");

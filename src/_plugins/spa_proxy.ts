// テスト用のSPAプロキシ。 serve.tsを、テスト時には起動しないので用意した。

// deno-lint-ignore no-explicit-any
const SPATestMiddleware = async (request: Request, next: any) => {
    const url = new URL(request.url);
    
    if (request.method === "POST" && url.pathname === "/slack") {
    console.log("Slack request received");
    const slackWebhookURL = Deno.env.get("SLACK_WEBHOOK_URL");
    if (!slackWebhookURL) {
        console.error("Missing SLACK_WEBHOOK_URL environment variable");
        return new Response("Server Error: Missing configuration", { status: 500 });
    }

    try {
        const body = await request.text();
        const response = await fetch(slackWebhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body,
        });
        console.log("Slack response status:", response.status);
        return new Response(body, { status: response.ok ? 200 : 500 });
    } catch (e) {
        console.error(e);
        return new Response("Internal Server Error", { status: 500 });
    }
    }
    return await next(request);
};

export default function () {
  return (site: Lume.Site) => {
    if (site.options?.server) {
        if (!site.options.server.middlewares) {
            site.options.server.middlewares = [];
        }
        site.options.server.middlewares.push(SPATestMiddleware);
        console.log("[SPA Test Proxy] Middleware registered via options.");
    } else {
         console.warn("[SPA Test Proxy] site.options.server is undefined. Middleware not registered.");
    }
  };
}

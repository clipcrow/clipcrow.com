import type { PageData } from "lume/core.ts";

export default (data: PageData) => (
  <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{data.title}</title>
    </head>
    <body>
      {data.children}
    </body>
  </html>
);

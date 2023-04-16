import type { PageData, PageHelpers } from "lume/core.ts";
// @import "styles/style.scss";

function Title(props: { title: string }) {
  return <title>{props.title}</title>;
}

export default (data: PageData, filters: PageHelpers) => (
  <html>
    <head>
      <Title title={data.title || "ClipCrow LLC"} />
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
      {data.children}
    </body>
  </html>
);

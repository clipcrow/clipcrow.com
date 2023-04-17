import type { PageData, PageHelpers } from "lume/core.ts";
import SiteMetadata from "@/SiteMetadata.tsx";
import SiteHeader from "@/SiteHeader.tsx";
import SiteFooter from "@/SiteFooter.tsx";

function Title(props: { title: string }) {
  return <title>{props.title}</title>;
}

export default (data: PageData, filters: PageHelpers) => (
  <html>
    <SiteMetadata title={data.title} />
    <body>
      <SiteHeader />
      {data.children}
      <SiteFooter />
    </body>
  </html>
);

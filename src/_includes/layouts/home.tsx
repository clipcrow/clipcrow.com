import type { PageData, PageHelpers } from "lume/core.ts";
import EWwareMetadata from "@/EWwareMetadata.tsx";
import EWwareBrandsign from "@/EWwareBrandsign.tsx";
import EWwareFooter from "@/EWwareFooter.tsx";

export default (data: PageData, filters: PageHelpers) => (
  <html>
    <EWwareMetadata title={data.title} />
    <body>
      <EWwareBrandsign />
      {data.children}
      <EWwareFooter />
    </body>
  </html>
);

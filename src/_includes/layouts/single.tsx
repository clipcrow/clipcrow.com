import type { PageData, PageHelpers } from "lume/core.ts";
import EWwareMetadata from "@/EWwareMetadata.tsx";
import EWwareBrandsign from "@/EWwareBrandsign.tsx";
import EWwareFooter from "@/EWwareFooter.tsx";
import EWwareTitle from "@/EWwareTitle.tsx";
import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";

export default (data: PageData, filters: PageHelpers) => (
  <html>
    <EWwareMetadata title={data.title} />
    <body>
      <EWwareBrandsign />
      <div className="wrap">
        <EWwareTitle title={data.title || ""} />
        <EWwareContentsWrapper children={data.children} />
      </div>
      <EWwareFooter />
    </body>
  </html>
);

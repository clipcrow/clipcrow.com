import type { PageData } from "lume/core.ts";
import EWwareMetadata from "@/EWwareMetadata.tsx";
import EWwareBrandsign from "@/EWwareBrandsign.tsx";
import EWwareFooter from "@/EWwareFooter.tsx";

export default (data: PageData) => (
  <html>
    <EWwareMetadata title={data.title} />
    <body>
      <EWwareBrandsign />
      <div class="wrap">
        {data.children}
      </div>
      <EWwareFooter />
    </body>
  </html>
);

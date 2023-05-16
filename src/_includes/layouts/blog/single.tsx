import type { PageData } from "lume/core.ts";
import EWwareTitle from "@/EWwareTitle.tsx";
import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";
import EWwareBlogNavigation from "@/EWwareBlogNavigation.tsx";

export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <>
    <EWwareTitle
      beforeTitle={data.beforeTitle}
      title={data.title || "ブログ"}
      afterTitle={data.afterTitle}
    />
    <EWwareContentsWrapper css={data.css || "info"}>
      {data.children}
    </EWwareContentsWrapper>
    <EWwareBlogNavigation page={data.page} search={data.search}/>
  </>
);

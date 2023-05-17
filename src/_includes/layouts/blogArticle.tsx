import type { PageData } from "lume/core.ts";
import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";
import EWwareBlogNavigation from "@/EWwareBlogNavigation.tsx";

export const layout = "layouts/withTitle.tsx";

export default (data: PageData) => (
  <>
    <EWwareContentsWrapper css="info" id="">
      {data.children}
    </EWwareContentsWrapper>
    <EWwareBlogNavigation page={data.page} search={data.search}/>
  </>
);

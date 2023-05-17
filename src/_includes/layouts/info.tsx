import type { PageData } from "lume/core.ts";
import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";

export const layout = "layouts/withTitle.tsx";

export default (data: PageData) => (
  <>
    <EWwareContentsWrapper css="info" id="">
      {data.children}
    </EWwareContentsWrapper>
  </>
);

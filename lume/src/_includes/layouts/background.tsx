import type { PageData } from "lume/core.ts";
import EWwareTitle from "@/EWwareTitle.tsx";
import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";

export const layout = "layouts/withTitle.tsx";

export default (data: PageData) => (
  <>
    <EWwareContentsWrapper css="background" id="">
      {data.children}
    </EWwareContentsWrapper>
  </>
);

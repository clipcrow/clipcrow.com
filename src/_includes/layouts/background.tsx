import type { PageData } from "lume/core.ts";
import EWwareTitle from "@/EWwareTitle.tsx";
import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";

export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <>
    <EWwareTitle
      beforeTitle={data.beforeTitle}
      title={data.title || "ClipCrow LLC"}
      afterTitle={data.afterTitle}
    />
    <EWwareContentsWrapper css="background" id="">
      {data.children}
    </EWwareContentsWrapper>
  </>
);

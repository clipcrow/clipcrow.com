import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";
export const title = "404";
export const layout = "layouts/single.tsx";

export default () => (
  <EWwareContentsWrapper css="info" id="">
    <section class="enclose">お探しのページは、見つかりませんでした。</section>
  </EWwareContentsWrapper>
);

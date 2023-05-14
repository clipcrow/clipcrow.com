import { PageData } from "lume/core.ts";

export const title = "404";
export const layout = "layouts/single.tsx";

export default (data: PageData) => (
    <section class="enclose">お探しのページは、見つかりませんでした。</section>
);
  
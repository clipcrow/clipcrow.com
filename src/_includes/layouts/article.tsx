import type { PageData } from "lume/core.ts";
import BlogNavigation from "@/BlogNavigation.tsx";
import BlogRightRail from "@/BlogRightRail.tsx";
import BlogTitle from "@/BlogTitle.tsx";

export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <main>
    <section class="details__page-title">
    </section>
    <section class="blog__details">
      <div class="blog__card-wrapper">
        <BlogTitle
          title={data.title!}
          category={data.category}
          date={data.date!}
          url={data.url || ""}
        />
        <div class="blog__details-content">
          {data.lead ? <div class="blog__details-lead">{data.lead}</div> : null}
          {data.children}
        </div>
        <BlogNavigation page={data.page} search={data.search} />
      </div>
      <BlogRightRail search={data.search} />
    </section>
  </main>
);

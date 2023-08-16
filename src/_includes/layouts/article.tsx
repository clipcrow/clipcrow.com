import type { PageData } from "lume/core.ts";
import BlogNavigation from "@/BlogNavigation.tsx";
import BlogLatestArticles from "@/BlogLatestArticles.tsx";
import BlogMonthlyArchives from "@/BlogMonthlyArchives.tsx";
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
          {data.children}
        </div>
        <BlogNavigation page={data.page} search={data.search} />
      </div>
      <div class="blog__link">
        <BlogLatestArticles search={data.search} />
        <BlogMonthlyArchives search={data.search} />
      </div>
    </section>
  </main>
);

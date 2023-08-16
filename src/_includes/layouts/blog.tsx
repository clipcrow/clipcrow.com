import type { PageData } from "lume/core.ts";
import BlogLatestArticles from "@/BlogLatestArticles.tsx";
import BlogMonthlyArchives from "@/BlogMonthlyArchives.tsx";
import BlogPagination from "@/BlogPagination.tsx";
import BlogTitle from "@/BlogTitle.tsx";

export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <main>
    <section class="blog__page-title">
    </section>
    <section class="blog__maincont">
      <div class="blog__card-wrapper page-2">
        {data.results &&
          data.results.map((result) => (
            <BlogTitle
              title={result.data.title!}
              category={result.data.category}
              date={result.data.date!}
              url={result.data.url || ""}
            />
          ))}
        <BlogPagination url={data.url} info={data.pagination} />
      </div>
      <div class="blog__link">
        <BlogLatestArticles search={data.search} />
        <BlogMonthlyArchives search={data.search} />
      </div>
    </section>
  </main>
);

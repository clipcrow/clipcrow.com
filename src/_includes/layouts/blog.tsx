import type { PageData } from "lume/core.ts";
import BlogRightRail from "@/BlogRightRail.tsx";
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
              lead={result.data.lead}
            />
          ))}
        <BlogPagination pagination={data.pagination} />
      </div>
      <BlogRightRail search={data.search} />
    </section>
  </main>
);

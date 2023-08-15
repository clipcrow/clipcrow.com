import { format } from "std/datetime/mod.ts";
import type { PageData } from "lume/core.ts";
import BlogLatestArticles from "@/BlogLatestArticles.tsx";
import BlogMonthlyArchives from "@/BlogMonthlyArchives.tsx";

export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <main>
    <section class="details__page-title">
    </section>
    <section class="blog__details">
      <div class="blog__card-wrapper">
        <div class="blog__card">
          <div class="blog__card-content card-1">
            <div class="card__inside card-1">
              <h4 class="card__title">{data.title}</h4>
              <div class="card__category">{data.category}</div>
            </div>
          </div>
          <p class="blog__card-date">{format(data.date!, "yyyy-MM-dd")}</p>
        </div>
        <div class="blog__details-content">
          <p>{data.children}</p>
        </div>
        <div class="blog__pagination details">
          <a href="blog-details-1.html" class="pagination__section details">
            タイトルタイトルタイトルタイトル
            <span class="pagination__nav"></span>
          </a>
        </div>
      </div>
      <div class="blog__link">
        <BlogLatestArticles search={data.search} />
        <BlogMonthlyArchives search={data.search} />
      </div>
    </section>
  </main>
);

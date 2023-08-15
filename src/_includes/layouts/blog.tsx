import type { PageData } from "lume/core.ts";
import BlogLatestArticles from "@/BlogLatestArticles.tsx";
import BlogMonthlyArchives from "@/BlogMonthlyArchives.tsx";

export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <main>
    <section class="blog__page-title">
      <h1>ブログ</h1>
    </section>
    <section class="blog__maincont">
      <div class="blog__card-wrapper">
        <div class="blog__card">
          <a class="blog__card-content card-1" href="/blog-details">
            <div class="card__inside card-1">
              <h4 class="card__title">タイトルタイトルタイトルタイトル</h4>
              <div class="card__lead">
                リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード....
              </div>
              <div class="card__category">カテゴリー①</div>
            </div>
          </a>
          <p class="blog__card-date">2023/7/19</p>
        </div>
        <div class="blog__card">
          <a class="blog__card-content card-2" href="/blog-details-1">
            <div class="card__inside card-2">
              <h4 class="card__title">タイトルタイトルタイトルタイトル</h4>
              <div class="card__lead">
                リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード....
              </div>
              <div class="card__category">カテゴリー②</div>
            </div>
          </a>
          <p class="blog__card-date">2023/7/18</p>
        </div>
        <div class="blog__card">
          <a class="blog__card-content card-3" href="/blog-details-2">
            <div class="card__inside card-3">
              <h4 class="card__title">タイトルタイトルタイトルタイトル</h4>
              <div class="card__lead">
                リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード....
              </div>
              <div class="card__category">カテゴリー③</div>
            </div>
          </a>
          <p class="blog__card-date">2023/7/17</p>
        </div>
        <div class="blog__card">
          <a class="blog__card-content card-4" href="/blog-details">
            <div class="card__inside card-4">
              <h4 class="card__title">タイトルタイトルタイトルタイトル</h4>
              <div class="card__lead">
                リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード....
              </div>
              <div class="card__category">カテゴリー④</div>
            </div>
          </a>
          <p class="blog__card-date">2023/7/16</p>
        </div>
        <div class="blog__card">
          <a class="blog__card-content card-5" href="/blog-details">
            <div class="card__inside card-5">
              <h4 class="card__title">タイトルタイトルタイトルタイトル</h4>
              <div class="card__lead">
                リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード....
              </div>
              <div class="card__category">カテゴリー⑤</div>
            </div>
          </a>
          <p class="blog__card-date">2023/7/15</p>
        </div>
        <div class="blog__card">
          <a class="blog__card-content card-6" href="/blog-details">
            <div class="card__inside card-6">
              <h4 class="card__title">タイトルタイトルタイトルタイトル</h4>
              <div class="card__lead">
                リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード....
              </div>
              <div class="card__category">カテゴリー⑥</div>
            </div>
          </a>
          <p class="blog__card-date">2023/7/14</p>
        </div>
        <div class="blog__pagination">
          <a href="/blog-1" class="pagination__section">
            次のページ
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

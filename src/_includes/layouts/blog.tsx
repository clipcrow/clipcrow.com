import type { PageData, PageHelpers } from "lume/core.ts";

export const layout = "layouts/base.tsx";

export default (data: PageData, filters: PageHelpers) => (
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
        <div class="blog__latest">
          <div class="blog__latest-title">最新の記事</div>
          <a class="blog__latest-content">
            <p>-タイトルタイトル</p>
            <p>-タイトルタイトル</p>
            <p>-タイトルタイトル</p>
          </a>
        </div>
        <div class="blog__monthly">
          <div class="blog__monthly-title">月別アーカイブ</div>
          <div class="blog-monthly-section">
            <div class="blog__monthly-year">
              <div class="monthly__dropdown-icon"></div>
              <p class="monthly__title">2023(25)</p>
            </div>
            <div class="monthly__dropdown-content">
              <p>2023/7(6)</p>
              <p>2023/6(2)</p>
              <p>2023/5(3)</p>
              <p>2023/4(3)</p>
              <p>2023/3(2)</p>
              <p>2023/2(4)</p>
              <p>2023/1(5)</p>
            </div>
          </div>
          <div class="blog-monthly-section">
            <div class="blog__monthly-year">
              <div class="monthly__dropdown-icon"></div>
              <p class="monthly__title">2022(20)</p>
            </div>
            <div class="monthly__dropdown-content">
              <p>2023/7(6)</p>
              <p>2023/6(2)</p>
            </div>
          </div>
          <div class="blog-monthly-section">
            <div class="blog__monthly-year">
              <div class="monthly__dropdown-icon"></div>
              <p class="monthly__title">2021(20)</p>
            </div>
            <div class="monthly__dropdown-content">
              <p>2023/7(6)</p>
              <p>2023/6(2)</p>
            </div>
          </div>
          <div class="blog-monthly-section">
            <div class="blog__monthly-year">
              <div class="monthly__dropdown-icon"></div>
              <p class="monthly__title">2023(25)</p>
            </div>
            <div class="monthly__dropdown-content">
              <p>2023/7(6)</p>
              <p>2023/6(2)</p>
            </div>
          </div>
          <div class="blog-monthly-section">
            <div class="blog__monthly-year">
              <div class="monthly__dropdown-icon"></div>
              <p class="monthly__title">2023(25)</p>
            </div>
            <div class="monthly__dropdown-content">
              <p>2023/7(6)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

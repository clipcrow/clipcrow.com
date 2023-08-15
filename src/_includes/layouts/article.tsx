import type { PageData, PageHelpers } from "lume/core.ts";

export const layout = "layouts/base.tsx";

export default (data: PageData, filters: PageHelpers) => (
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
          <p class="blog__card-date">{filters.dateFormat!(data.date)}</p>
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
            <div class="blog__monthly-year" id="dropdown-icon">
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
            <div class="blog__monthly-year" id="dropdown-icon">
              <div class="monthly__dropdown-icon"></div>
              <p class="monthly__title">2022(20)</p>
            </div>
            <div class="monthly__dropdown-content">
              <p>2023/7(6)</p>
              <p>2023/6(2)</p>
            </div>
          </div>
          <div class="blog-monthly-section">
            <div class="blog__monthly-year" id="dropdown-icon">
              <div class="monthly__dropdown-icon"></div>
              <p class="monthly__title">2021(20)</p>
            </div>
            <div class="monthly__dropdown-content">
              <p>2023/7(6)</p>
              <p>2023/6(2)</p>
            </div>
          </div>
          <div class="blog-monthly-section">
            <div class="blog__monthly-year" id="dropdown-icon">
              <div class="monthly__dropdown-icon"></div>
              <p class="monthly__title">2023(25)</p>
            </div>
            <div class="monthly__dropdown-content">
              <p>2023/7(6)</p>
              <p>2023/6(2)</p>
            </div>
          </div>
          <div class="blog-monthly-section">
            <div class="blog__monthly-year" id="dropdown-icon">
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

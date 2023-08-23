import { Search } from "lume/plugins/search.ts";
import createArchive from "@/createArchive.ts";

const BlogLatestArticles = (props: { search: Search }) => (
  <div class="blog__latest">
    <div class="blog__latest-title">最新の記事</div>
    {props.search.pages("blog", "date=desc", 5).map((page) => (
      <a class="blog__latest-content" href={page!.data.url}>
        {`- ${page!.data.title}`}
      </a>
    ))}
  </div>
);

const BlogCategories = (props: { search: Search }) => (
  <div class="blog__latest">
    <div class="blog__latest-title">カテゴリー</div>
    {props.search.values("category").map((value) => (
      <a class="blog__latest-content" href={`/blog/category/${value}/`}>
        {`- ${value}`}
      </a>
    ))}
  </div>
);

const BlogMonthlyArchives = (props: { search: Search }) => {
  const years = createArchive(props.search);
  return (
    <div class="blog__monthly">
      <div class="blog__monthly-title">月別アーカイブ</div>
      {years.map((y) => (
        <label class="blog-monthly-section">
          <input type="checkbox" class="toggleButton" />
          <div class="blog__monthly-year">
            <div class="monthly__dropdown-icon"></div>
            <div class="monthly__title">{`${y.year} (${y.count})`}</div>
          </div>
          <div class="monthly__dropdown-content">
            {y.months.map((m) => (
              <a href={`/blog/monthly/${m.month}/`}>
                {`${m.month} (${m.pages.length})`}
              </a>
            ))}
          </div>
        </label>
      ))}
    </div>
  );
};

export default (props: { search: Search }) => (
  <div class="blog__link">
    <BlogLatestArticles search={props.search} />
    <BlogCategories search={props.search} />
    <BlogMonthlyArchives search={props.search} />
  </div>
);

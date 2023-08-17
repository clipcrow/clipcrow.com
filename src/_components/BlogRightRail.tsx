import { Search } from "lume/plugins/search.ts";
import createArchive from "@/createArchive.ts";

const BlogLatestArticles = (props: { search: Search }) => (
  <div class="blog__latest">
    <div class="blog__latest-title">最新の記事</div>
    {props.search.pages("blog", "date=desc", 5).map((page) => (
      <p>
        <a class="blog__latest-content" href={page!.data.url}>
          {`- ${page!.data.title}`}
        </a>
      </p>
    ))}
  </div>
);

const BlogMonthlyArchives = (props: { search: Search }) => {
  const years = createArchive(props.search);
  return (
    <div class="blog__monthly">
      <div class="blog__monthly-title">月別アーカイブ</div>
      {years.map((y, index) => (
        <div class="blog-monthly-section">
          <div class="blog__monthly-year" tabIndex={index} id="dropdown-icon">
            <div class="monthly__dropdown-icon"></div>
            <p class="monthly__title">{`${y.year} (${y.count})`}</p>
          </div>
          <div class="monthly__dropdown-content">
            {y.months.map((m) => (
              <p>
                <a href="/404">{`${m.month} (${m.dates.length})`}</a>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default (props: { search: Search }) => (
  <div class="blog__link">
    <BlogLatestArticles search={props.search} />
    <BlogMonthlyArchives search={props.search} />
  </div>
);

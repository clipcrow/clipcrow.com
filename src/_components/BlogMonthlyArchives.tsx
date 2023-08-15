import { format } from "std/datetime/mod.ts";
import { Search } from "lume/plugins/search.ts";

export default (props: { search: Search }) => {
  const pages = props.search.pages("blog", "date=desc");
  const years: { year: string; months: { month: string; dates: Date[] }[] }[] =
    [];
  for (const page of pages) {
    const date: Date = page?.data.date;
    if (date) {
      const year = format(date, "yyyy");
      let y = year.length > 0 && years[year.length - 1];
      if (!y || y.year !== year) {
        y = { year, months: [] };
        years.push(y);
      }
      const month = format(date, "yyyy-MM");
      let m = y.months.length > 0 && y.months[y.months.length - 1];
      if (!m || m.month !== month) {
        m = { month, dates: [] };
        y.months.push(m);
      }
      m.dates.push(date);
    }
  }

  return (
    <div class="blog__monthly">
      <div class="blog__monthly-title">月別アーカイブ</div>
      {years.map((y, index) => (
        <div class="blog-monthly-section">
          <div class="blog__monthly-year" tabIndex={index} id="dropdown-icon">
            <div class="monthly__dropdown-icon"></div>
            <p class="monthly__title">{`${y.year} (${y.months.length})`}</p>
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

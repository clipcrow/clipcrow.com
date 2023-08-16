import { format } from "std/datetime/mod.ts";
import { Search } from "lume/plugins/search.ts";

interface Archive {
  year: string;
  count: number;
  months: {
    month: string;
    dates: Date[];
  }[];
}

export default (props: { search: Search }) => {
  const pages = props.search.pages("blog", "date=desc");
  const years: Archive[] = [];
  for (const page of pages) {
    const date: Date = page?.data.date;
    if (date) {
      const year = format(date, "yyyy");
      let y = years.length > 0 && years[years.length - 1];
      if (!y || y.year !== year) {
        if (y) {
          y.count += y.months[y.months.length - 1].dates.length;
        }
        y = { year, count: 0, months: [] };
        years.push(y);
      }
      const month = format(date, "yyyy-MM");
      let m = y.months.length > 0 && y.months[y.months.length - 1];
      if (!m || m.month !== month) {
        y.count += m ? m.dates.length : 0;
        m = { month, dates: [] };
        y.months.push(m);
      }
      m.dates.push(date);
    }
  }
  if (years.length > 0) {
    const oldest = years[years.length - 1];
    oldest.count += oldest.months[oldest.months.length - 1].dates.length;
  }

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

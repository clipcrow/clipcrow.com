import { Data, Page, PageData } from "lume/core.ts";
import { format } from "std/datetime/mod.ts";
import { Search } from "lume/plugins/search.ts";

interface Archive {
  year: string;
  count: number;
  months: {
    month: string;
    pages: (Data<PageData> | Page<PageData>)[];
  }[];
}

export default function (search: Search) {
  const pages = search.pages("blog", "date=desc");
  const years: Archive[] = [];
  for (const page of pages) {
    const date: Date = page?.data.date;
    if (page && date) {
      const year = format(date, "yyyy");
      let y = years.length > 0 && years[years.length - 1];
      if (!y || y.year !== year) {
        if (y) {
          y.count += y.months[y.months.length - 1].pages.length;
        }
        y = { year, count: 0, months: [] };
        years.push(y);
      }
      const month = format(date, "yyyy-MM");
      let m = y.months.length > 0 && y.months[y.months.length - 1];
      if (!m || m.month !== month) {
        y.count += m ? m.pages.length : 0;
        m = { month, pages: [] };
        y.months.push(m);
      }
      m.pages.push(page);
    }
  }
  if (years.length > 0) {
    const oldest = years[years.length - 1];
    oldest.count += oldest.months[oldest.months.length - 1].pages.length;
  }
  return years;
}

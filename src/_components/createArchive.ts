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

export default function(search: Search) {
    const pages = search.pages("blog", "date=desc");
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
    return years;
}

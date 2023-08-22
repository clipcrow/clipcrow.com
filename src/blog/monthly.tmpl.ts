import { PageData } from "lume/core.ts";
import createArchive from "@/createArchive.ts";

export default function* ({ search, paginate }: PageData) {
  const years = createArchive(search);
  for (const y of years) {
    for (const m of y.months) {
      for (
        const page of paginate(m.pages, {
          url: (
            n,
          ) => (n === 1
            ? `/blog/monthly/${m.month}/`
            : `/blog/monthly/${m.month}/${n}/`),
          size: 10,
        })
      ) {
        page.title = "クリップクロウ合同会社";
        page.layout = "layouts/blog.tsx";
        yield page;
      }
    }
  }
}

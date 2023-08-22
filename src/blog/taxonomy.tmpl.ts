import { PageData } from "lume/core.ts";

export default function* ({ search, paginate }: PageData) {
  const values = search.values("category");
  for (const value of values) {
    const pages = search.pages(`blog category=${value}`, "date=desc");
    for (
      const page of paginate(pages, {
        url: (
          n,
        ) => (n === 1
          ? `/blog/category/${value}/`
          : `/blog/category/${value}/${n}/`),
        size: 10,
      })
    ) {
      page.title = "クリップクロウ合同会社";
      page.layout = "layouts/blog.tsx";
      yield page;
    }
  }
}

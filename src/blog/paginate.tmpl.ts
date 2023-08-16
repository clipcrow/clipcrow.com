import { PageData } from "lume/core.ts";

export default function* ({ search, paginate }: PageData) {
  const pages = search.pages("blog", "date=desc");
  for (
    const page of paginate(pages, {
      url: (n) => (n === 1 ? "/blog/" : `/blog/${n}/`),
      size: 2,
    })
  ) {
    page.title = "クリップクロウ合同会社";
    page.layout = "layouts/blog.tsx";
    yield page;
  }
}

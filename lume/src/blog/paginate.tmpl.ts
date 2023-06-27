import { Data, Page, PageData } from "lume/core.ts";

export default function* ({ search, paginate }: PageData) {
  const pages = search.pages("blog", "date=desc");
  for (
    const page of paginate<(Page | Data)>(pages, {
      url: (n) => (n === 1 ? "/blog/" : `/blog/${n}/`),
      size: 10,
    })
  ) {
    page.title = "ブログ";
    page.layout = "layouts/blogList.tsx";
    yield page;
  }
}

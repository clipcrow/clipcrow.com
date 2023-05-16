import { Data, Page, PageData } from "lume/core.ts";

export default function* ({ search, paginate }: PageData) {
  const pages = search.pages("blog", "date=desc");
  for (
    const page of paginate<(Page | Data)>(pages, {
      url: (n) => (n === 1 ? "/blog/index.html" : `/blog/${n}/index.html`),
      size: 10,
    })
  ) {
    page.layout = "layouts/blog/section.tsx";
    yield page;
  }
}

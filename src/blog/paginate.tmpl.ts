import { Data, Page, PageData } from "lume/core.ts";

export const title = "ブログ記事";
export const layout = "layouts/single.tsx";

export default function* ({ search, paginate }: PageData) {
  const pages = search.pages("blog", "date=desc");
  for (
    const page of paginate<(Page | Data)>(pages, {
      url: (n) => (`/blog/${n}/index.html`),
      size: 10,
    })
  ) {
    page.layout = "layouts/blog/section.tsx";
    yield page;
  }
}

import type { Helper } from "lume/core.ts";
import { Search } from "lume/plugins/search.ts";
import EWwareBlogCart from "@/EWwareBlogCard.tsx";

export default (props: { search: Search, dateFormat?: Helper }) => (
  <div class="innerblock">
    {props.search.pages("blog", "date=desc", 5).map((page) => (
      <EWwareBlogCart page={page} dateFormat={props.dateFormat} />
    ))}
    <p class="btn round yellow">
      <a class="elevation-2" href="/blog/">ブログ記事の一覧</a>
    </p>
  </div>
);

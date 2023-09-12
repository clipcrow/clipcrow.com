import { format } from "std/datetime/mod.ts";
import { Search } from "lume/plugins/search.ts";

export default (props: { search: Search }) => (
  <div class="blog-card__wrapper">
    {props.search.pages("blog", "date=desc", 5).map((page) => (
      <a href={page!.data.url}>
        <div class="blog__card">
          <span>{format(page!.data.date, "yyyy-MM-dd")}</span>
          <p>{page!.data.title}</p>
        </div>
      </a>
    ))}
  </div>
);

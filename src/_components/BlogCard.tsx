import { format } from "std/datetime/mod.ts";
import type { Data, Page } from "lume/core.ts";

export default (props: { page: Page | Data }) => (
  <a href={props.page.data.url}>
    <div className="blog__card">
      <span>{format(props.page.data.date, "yyyy-MM-dd")}</span>
      <p>{props.page.data.title}</p>
    </div>
  </a>
);

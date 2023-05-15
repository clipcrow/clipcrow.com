import type { Helper } from "lume/core.ts";
import { Search } from "lume/plugins/search.ts";

export default (props: { search: Search; timestamp: Helper, path: string, caption: string, limit: number }) => (
  <div class="innerblock">
    {props.search.pages(props.path, "date=desc", props.limit).map((page) => (
      <div class="card round no-border elevation-2">
        <a class="infolink" href={page.data.url}>
          <p class="date">{props.timestamp(page.data.date)}</p>
          <p class="title">{page.data.title}</p>
        </a>
      </div>
    ))}
    <p class="btn round yellow">
      <a class="elevation-2" href={`/${props.path}/1/`}>{props.caption}</a>
    </p>
  </div>
);

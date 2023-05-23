import type { Data, Helper, Page } from "lume/core.ts";

export default (props: { page: Page | Data; dateFormat?: Helper }) => (
  <div class="card round no-border elevation-2">
    <a class="infolink" href={props.page.data.url}>
      <p class="date">{props.dateFormat!(props.page.data.date)}</p>
      <p class="title">{props.page.data.title}</p>
    </a>
  </div>
);

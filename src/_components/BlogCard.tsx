import type { Data, Helper, Page } from "lume/core.ts";

export default (props: { page: Page | Data; dateFormat?: Helper }) => (
  <a href={props.page.data.url}>
    <div className="blog__card">
      <span>{props.dateFormat!(props.page.data.date)}</span>
      <p>{props.page.data.title}</p>
    </div>
  </a>
);

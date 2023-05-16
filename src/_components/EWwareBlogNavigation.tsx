import { Page, Data } from "lume/core.ts";
import { Search } from "lume/plugins/search.ts";

export default (props: { page: Page | Data, search: Search }) => {
  if (props.page.data.url) {
    const previous = props.search.previousPage(props.page.data.url, "blog");
    const next = props.search.nextPage(props.page.data.url, "blog");
    return (
      <nav>
        <ul class="pagination justify-content-center">
          <li class={`page-item${previous ? "" : " disabled"}`}><a class="page-link" href={previous?.data.url}>{previous?.data.titlel}</a></li>
          <li class="page-item active"><a class="page-link" href={props.page.data.url}>{props.page.data.title}</a></li>
          <li class={`page-item${next ? "" : " disabled"}`}><a class="page-link" href={next?.data.url}>{next?.data.title}</a></li>
        </ul>
      </nav>
    )
  }
  return null;
};

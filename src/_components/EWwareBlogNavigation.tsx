import { Page, Data } from "lume/core.ts";
import { Search } from "lume/plugins/search.ts";

export default (props: { page: Page | Data, search: Search }) => {
  if (props.page.data.url) {
    const previous = props.search.previousPage(props.page.data.url, "blog", "date=desc");
    const next = props.search.nextPage(props.page.data.url, "blog", "date=desc");
    return (
      <nav>
        <ul class="pagination justify-content-center">
          { previous ? <li class="page-item"><a class="page-link" href={previous.data.url}> &lt; {previous.data.title} </a></li> : null }
          { next ? <li class="page-item"><a class="page-link" href={next.data.url}> {next.data.title} &gt; </a></li> : null }
        </ul>
      </nav>
    )
  }
  return null;
};

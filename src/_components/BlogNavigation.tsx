import { Data, Page } from "lume/core.ts";
import { Search } from "lume/plugins/search.ts";

export default (props: { page: Page | Data; search: Search }) => {
  if (props.page.data.url) {
    const previous = props.search.previousPage(
      props.page.data.url,
      "blog",
      "date=desc",
    );
    const next = props.search.nextPage(
      props.page.data.url,
      "blog",
      "date=desc",
    );
    return (
      <div class="blog__pagination">
        {previous
          ? (
            <a href={previous.data.url} class="pagination__section prev start">
              <span class="pagination__nav"></span>
              {previous.data.title}
            </a>
          )
          : null}
        {next
          ? (
            <a href={next.data.url} class="pagination__section next end">
              {next.data.title}
              <span class="pagination__nav"></span>
            </a>
          )
          : null}
      </div>
    );
  }
  return null;
};

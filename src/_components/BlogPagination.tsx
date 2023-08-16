import { PaginationInfo } from "lume/plugins/paginate.ts";

export default (props: { url: string | false; info?: PaginationInfo }) => {
  if (props.info) {
    const { totalPages, previous, next } = props.info;
    if (totalPages > 1 && props.url) {
      return (
        <div class="blog__pagination">
          {previous
            ? (
              <a href={previous} class="pagination__section prev">
                <span class="pagination__nav"></span>
                前のページ
              </a>
            )
            : null}
          {next
            ? (
              <a href={next} class="pagination__section">
                次のページ
                <span class="pagination__nav"></span>
              </a>
            )
            : null}
        </div>
      );
    }
  }
  return null;
};

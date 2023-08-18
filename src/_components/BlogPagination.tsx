import { PaginationInfo } from "lume/plugins/paginate.ts";

export default (props: { pagination?: PaginationInfo }) => {
  if (props.pagination) {
    const { totalPages, previous, next } = props.pagination;
    if (totalPages > 1) {
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

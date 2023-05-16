import { PaginationInfo } from "lume/plugins/paginate.ts";

export default (props: { url: string | false, info?: PaginationInfo }) => {
  if (props.info) {
    const { page, totalPages, previous, next } = props.info;
    if (totalPages > 1 && props.url) {
      return (
        <nav>
          <ul class="pagination justify-content-center">
            <li class={`page-item${previous ? "" : " disabled"}`}><a class="page-link" href={previous || ""}>&lt;</a></li>
            <li class="page-item active"><a class="page-link" href={props.url}>{page}</a></li>
            <li class={`page-item${next ? "" : " disabled"}`}><a class="page-link" href={next || ""}>&gt;</a></li>
          </ul>
        </nav>
      );
    }
  }
  return null;
};

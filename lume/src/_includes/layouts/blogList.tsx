import type { PageData, PageHelpers } from "lume/core.ts";
import EWwareTitle from "@/EWwareTitle.tsx";
import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";
import EWwareBlogCard from "@/EWwareBlogCard.tsx";
import EWwareBlogPagination from "@/EWwareBlogPagination.tsx";

export const layout = "layouts/withTitle.tsx";

export default (data: PageData, filters: PageHelpers) => (
  <>
    <EWwareContentsWrapper css="info" id="">
      {data.results &&
        data.results.map((result) => (
          <EWwareBlogCard page={result} dateFormat={filters.dateFormat} />
        ))}
    </EWwareContentsWrapper>
    <EWwareBlogPagination url={data.url} info={data.pagination} />
  </>
);

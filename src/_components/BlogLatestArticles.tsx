import { Search } from "lume/plugins/search.ts";

export default (props: { search: Search }) => (
  <div class="blog__latest">
    <div class="blog__latest-title">最新の記事</div>
    {
      props.search.pages("blog", "date=desc", 5).map((page) => (
        <p><a class="blog__latest-content" href={page!.data.url}>{`- ${page!.data.title}`}</a></p>
      ))
    }
  </div>
);

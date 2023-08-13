import type { Helper } from "lume/core.ts";
import { Search } from "lume/plugins/search.ts";
import BlogCard from "@/BlogCard.tsx";

export default (props: { search: Search; dateFormat?: Helper }) => (
  <div className="blog-card__wrapper">
    {props.search.pages("blog", "date=desc", 5).map((page) => (
      <BlogCard page={page!} dateFormat={props.dateFormat} />
    ))}
  </div>
);

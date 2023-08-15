import { Search } from "lume/plugins/search.ts";
import BlogCard from "@/BlogCard.tsx";

export default (props: { search: Search }) => (
  <div className="blog-card__wrapper">
    {props.search.pages("blog", "date=desc", 5).map((page) => (
      <BlogCard page={page!} />
    ))}
  </div>
);

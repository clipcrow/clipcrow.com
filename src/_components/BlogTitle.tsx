import { format } from "std/datetime/mod.ts";

export default (props: {
  title: string;
  category: string;
  date: Date;
  url: string;
  lead?: string;
}) => (
  <div class="blog__card">
    <a class="blog__card-content card-4" href={props.url}>
      <div class="card__inside card-4">
        <h4 class="card__title">{props.title}</h4>
        {props.lead ? <div class="card__lead">{props.lead}</div> : null}
        <object class="card__category">
          <a href={`/blog/category/${props.category}/`}>
            <div>{props.category}</div>
          </a>
        </object>
      </div>
    </a>
    <p class="blog__card-date">{format(props.date, "yyyy-MM-dd")}</p>
  </div>
);

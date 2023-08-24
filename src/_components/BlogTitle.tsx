import { format } from "std/datetime/mod.ts";

function getColorID(color: string | undefined) {
  const id = ["", "B", "PB", "RP", "Y", "YR", "N4"].indexOf(color || "");
  return id < 1 ? 4 : id;
}

function getImageID(image: string | undefined) {
  const id = ["", "SYSTEM", "LOGO"].indexOf(image || "");
  return id < 1 ? 0 : id;
}

export default (props: {
  title: string;
  category: string;
  color?: string;
  image?: string;
  date: Date;
  url: string;
  lead?: string;
}) => (
  <div class="blog__card">
    <a class={`blog__card-content card-${getColorID(props.color)} image-${getImageID(props.image)}`} href={props.url}>
      <div class={`card__inside card-${getColorID(props.color)}`}>
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

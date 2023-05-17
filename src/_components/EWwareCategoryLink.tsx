import type { ComponentChildren } from "preact";

export default (props: { class: string; link: string; children: ComponentChildren }) => (
  <p class={props.class}>
    <a href={props.link}>{props.children}</a>
  </p>
);

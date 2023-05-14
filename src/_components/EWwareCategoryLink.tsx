import type { ComponentChildren } from "preact";

export default (props: { link: string; children: ComponentChildren }) => (
  <p class="relation-link">
    <a href={props.link}>{props.children}</a>
  </p>
);

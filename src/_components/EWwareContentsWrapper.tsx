import type { ComponentChildren } from "preact";
export default (props: { css: string; id: string; children: ComponentChildren }) => (
  <section class="maincont contarea">
    <div class="contents_text">
      <div class={`innerblock ${props.css}`} id={props.id}>
        {props.children}
      </div>
    </div>
  </section>
);

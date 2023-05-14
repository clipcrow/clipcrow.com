export default (
  props: { beforeTitle?: string; title: string; afterTitle?: string },
) => (
  <section class="maincont u-section-header">
    <h1 class="contents_title">
      {props.beforeTitle
        ? <span class="before">{props.beforeTitle}</span>
        : null}
      {props.title}
      {props.afterTitle ? <span class="after">{props.afterTitle}</span> : null}
    </h1>
  </section>
);

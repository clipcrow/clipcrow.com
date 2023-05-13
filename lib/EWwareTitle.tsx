export default (props: { beforeTitle?: string, title: string, afterTitle?: string }) => (
    <section className="maincont u-section-header">
        <h1 className="contents_title">
            {props.beforeTitle ? <span className="before">{props.beforeTitle}</span> : null}
            {props.title}
            {props.afterTitle ? <span className="after">{props.afterTitle}</span> : null}
        </h1>
    </section>
);

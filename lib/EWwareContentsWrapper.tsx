
// deno-lint-ignore no-explicit-any
export default (props: { children: any }) => (
    <section className="maincont contarea">
        <div className="contents_text">
            <div className="innerblock info">
                {props.children}
            </div>
        </div>
    </section>
);

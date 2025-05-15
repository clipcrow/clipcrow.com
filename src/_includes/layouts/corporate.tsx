import AnimatedCloud from "@/AnimatedCloud.tsx";

export const layout = "layouts/base.tsx";

export default (data: Lume.Data) => (
  <main>
    <section id="contents_top">
      <div className="inner">
        <h1>
          <span className="txt_en">{data.title_en}</span>
          <span className="txt_j">{data.title}</span>
        </h1>
        <div className="bread_crumb">
          <ul>
            <li>
              <a href="/">TOP</a>
            </li>
            <li>{data.title}</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="main_contents">
      <AnimatedCloud id={6} />
      <article className="inner terms_contents">
        {data.children}
      </article>
    </section>
  </main>
);

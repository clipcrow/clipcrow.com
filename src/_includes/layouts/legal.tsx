import DownloadButtons from "@/DownloadButtons.tsx";

export const layout = "layouts/base.tsx";

export default (data: Lume.Data) => (
  <main>
    <section id="product_top">
      <h1>ClipCrow</h1>
    </section>
    <div className="bread_crumb product_crumb">
      <ul>
        <li>
          <a href="/">TOP</a>
        </li>
        <li>
          <a href="/product/">ClipCrow</a>
        </li>
        <li>{data.title}</li>
      </ul>
    </div>
    <section className="product_title">
      <h1>
        ClipCrow <br className="viewsp" />
        {data.title}
      </h1>
    </section>

    <section className="main_contents">
      <article className="inner terms_contents">
        {data.children}
      </article>
    </section>

    <DownloadButtons />
  </main>
);

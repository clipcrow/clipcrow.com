import AnimatedCloud from "../_components/AnimatedCloud.tsx";

export const title = "お問い合わせ | クリップクロウ";

export default () => (
  <main>
    <section id="contents_top">
      <div className="inner">
        <h1>
          <span className="txt_en">Contact Us</span>
          <span className="txt_j">お問い合わせ</span>
        </h1>
        <div className="bread_crumb">
          <ul>
            <li>
              <a href="/">TOP</a>
            </li>
            <li>お問い合わせ</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="main_contents">
      <AnimatedCloud id={5} />
      <div id="root"></div>
      <script type="module" src="./form.js"></script>
    </section>
  </main>
);

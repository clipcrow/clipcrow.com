import AnimatedCloud from "@/AnimatedCloud.tsx";

export const title = "お問い合わせ | クリップクロウ合同会社";
export const script = "/contact/js/form.js";

export default () => (
  <main>
    <section id="contents_top">
      <div className="inner">
        <h1><span className="txt_en">Contact Us</span><span className="txt_j">お問い合わせ</span></h1>
        <div className="bread_crumb">
          <ul>
            <li><a href="/">TOP</a></li>
            <li>お問い合わせ</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="main_contents">
      <AnimatedCloud id={5} />
      <div id="root"></div>
    </section>
  </main>
);

import AnimatedCloud from "@/AnimatedCloud.tsx";

export const title = "お問い合わせ | クリップクロウ合同会社";
export const layout = "layouts/base.tsx";
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
      <div className="column_contents contact_contents">
        <h2>送信完了</h2>
        <p>この度はお問い合わせいただきまして誠にありがとうございます。<br />
          内容を確認次第、担当者より折返しご連絡させていただきます。<br className="viewpc" />今しばらくお待ちくださいませ。</p>
        <div className="btn_detail btn_w">
          <a href="/">ホームへ戻る</a>
        </div>
      </div>
    </section>
  </main>
);
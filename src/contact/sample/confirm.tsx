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
        <h2>内容確認</h2>
        <p>ご入力いただいた内容をご確認いただき、よろしければ「送信」ボタンをクリックしてください。</p>
        <form className="contact_form">
          <div className="input_box">
            <div className="input_title">お名前<span className="ness">必須</span></div>
            <div className="confirm_text">入力テキスト</div>
          </div>
          <div className="input_box">
            <div className="input_title">メールアドレス<span className="ness">必須</span></div>
            <div className="confirm_text">入力テキスト入力テキスト入力テキスト</div>
          </div>
          <div className="radio_box">
            <div className="input_title">ご用件<span className="ness">必須</span></div>
            <div className="confirm_text">選択内容選択内容選択内容選択内容選択内容選択内容</div>
          </div>
          <div className="input_box">
            <div className="input_title">お問い合わせ内容<span className="ness">必須</span></div>
            <div className="confirm_text">入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト入力テキスト</div>
          </div>
          <div className="btn_area">
            <input className="back_button" type="submit" value="戻る" />
            <input className="submit_button" type="submit" value="送信" />
          </div>
        </form>
      </div>
    </section>
  </main>
);

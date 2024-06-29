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
            <li><a href="../top/index.html">TOP</a></li>
            <li>お問い合わせ</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="main_contents">
      <AnimatedCloud id={5} />
      <div className="column_contents contact_contents">
        <h2>お問い合わせ</h2>
        <p>土日祝を除く3営業日以内に担当者よりご連絡させていただきます。<br />
        お問い合わせ内容により、ご回答までにお時間をいただく場合または、ご回答が出来ない場合がございます。</p>
        <form className="contact_form">
          <div className="input_box">
            <input className="input_text" type="text" placeholder=" " name="name"/>
            <label className="input_label">お名前<span className="ness">必須</span></label>
            <div className="error-message"></div>
          </div>
          <div className="input_box">
            <input className="input_text" type="text" placeholder=" " name="email"/>
            <label className="input_label">メールアドレス<span className="ness">必須</span></label>
            <div className="error-message"></div>
          </div>
          <div className="radio_box">
            <label className="radio_title">ご用件<span className="ness">必須</span></label>
            <div className="radio_section">
              <input type="radio" id="dev" name="business" value="開発案件プロデュースのご依頼・ご相談"/>
              <label htmlFor="dev">開発案件プロデュースのご依頼・ご相談</label>
            </div>
            <div className="radio_section">
              <input type="radio" id="info" name="business" value="Essential Workwareについて"/>
              <label htmlFor="info">Essential Workwareについて</label>
            </div>
            <div className="radio_section">
              <input type="radio" id="other" name="business" value="その他"/>
              <label htmlFor="other">その他</label>
            </div>
            <div className="error-message"></div>
          </div>
          <div className="input_box">
            <textarea className="input_textarea" placeholder="" id="text" cols={30} rows={8} name="content"></textarea>
            <label className="input_label">お問い合わせ内容<span className="ness">必須</span></label>
            <div className="error-message"></div>
          </div>
          <div className="btn_area">
            <input className="submit_button" type="submit" value="内容確認" />
          </div>
        </form>
      </div>
    </section>
  </main>
);

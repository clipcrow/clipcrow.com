const FormComplete = () => {
  return (
    <main>
      <section className="content__maincont">
        <div className="confirm__title">
          <h4>送信完了</h4>
          <p>
            この度はお問い合わせいただきまして誠にありがとうございます。
            内容を確認次第、担当者より折返しご連絡させていただきます。
            今しばらくお待ちくださいませ。
          </p>
        </div>
      </section>
      <section className="complete__button-section">
        <a href="/" className="complete__button">ホームへ戻る</a>
      </section>
    </main>
  );
};

export default FormComplete;

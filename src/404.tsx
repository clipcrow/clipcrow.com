export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default () => (
  <main>
    <section className="error__cont">
      <img
        className="error__image"
        src="/images/404-error.png"
        alt="404_NotFound"
      />
      <div className="error__404">
        404<br />
        NOT FOUND
      </div>
      <div className="error__text">お探しのページは、見つかりませんでした。</div>
    </section>
    <section className="error__navigation">
      <a href="/" className="error__navigation-text">
        <span className="error__navigation-icon"></span>
        トップページに戻る
      </a>
    </section>
  </main>
);

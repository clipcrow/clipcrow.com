export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default () => (
  <main>
    <section class="error__cont">
      <img
        class="error__image"
        src="/images/404-error.png"
        alt="404_NotFound"
      />
      <div class="error__404">
        404<br />
        NOT FOUND
      </div>
      <div class="error__text">お探しのページは、見つかりませんでした。</div>
    </section>
    <section class="error__navigation">
      <a href="/" class="error__navigation-text">
        <span class="error__navigation-icon"></span>
        トップページに戻る
      </a>
    </section>
  </main>
);

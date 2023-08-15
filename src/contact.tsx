import type { PageData } from "lume/core.ts";

export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <main>
    <section class="content__page-title">
      <h1>お問い合わせ</h1>
    </section>
    <section class="content__maincont">
      <p class="content__form-title">
        土日祝を除く3営業日以内に担当者よりご連絡させていただきます。お問い合わせ内容により、ご回答までにお時間をいただく場合または、ご回答が出来ない場合がございます。
      </p>
      <form class="container" action="content_confirm.html">
        <div class="input__box">
          <input class="input__text" type="text" placeholder=" " required />
          <label class="input__label">お名前 *</label>
        </div>
        <div class="input__box">
          <input
            class="input__text error"
            type="text"
            placeholder=" "
            required
          />
          <label class="input__label">メールアドレス *</label>
          <div class="error-message">メールアドレスを入力してください</div>
        </div>
        <div class="radio__wrapper">
          <label class="radio__title" for="questions">ご用件 *</label>
          <div class="radio__section">
            <input type="radio" id="dev" value="dev" name="questions" />
            <label for="dev">開発案件プロデュースのご依頼・ご相談</label>
          </div>
          <div class="radio__section">
            <input type="radio" id="info" value="info" name="questions" />
            <label for="info">Essential Workwareについて</label>
          </div>
          <div class="radio__section">
            <input type="radio" id="other" value="other" name="questions" />
            <label for="other">その他</label>
          </div>
        </div>
        <div class="input__box">
          <textarea
            class="input__textarea"
            placeholder=""
            name="content"
            id="text"
            cols={30}
            rows={8}
            required
          >
          </textarea>
          <label class="input__label">お問い合わせ内容 *</label>
        </div>
        <input class="submit__button" type="submit" value="内容確認" />
      </form>
    </section>
  </main>
);

import type { PageData } from "lume/core.ts";

interface Career {
  year: string;
  text: string;
}

function createList(history: Career[]) {
  return history.map((career) => (
    <div class="career__content">
      <h6 class="career__content-year">{career.year}</h6>
      <p>{career.text}</p>
    </div>
  ));
}

export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <main>
    <section class="history__page-title">
      <h1>
        <span>クリップクロウ合同会社</span>
        <br />
        代表社員 栗原傑享
      </h1>
    </section>
    <section class="history__main-cont">
      <div class="history__kv">
        {/*<img class="history__kv-image" src="" alt="" />*/}
        <p class="history__kv-text">{data.children}</p>
      </div>
      <div class="career">
        <h4 class="career__title">経歴</h4>
        <div class="career__section">
          {createList(data.history)}
        </div>
      </div>
    </section>
  </main>
);

import type { Event, EWData } from "@/Type.ts";

function createList(careers: Event[]) {
  return careers.map((career) => (
    <div className="career__content">
      <h6 className="career__content-year">{career.year}</h6>
      <p>{career.text}</p>
    </div>
  ));
}

export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default (data: EWData) => (
  <main>
    <section className="history__page-title">
      <h1>
        <span>クリップクロウ合同会社</span>
        <br />
        代表社員 栗原傑享
      </h1>
    </section>
    <section className="history__main-cont">
      <div className="history__kv">
        {/*<img className="history__kv-image" src=""/>*/}
        <p className="history__kv-text">
          妻と娘2人、愛犬のゴールデンレトリバーとで東京都在住。<br />
          趣味はアクアリウム、プラモデル。最近ちょっと良いクロスバイクを購入し、毎日乗るのが楽しい。
        </p>
      </div>
      <div className="career">
        <h4 className="career__title">経歴</h4>
        <div className="career__section">
          {createList(data.careers)}
        </div>
      </div>
    </section>
  </main>
);

import type { Event, EWData } from "@/Type.ts";
import AnimatedCloud from "@/AnimatedCloud.tsx";

export const title = "代表社員 栗原傑享 | クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

function renderList(list: Event[]) {
  return list.map((row) => (
    <>
      <h3>{row.year}</h3>
      <p>{row.text}</p>
    </>
  ));
}

export default (data: EWData) => (
  <main>
    <section id="contents_top">
      <div className="inner">
        <h1><span className="txt_en">Profile</span><span className="txt_j">代表社員 栗原傑享</span></h1>
        <div className="bread_crumb">
          <ul>
            <li><a href="/">TOP</a></li>
            <li>代表社員 栗原傑享</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="main_contents">
      <AnimatedCloud id={5} />
      <AnimatedCloud id={6} />
      <AnimatedCloud id={7} />
      <div className="column_contents">
        <p className="leadership_lead">妻と娘2人、愛犬のゴールデンレトリバーとで東京都在住。<br />
        趣味はアクアリウム、プラモデル。最近ちょっと良いクロスバイクを購入し、毎日乗るのが楽しい。</p>
        <h2>経歴</h2>
        {renderList(data.careers)}
      </div>
    </section>
  </main>
);

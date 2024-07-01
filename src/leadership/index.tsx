import AnimatedCloud from "@/AnimatedCloud.tsx";

export const title = "代表社員経歴 | クリップクロウ合同会社";

interface CareersData extends Lume.Data {
  careers: {
    year: string;
    text: string;
    link?: string;
  }[];
}

export default (data: CareersData) => (
  <main>
    <section id="contents_top">
      <div className="inner">
        <h1><span className="txt_en">Profile</span><span className="txt_j">代表社員経歴</span></h1>
        <div className="bread_crumb">
          <ul>
            <li><a href="/">TOP</a></li>
            <li>代表社員経歴</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="main_contents">
      <AnimatedCloud id={5} />
      <AnimatedCloud id={6} />
      <AnimatedCloud id={7} />
      <div className="column_contents">
        <h2>代表社員 栗原傑享の経歴</h2>
        <p className="leadership_lead">妻と娘2人、愛犬のゴールデンレトリバーとで東京都在住。<br />
        趣味はアクアリウム、プラモデル。最近ちょっと良いクロスバイクを購入し、毎日乗るのが楽しい。</p>
        {data.careers.map((row) => (<><h3>{row.year}</h3><p>{row.text}</p></>))}
      </div>
    </section>
  </main>
);

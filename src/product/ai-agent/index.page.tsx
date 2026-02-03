import DownloadButtons from "@/DownloadButtons.tsx";
import AnimatedCloud from "@/AnimatedCloud.tsx";

export const title = "AIエージェントとの共生 | ClipCrow";
export const bodyClass = "bg_w";
export const extra_css = "/assets/css/product_lp.css";

export default () => (
  <main>
    <div className="bread_crumb product_crumb">
      <ul>
        <li><a href="/">TOP</a></li>
        <li>AIエージェント</li>
      </ul>
    </div>
    
    <section className="lp_hero">
      <AnimatedCloud id={1} />
      <div className="inner">
        <h1>AIエージェントとの共生</h1>
        <p className="hero_copy">
          チャットボットではなく、チームの一員として。
        </p>
      </div>
    </section>

    <section className="lp_section lp_intro">
      <div className="inner">
        <h2>「昨日までのチャットに、AIエージェントが配属される。」</h2>
        <p>
          ClipCrow v3.8が実現したのは、AIとの1対1の対話ではありません。<br />
          人間同士の活発なコミュニケーションの真ん中に、AIエージェントが自然に溶け込む体験です。
        </p>
      </div>
    </section>

    <section className="lp_section">
      <div className="inner">
        <div style={{display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "center", justifyContent: "center"}}>
            <div style={{flex: "1", minWidth: "300px", background: "#f9f9f9", padding: "40px", borderRadius: "16px"}}>
                <h3>アイコンと名前を持つ</h3>
                <p>
                    AIは、あなたと同じようにアイコンを持ち、名前を持ち、チャットに参加します。<br />
                    「システム」ではなく「彼/彼女」と呼びたくなる存在感が、チームの心理的安全性すら高めます。
                </p>
            </div>
            <div style={{flex: "1", minWidth: "300px", background: "#f9f9f9", padding: "40px", borderRadius: "16px"}}>
                <h3>文脈を理解する</h3>
                <p>
                    過去の会話の流れ、プロジェクトの目的、現在の状況。<br />
                    すべてを把握した上で、適切なタイミングで発言します。<br />
                    いちいち前提条件を説明する必要はありません。
                </p>
            </div>
        </div>
      </div>
    </section>
    
    <section className="lp_section lp_transform">
       <div className="inner">
         <h2 style={{textAlign: "center"}}>メンションと自発的介入</h2>
         <div className="lp_transform_grid">
            <article className="lp_feature_card">
                <h3>@メンションで呼び出し</h3>
                <p>
                    困ったときは、特定の人に聞くように、AIにメンションを飛ばしてください。<br />
                    即座に回答が得られます。
                </p>
            </article>
            <article className="lp_feature_card">
                <h3>自発的なサポート</h3>
                <p>
                    あなたが呼び出さなくても、AIは会話を見ています。<br />
                    「それなら、この資料が役立ちますよ」<br />
                    必要な情報があれば、AIから声をかけることもあります。
                </p>
            </article>
         </div>
       </div>
    </section>

    <section className="lp_closing">
      <div className="inner">
        <DownloadButtons />
      </div>
    </section>
  </main>
);

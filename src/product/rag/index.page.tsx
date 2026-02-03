import DownloadButtons from "@/DownloadButtons.tsx";
import AnimatedCloud from "@/AnimatedCloud.tsx";

export const title = "組織の記憶 (RAG) | ClipCrow";
export const bodyClass = "bg_w";
export const extra_css = "/assets/css/product_lp.css";

export default () => (
  <main>
    <div className="bread_crumb product_crumb">
      <ul>
        <li><a href="/">TOP</a></li>
        <li>組織の記憶 (RAG)</li>
      </ul>
    </div>
    
    <section className="lp_hero">
      <AnimatedCloud id={2} />
      <div className="inner">
        <h1>組織の記憶 (RAG)</h1>
        <p className="hero_copy">
          マニュアルを探す時間は、AIに問いかける1秒に。
        </p>
      </div>
    </section>

    <section className="lp_section lp_intro">
      <div className="inner">
        <h2>「あの資料、どこだっけ？」をゼロにする。</h2>
        <p>
          優秀なメンバーが、資料探しに時間を使っているのは損失です。<br />
          ClipCrowは、組織固有の知識をAIに「記憶」させることができます。<br />
          1,000ページのPDFも、数分でAIの脳内へ。
        </p>
      </div>
    </section>

    <section className="lp_section lp_concept">
      <div className="inner">
        <h2>ドラッグ＆ドロップで知識化</h2>
        <div className="lp_card">
          <h3>専門知識を持った新人が、即日戦力化。</h3>
          <p style={{ marginTop: "20px", textAlign: "left" }}>
            使い方は簡単です。チャット画面にPDFやWord、Textファイルをドロップするだけ。<br />
            AIは即座に内容をインデックス化し、次の瞬間からその知識に基づいた回答を始めます。<br />
            <br />
            社内規定、製品マニュアル、過去の議事録。<br />
            すべてをAIに読ませておけば、彼は「生き字引」としてチームを支えます。
          </p>
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

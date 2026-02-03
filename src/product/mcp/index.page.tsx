import DownloadButtons from "@/DownloadButtons.tsx";
import AnimatedCloud from "@/AnimatedCloud.tsx";

export const title = "自律的実行 (MCP) | ClipCrow";
export const bodyClass = "bg_w";
export const extra_css = "/assets/css/product_lp.css";

export default () => (
  <main>
    <div className="bread_crumb product_crumb">
      <ul>
        <li><a href="/">TOP</a></li>
        <li>自律的実行 (MCP)</li>
      </ul>
    </div>
    
    <section className="lp_hero">
      <AnimatedCloud id={3} />
      <div className="inner">
        <h1>自律的実行 (MCP)</h1>
        <p className="hero_copy">
          議論だけでなく、タスクを動かすAI。
        </p>
      </div>
    </section>

    <section className="lp_section lp_intro">
      <div className="inner">
        <h2>「で、誰がやるの？」をAIが拾う。</h2>
        <p>
          チャットでの決定事項が、そのまま流れて忘却されることはありませんか？<br />
          ClipCrowのAIは、会話の流れから「すべきこと」を読み取り、<br />
          タスクとして起票し、担当者に割り振り、期限を設定します。
        </p>
      </div>
    </section>

    <section className="lp_section lp_transform">
       <div className="inner">
         <h2 style={{textAlign: "center"}}>Model Context Protocol (MCP)</h2>
         <p style={{textAlign: "center", marginBottom: "40px"}}>
             AIが外部ツールを安全かつ自由に使うための標準規格、MCPを採用。<br />
             ClipCrow自体もMCPサーバーとして振る舞い、AIに操作権限を与えています。
         </p>
         <div className="lp_transform_grid">
            <article className="lp_feature_card">
                <h3>タスク管理の自動化</h3>
                <p>
                    「来週までにやっといて」という会話から、<br />
                    AIがカレンダーを確認し、期限を設定したタスクカードを作成します。
                </p>
            </article>
            <article className="lp_feature_card">
                <h3>進捗のフォローアップ</h3>
                <p>
                    期限が近づくと、AIが担当者に優しくリマインド。<br />
                    遅れている理由を聞き出し、必要ならPMに相談を促します。
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

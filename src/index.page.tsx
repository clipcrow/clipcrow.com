import DownloadButtons from "@/DownloadButtons.tsx";
import AnimatedCloud from "@/AnimatedCloud.tsx";

export const title = "ClipCrow | AIネイティブ・エディション";
export const bodyClass = "bg_w";
export const extra_css = "/assets/css/product_lp.css";

export default () => (
  <main>
    {/* 1. Main Visual */}
    <section className="lp_hero">
      <AnimatedCloud id={1} />
      <div className="inner">
        <h1>
          AIエージェントを組織の一員として<br />
          迎え入れる、新しい当たり前
        </h1>
        <div className="hero_visual">
          <img
            src="clipcrow_with_bot.png"
            alt="AIエージェントと共に働く"
          />
        </div>
      </div>
    </section>

    {/* 2. Introduction */}
    <section className="lp_section lp_intro">
      <div className="inner">
        <h2>AIへの期待と「実装」の壁</h2>
        <p>
          「AIで業務が変わる」と誰もが言います。<br />
          しかし、あなたのチャット画面にAIの居場所はありますか？
        </p>
        <p>
          多くの組織が生成AIを導入しながら、<br />
          結局は個人のブラウザ上で「検索の代わり」に使うだけに留まっています。
        </p>
        <p>
          組織の本当の課題は、個人の知識ではなく、<br />
          <span className="txt_marker text-bold">チーム全体の「実行力」と「共通認識」にあるはずです。</span>
        </p>
        <p className="emphasis">
          ClipCrowはついにAIを「ツール」から<br />
          「チームメンバー」へと昇華させました。
        </p>
      </div>
    </section>

    {/* 3. Core Concept */}
    <section className="lp_section lp_concept">
      <div className="inner">
        <h2>AIエージェントとの共生</h2>
        <div className="lp_card">
          <h3>「昨日までのチャットに、AIエージェントが配属される。」</h3>
          <p style={{ marginTop: "20px", textAlign: "left" }}>
            ClipCrowが実現したのは、AIとの1対1の対話ではありません。<br />
            人間同士の活発なコミュニケーションの真ん中に、AIエージェントが自然に溶け込む体験です。<br />
            AIは、あなたと同じようにアイコンを持ち、名前を持ち、チャットに参加します。<br />
            彼は、組織のすべての記憶を保持し、すべての進捗を見守る、最も頼れるパートナーです。
          </p>
          <div style={{ marginTop: "30px" }}>
            <a href="/product/ai-agent/" className="btn_detail_g" style={{ display: "inline-block", padding: "10px 30px", background: "#333", color: "#fff", borderRadius: "30px", textDecoration: "none" }}>AIエージェントについて詳しく</a>
          </div>
        </div>
      </div>
    </section>

    {/* 4. Transformation */}
    <section className="lp_section lp_transform">
      <div className="inner">
        <h2 style={{ textAlign: "center" }}>知能と実行の融合</h2>
        <p style={{ textAlign: "center" }}>
          「教えてくれるだけのAIは、もういらない。」<br />
          ClipCrowの統合エージェントは、あなたの組織のために「自律的」に動きます。
        </p>
        <div className="lp_transform_grid">
          <article className="lp_feature_card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
                <h3>[知能] 組織の記憶を即座に武装 (RAG)</h3>
                <p>
                1,000ページのPDFも、数分でAIの知識に。<br />
                マニュアルを探す時間は、AIに問いかける1秒に変わります。
                </p>
            </div>
            <div style={{ marginTop: "20px", textAlign: "right" }}>
                <a href="/product/rag/" style={{ color: "#00acc1", fontWeight: "bold", textDecoration: "none" }}>もっと詳しく &gt;</a>
            </div>
          </article>
          <article className="lp_feature_card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
                <h3>[実行] タスクを自ら動かす (MCP)</h3>
                <p>
                チャットの流れからタスクを読み取り、進捗を更新し、遅れているメンバーを優しくフォローする。<br />
                AIが「実務」を担うことで、人間は「創造」に専念できます。
                </p>
            </div>
            <div style={{ marginTop: "20px", textAlign: "right" }}>
                <a href="/product/mcp/" style={{ color: "#00acc1", fontWeight: "bold", textDecoration: "none" }}>もっと詳しく &gt;</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/* 5. 3 Steps */}
    <section className="lp_section lp_steps">
      <div className="inner">
        <h2>AI導入の3ステップ</h2>
        <div className="lp_step_grid">
          <div className="lp_step_item">
            <span className="lp_step_num">01</span>
            <span className="lp_step_title">アプリを入れる</span>
            <p>App Store / Google Playから<br />今すぐインストール</p>
          </div>
          <div className="lp_step_item">
            <span className="lp_step_num">02</span>
            <span className="lp_step_title">APIキーをセット</span>
            <p>Googleの無料枠活用で<br />実質0円からスタート (BYOK)</p>
          </div>
          <div className="lp_step_item">
            <span className="lp_step_num">03</span>
            <span className="lp_step_title">資料を投げる</span>
            <p>PDFをドロップするだけで<br />RAG（組織の記憶）が開始</p>
          </div>
        </div>
      </div>
    </section>

    {/* 6. Security & Cost */}
    <section className="lp_section lp_security">
      <div className="inner">
        <h2>最高レベルの知能を、<br />最小のコストと最大の安全で。</h2>
        <p>私たちはBYOK（自身のAPIキー利用）という透明な道を選びました。</p>
        <div className="lp_security_list">
          <div className="lp_sec_item">
            <h3>圧倒的低コスト</h3>
            <p>Googleの無料枠をフル活用。実質0円から、エンタープライズ級のAI環境を構築。</p>
          </div>
          <div className="lp_sec_item">
            <h3>データの聖域</h3>
            <p>有料キーの利用で、組織の機密はAIの学習から完全に遮断されます。</p>
          </div>
          <div className="lp_sec_item">
            <h3>信頼の基盤</h3>
            <p>ISMS取得済みの株式会社による開発と、2022年からのSI知見を持つ合同会社の伴走。</p>
          </div>
        </div>
        <div style={{ marginTop: "40px" }}>
            <a href="/product/byok/" className="btn_detail_g" style={{ display: "inline-block", padding: "10px 30px", border: "2px solid #333", color: "#333", borderRadius: "30px", textDecoration: "none", background: "transparent" }}>透明性とコストについて詳しく</a>
        </div>
      </div>
    </section>

    {/* 7. Closing */}
    <section className="lp_closing">
      <div className="inner">
        <h2>
          AIと人間が混ざり合う、<br />新しい組織の形へ。
        </h2>
        <p>
          2週間ごとに進化し続けるこのプラットフォームで、<br />
          あなたの組織の「意志」を、AIと共に加速させましょう。
        </p>
        <DownloadButtons />
        <a href="mailto:info@clipcrow.com?subject=Locall LLM Consultation" className="lp_contact_link">
          オンプレミス・LLMローカル構築の相談はこちら
        </a>
      </div>
    </section>
  </main>
);

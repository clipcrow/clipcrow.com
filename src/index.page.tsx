import DownloadButtons from "@/DownloadButtons.tsx";
import AnimatedCloud from "@/AnimatedCloud.tsx";

export const title = "ClipCrow | AIネイティブ・エディション";
export const bodyClass = "bg_w";
export const extra_css = "/assets/css/product_lp.css";

export default () => (
  <main>
    {/* 1. Main Visual (Hero) */}
    <section className="lp_hero">
      <AnimatedCloud id={1} />
      <AnimatedCloud id={2} /> {/* Added cloud 2 */}
      <div className="inner">
        <h1 className="animated fadeInUp">
          AIエージェントを組織の一員として<br />
          迎え入れる、新しい当たり前
        </h1>
        
        <div className="hero_visual animated fadeInUp deley01">
          <img
            src="clipcrow_with_bot.png"
            alt="AIエージェントと共に働く"
          />
        </div>

        {/* Merged Intro Content */}
        <div className="lp_section_merged">
          <div
            className="lp_merged_grid animated"
            data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
          >
            <div className="lp_merged_left">
              <p>
                「AIで業務が変わる」と誰もが言います。<br />
                しかし、あなたのチャット画面にAIの居場所はありますか？
              </p>
              <p style={{ marginTop: "30px" }}>
                多くの組織が生成AIを導入しながら、<br />
                結局は個人のブラウザ上で「検索の代わり」に使うだけに留まっています。
              </p>
              <p style={{ marginTop: "30px" }}>
                組織の本当の課題は、個人の知識ではなく、<br />
                チーム全体の「実行力」と「共通認識」にあるはずです。
              </p>
            </div>
            <div className="lp_merged_right">
              <span className="emphasis">
                ClipCrowはついにAIを「ツール」から<br />
                「チームメンバー」へと昇華させました。
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 3. Core Concept (Two Column) */}
    <section className="lp_concept">
       <AnimatedCloud id={4} /> {/* Added cloud 4 (bottom right) */}
      <div className="inner">
        <div 
          className="lp_concept_container animated"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          <div className="lp_concept_img">
            <img src="/assets/images/illust/13.png" alt="AI Agent Concept" />
          </div>
          <div className="lp_concept_content">
            <h3>「昨日までのチャットに、<br/>AIエージェントが配属される。」</h3>
            <p>
              ClipCrowが実現したのは、AIとの1対1の対話ではありません。<br />
              人間同士の活発なコミュニケーションの真ん中に、AIエージェントが自然に溶け込む体験です。
            </p>
            <p>
              AIは、あなたと同じようにアイコンを持ち、名前を持ち、チャットに参加します。<br />
              彼は、組織のすべての記憶を保持し、すべての進捗を見守る、最も頼れるパートナーです。
            </p>
            <div style={{ marginTop: "30px" }}>
              <a href="/product/ai-agent/" className="link_arrow">
                AIエージェントについて詳しく <span className="arrow-right">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 4. Transformation (Zig-Zag) */}
    <section className="lp_transform">
      <AnimatedCloud id={5} /> {/* Added cloud 5 */}
      <div className="inner">
        <h2
          className="animated"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          知能と実行の融合
        </h2>
        <p 
          className="lp_transform_lead animated"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          「教えてくれるだけのAIは、もういらない。」<br />
          ClipCrowの統合エージェントは、あなたの組織のために「自律的」に動きます。
        </p>

        {/* Feature 1: RAG */}
        <div 
          className="lp_feature_row animated"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <div className="lp_feature_text">
            <span className="lp_feature_label">Knowledge / RAG</span>
            <h3>組織の記憶を即座に武装</h3>
            <p>
              1,000ページのPDFも、数分でAIの知識に。<br />
              マニュアルを探す時間は、AIに問いかける1秒に変わります。<br/>
              過去の議事録、技術仕様書、顧客対応履歴。すべてがAIの脳になります。
            </p>
            <a href="/product/rag/" className="link_arrow">
              RAG（組織の記憶）機能について <span className="arrow-right">→</span>
            </a>
          </div>
          <div className="lp_feature_media">
            <img src="/assets/images/illust/07.png" alt="RAG Knowledge" />
          </div>
        </div>

        <AnimatedCloud id={6} /> {/* Added cloud 6 */}

        {/* Feature 2: MCP */}
        <div 
          className="lp_feature_row reverse animated"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <div className="lp_feature_text">
            <span className="lp_feature_label">Action / MCP</span>
            <h3>タスクを自ら動かす</h3>
            <p>
              チャットの流れからタスクを読み取り、進捗を更新し、遅れているメンバーを優しくフォローする。<br />
              外部APIとの連携で、チケットの手配やサーバーの操作さえも。<br/>
               AIが「実務」を担うことで、人間は「創造」に専念できます。
            </p>
            <a href="/product/mcp/" className="link_arrow">
              MCP（ツール実行）機能について <span className="arrow-right">→</span>
            </a>
          </div>
          <div className="lp_feature_media">
            <img src="/assets/images/illust/14.png" alt="MCP Action" />
          </div>
        </div>
      </div>
    </section>

    {/* 5. 3 Steps */}
    <section className="lp_steps">
      <div className="inner">
        <h2
          className="animated"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          AI導入の3ステップ
        </h2>
        <div 
          className="lp_step_flow animated"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          <div className="lp_step_node">
            <span className="lp_step_num">01</span>
            <span className="lp_step_title">アプリを入れる</span>
            <p>App Store / Google Playから<br />今すぐインストール</p>
          </div>
          <div className="lp_step_node">
            <span className="lp_step_num">02</span>
            <span className="lp_step_title">APIキーをセット</span>
            <p>Googleの無料枠活用で<br />実質0円からスタート (BYOK)</p>
          </div>
          <div className="lp_step_node">
            <span className="lp_step_num">03</span>
            <span className="lp_step_title">資料を投げる</span>
            <p>PDFをドロップするだけで<br />RAG（組織の記憶）が開始</p>
          </div>
        </div>
      </div>
    </section>

    {/* 6. Security & Cost */}
    <section className="lp_security">
       <AnimatedCloud id={7} /> {/* Added cloud 7 */}
      <div className="inner">
        <h2
          className="animated"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          最高レベルの知能を、<br />最小のコストと最大の安全で。
        </h2>
        <p 
          className="lp_security_lead animated"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          私たちはBYOK（自身のAPIキー利用）という透明な道を選びました。
        </p>
        
        <div 
          className="lp_sec_grid animated"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          <div className="lp_sec_card">
            <h3>圧倒的低コスト</h3>
            <p>Googleの無料枠をフル活用。実質0円から、エンタープライズ級のAI環境を構築。</p>
          </div>
          <div className="lp_sec_card">
            <h3>データの聖域</h3>
            <p>有料キーの利用で、組織の機密はAIの学習から完全に遮断されます。</p>
          </div>
          <div className="lp_sec_card">
            <h3>信頼の基盤</h3>
            <p>ISMS取得済みの株式会社による開発と、2022年からのSI知見を持つ合同会社の伴走。</p>
          </div>
        </div>
        
        <div style={{ marginTop: "40px" }}>
            <a href="/product/byok/" className="btn_detail_g" style={{ display: "inline-block", padding: "12px 40px", border: "2px solid #333", color: "#333", borderRadius: "30px", textDecoration: "none", background: "transparent", whiteSpace: "nowrap" }}>
              透明性とコストについて詳しく
            </a>
        </div>
      </div>
    </section>

    {/* 7. Closing */}
    <section className="lp_closing">
      <div className="inner">
        <h2
          className="animated"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          AIと人間が混ざり合う、<br />新しい組織の形へ。
        </h2>
        <p 
          className="animated deley01"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
          style={{ marginBottom: "60px", fontSize: "1.2rem" }}
        >
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

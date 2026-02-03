import DownloadButtons from "@/DownloadButtons.tsx";
import AnimatedCloud from "@/AnimatedCloud.tsx";

export const title = "透明性とコスト (BYOK) | ClipCrow";
export const bodyClass = "bg_w";
export const extra_css = "/assets/css/product_lp.css";

export default () => (
  <main>
    <div className="bread_crumb product_crumb">
      <ul>
        <li><a href="/">TOP</a></li>
        <li>透明性とコスト (BYOK)</li>
      </ul>
    </div>
    
    <section className="lp_hero">
      <AnimatedCloud id={4} />
      <div className="inner">
        <h1>透明性とコスト (BYOK)</h1>
        <p className="hero_copy">
          最高レベルの知能を、最小コストと最大安全で。
        </p>
      </div>
    </section>

    <section className="lp_section lp_intro">
      <div className="inner">
        <h2>Bring Your Own Key (BYOK)</h2>
        <p>
          ClipCrowは、AI利用料を上乗せして請求するモデルではありません。<br />
          あなたが契約した（あるいは無料枠の）APIキーを、<br />
          あなたが管理するアプリに入力して使う「BYOK」モデルです。
        </p>
      </div>
    </section>

    <section className="lp_section lp_security">
      <div className="inner">
        <h2>3つのメリット</h2>
        <div className="lp_security_list">
          <div className="lp_sec_item">
            <h3>1. 圧倒的な低コスト</h3>
            <p>
                Google Gemini API等の無料枠を活用すれば、初期費用・ランニングコスト実質0円で<br />
                最新のエンタープライズAI環境が手に入ります。
            </p>
          </div>
          <div className="lp_sec_item">
            <h3>2. データの聖域</h3>
            <p>
                ご自身の有料APIキーを使用する場合、入力データがAIモデルの再学習に使われないことが<br />
                プロバイダー（Googleなど）の規約により保証されます。
            </p>
          </div>
          <div className="lp_sec_item">
            <h3>3. 透明性</h3>
            <p>
                「裏で何が起きているか」が明確です。<br />
                どのモデルを使っているか、どれくらいトークンを消費したか、すべてご自身で把握・制御可能です。
            </p>
          </div>
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

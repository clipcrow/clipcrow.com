import type { EWData } from "@/Type.ts";
import StoreLinks from "@/StoreLinks.tsx";
import FeatureCards from "@/FeatureCards.tsx";

export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default (data: EWData) => (
  <main>
    <section className="features__page-title">
      <h1>
        <span>Essential Workwareの</span>
        <br />
        特長・機能
      </h1>
    </section>
    {
      /*
    <section className="features__kv">
      <p className="features__kv-text">
        ClipCrow Essential
        Workwareには、経営者、スタッフ、ワーカー、それぞれが必要とする特長・機能が備わっています。
      </p>
      <div className="features__kv-image">
        <div className="kv__card manager">
          <div className="kv__card-badge">
            <img src="/images/badge01.png" alt="badge 1" />
            <h2>
              経営者
              <span>の声</span>
            </h2>
          </div>
          <div className="triangle"></div>
          <p className="kv__card-text">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキス
          </p>
        </div>
        <div className="kv__card stuff">
          <div className="kv__card-badge">
            <img src="/images/badge02.png" alt="badge 2" />
            <h2>
              スタッフ
              <span>の声</span>
            </h2>
          </div>
          <div className="triangle"></div>
          <p className="kv__card-text">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキス
          </p>
        </div>
        <div className="kv__card worker">
          <div className="kv__card-badge">
            <img src="/images/badge03.png" alt="badge 3" />
            <h2>
              ワーカー
              <span>の声</span>
            </h2>
          </div>
          <div className="triangle"></div>
          <p className="kv__card-text">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキス
          </p>
        </div>
      </div>
    </section>
      */
    }
    <FeatureCards usages={data.usages} features={data.features} />
    <StoreLinks />
  </main>
);

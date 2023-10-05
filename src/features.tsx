import type { PageData } from "lume/core.ts";
import StoreLinks from "@/StoreLinks.tsx";
import FeatureCards from "@/FeatureCards.tsx";

export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <main>
    <section class="features__page-title">
      <h1>
        <span>Essential Workwareの</span>
        <br />
        特長・機能
      </h1>
    </section>
{/*
    <section class="features__kv">
      <p class="features__kv-text">
        ClipCrow Essential
        Workwareには、経営者、スタッフ、ワーカー、それぞれが必要とする特長・機能が備わっています。
      </p>
      <div class="features__kv-image">
        <div class="kv__card manager">
          <div class="kv__card-badge">
            <img src="/images/badge01.png" alt="badge 1" />
            <h2>
              経営者
              <span>の声</span>
            </h2>
          </div>
          <div class="triangle"></div>
          <p class="kv__card-text">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキス
          </p>
        </div>
        <div class="kv__card stuff">
          <div class="kv__card-badge">
            <img src="/images/badge02.png" alt="badge 2" />
            <h2>
              スタッフ
              <span>の声</span>
            </h2>
          </div>
          <div class="triangle"></div>
          <p class="kv__card-text">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキス
          </p>
        </div>
        <div class="kv__card worker">
          <div class="kv__card-badge">
            <img src="/images/badge03.png" alt="badge 3" />
            <h2>
              ワーカー
              <span>の声</span>
            </h2>
          </div>
          <div class="triangle"></div>
          <p class="kv__card-text">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキス
          </p>
        </div>
      </div>
    </section>
*/}
    <FeatureCards usages={data.usages} features={data.features} />
    <StoreLinks />
  </main>
);

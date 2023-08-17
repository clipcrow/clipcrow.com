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
    <section class="features__kv">
      <p class="features__kv-text">
        ClipCrow Essential
        Workwareには、経営者、スタッフ、ワーカー、それぞれが必要とする特徴・機能が備わっています。
      </p>
      <div class="features__kv-image">
        <img src="/images/features_cover01.png" alt="manager" />
        <img src="/images/features_cover02.png" alt="staff" />
        <img src="/images/features_cover03.png" alt="worker" />
      </div>
    </section>
    <FeatureCards usages={data.usage} features={data.feature} />
    <StoreLinks />
  </main>
);

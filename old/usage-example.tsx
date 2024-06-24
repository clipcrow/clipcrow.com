import type { EWData } from "@/Type.ts";
import UsageSteps from "@/UsageSteps.tsx";
import StoreLinks from "@/StoreLinks.tsx";

export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default (data: EWData) => (
  <main>
    <section className="example__page-title">
      <h1>
        <span>Essential Workwareの</span>
        <br />
        活用例
      </h1>
    </section>
    <UsageSteps usages={data.usages} features={data.features} />
    <StoreLinks />
  </main>
);

import type { PageData } from "lume/core.ts";
import StoreLinks from "@/StoreLinks.tsx";

export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <main>
    <section class="example__page-title">
      <h1>
        <span>Essential Workwareの</span>
        <br />
        活用例
      </h1>
    </section>
    <section class="step__wrapper step__01" id="step1">
      <div class="example-title">
        <div class="example-title__bg left"></div>
        <h3 class="num">
          <span class="num__inner">
            <span class="num__inner-step">step</span>
            <span class="num__inner-figure">01</span>
          </span>
          勤務開始〜終了
        </h3>
      </div>
      <h5 class="step-wrapper__text">
        打刻の操作で勤務を開始します。新たなワークも容易に作成し割り当て。勤務終了の打刻でタイムシートが作成されます。
      </h5>
      <div class="example__case">
        <div class="case__wrapper">
          <div class="case left">
            <p class="roll ex-worker">ワーカー</p>
            <div class="image-container">
              <img src="/images/ex_step01-1.png" alt="step1-1" />
            </div>
            <p class="action">勤務開始の打刻を行う</p>
          </div>
          <div class="case right">
            <p class="roll ex-staff">スタッフ</p>
            <div class="image-container">
              <img src="/images/ex_step01-2.png" alt="step1-2" />
            </div>
            <p class="action">ワークを新規作成</p>
          </div>
        </div>
        <div class="case__wrapper">
          <div class="case left">
            <p class="roll ex-worker">ワーカー</p>
            <div class="image-container">
              <img src="/images/ex_step01-3.png" alt="step1-3" />
            </div>
            <p class="action">オープンワークを引き受け業務指示を読む</p>
          </div>
          <div class="case right">
            <p class="roll ex-worker">ワーカー</p>
            <div class="image-container">
              <img src="/images/ex_step01-4.png" alt="step1-4" />
            </div>
            <p class="action">勤務終了の打刻を行う</p>
          </div>
        </div>
      </div>
      <div class="example__link">
        <h6>このステップで活用できる主な機能</h6>
        <p class="case__relation-link">
          <a href="/features/#features_01">打刻管理</a>
        </p>
        <p class="case__relation-link">
          <a href="/features/#feature1">業務指示</a>
        </p>
        <p class="case__relation-link">
          <a href="/features/#feature3">ワークトラッキング</a>
        </p>
        <p class="case__relation-link">
          <a href="/features/#feature7">属性の可視化</a>
        </p>
        <p class="case__relation-link">
          <a href="/features/#feature8">リソース可視化</a>
        </p>
      </div>
    </section>
    <section class="step__wrapper step__02" id="step2">
      <div class="example-title">
        <div class="example-title__bg right"></div>
        <h3 class="num">
          <span class="num__inner">
            <span class="num__inner-step">step</span>
            <span class="num__inner-figure">02</span>
          </span>
          締め作業
        </h3>
      </div>
      <h5 class="step-wrapper__text">
        タイムシートと日報を自動生成。確認された証憑は人事会計システムに同期されます。
      </h5>
      <div class="example__case">
        <div class="case left">
          <p class="roll ex-staff">スタッフ</p>
          <div class="image-container">
            <img src="/images/ex_step02-1.png" alt="step2-1" />
          </div>
          <p class="action">勤務開始の打刻を行う</p>
        </div>
        <div class="case right">
          <p class="roll ex-worker">ワーカー</p>
          <div class="image-container">
            <img src="/images/ex_step02-2.png" alt="step2-2" />
          </div>
          <p class="action">タイムシートを確認し、必要があれば修正</p>
        </div>
      </div>
      <div class="example__link">
        <h6>このステップで活用できる主な機能</h6>
        <p class="case__relation-link">
          <a href="/features/#feature1">打刻管理</a>
        </p>
        <p class="case__relation-link">
          <a href="/features/#feature3">ワークトラッキング</a>
        </p>
        <p class="case__relation-link">
          <a href="/features/#feature13">日報・伝票の自動化</a>
        </p>
        <p class="case__relation-link">
          <a href="/features/#feature14">BIツール連携</a>
        </p>
      </div>
    </section>
    <section class="step__wrapper step__03" id="step3">
      <div class="example-title">
        <div class="example-title__bg left"></div>
        <h3 class="num">
          <span class="num__inner">
            <span class="num__inner-step">step</span>
            <span class="num__inner-figure">03</span>
          </span>
          組織の改善
        </h3>
      </div>
      <h5 class="step-wrapper__text">
        チームビルディングと業務標準化を行います
      </h5>
      <div class="example__case">
        <div class="case__wrapper">
          <div class="case left">
            <p class="roll ex-staff">スタッフ</p>
            <div class="image-container">
              <img src="/images/ex_step03-1.png" alt="step3-1" />
            </div>
            <p class="action">人材育成のためにラダーを設計する</p>
          </div>
          <div class="case right">
            <p class="roll ex-staff">スタッフ</p>
            <div class="image-container">
              <img src="/images/ex_step03-2.png" alt="step3-2" />
            </div>
            <p class="action">評価やサンクスカードを送る</p>
          </div>
        </div>
        <div class="case__wrapper">
          <div class="case left">
            <p class="roll ex-staff">スタッフ</p>
            <div class="image-container">
              <img src="/images/ex_step03.png" alt="step 3" />
            </div>
            <p class="action">テンプレートを整備する</p>
          </div>
        </div>
      </div>
      <div class="example__link">
        <h6>このステップで活用できる主な機能</h6>
        <p class="case__relation-link">
          <a href="/features/#feature9">キャリア指標</a>
        </p>
        <p class="case__relation-link">
          <a href="/features/#feature10">ワークのテンプレート化</a>
        </p>
        <p class="case__relation-link">
          <a href="/features/#feature11">サンクスカード</a>
        </p>
      </div>
    </section>
    <StoreLinks />
  </main>
);

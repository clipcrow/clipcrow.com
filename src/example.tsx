import EWwareCategoryLink from "@/EWwareCategoryLink.tsx";

export const beforeTitle = "Essential Workwareの";
export const title = "活用例";
export const css = "example";
export const layout = "layouts/single.tsx";

export default () => (
  <>
    <div id="step1">
      <div class="stepheder left">
        <h2 class="num">
          <span class="num__inner">
            <span class="step">step</span>
            <span class="figure">01</span>
          </span>
          <span class="title">勤務開始〜終了</span>
        </h2>
      </div>

      <p>
        打刻の操作で勤務を開始します。新たなワークも容易に作成し割り当て。勤務終了の打刻でタイムシートが作成されます。
      </p>

      <div class="ex-case">
        <div class="case right">
          <p class="roll">ワーカー</p>
          <div class="image ex_step01-1">
            <img src="/images/ex_step01-1.png" alt="" />
          </div>
          <p class="action">勤務開始の打刻を行う</p>
        </div>
        <div class="case left">
          <p class="roll">スタッフ</p>
          <div class="image ex_step01-2">
            <img src="/images/ex_step01-2.png" alt="" />
          </div>
          <p class="action">ワークを新規作成</p>
        </div>
        <div class="case right">
          <p class="roll">ワーカー</p>
          <div class="image ex_step01-3">
            <img src="/images/ex_step01-3.png" alt="" />
          </div>
          <p class="action">オープンワークを引き受け業務指示を読む</p>
        </div>
        <div class="case left">
          <p class="roll">ワーカー</p>
          <div class="image ex_step01-4">
            <img src="/images/ex_step01-4.png" alt="" />
          </div>
          <p class="action">勤務終了の打刻を行う</p>
        </div>
      </div>

      <div class="relation-link">
        <h3>このステップで活用できる主な機能</h3>
        <EWwareCategoryLink link="/function/#case1-01">
          打刻管理
        </EWwareCategoryLink>
        <EWwareCategoryLink link="/function/#case1-02">
          業務指示
        </EWwareCategoryLink>
        <EWwareCategoryLink link="/function/#case1-03">
          ワークトラッキング
        </EWwareCategoryLink>
        <EWwareCategoryLink link="/function/#case2-01">
          属性の可視化
        </EWwareCategoryLink>
        <EWwareCategoryLink link="/function/#case2-02">
          リソース可視化
        </EWwareCategoryLink>
      </div>
    </div>

    <div id="step2">
      <div class="stepheder right">
        <h2 class="num">
          <span class="num__inner">
            <span class="step">step</span>
            <span class="figure">02</span>
          </span>
          <span class="title">締め作業</span>
        </h2>
      </div>

      <p>
        タイムシートと日報を自動生成。確認された証憑は人事会計システムに同期されます。
      </p>

      <div class="ex-case">
        <div class="case left">
          <p class="roll">スタッフ</p>
          <div class="image ex_step02-1">
            <img src="/images/ex_step02-1.png" alt="" />
          </div>
          <p class="action">ワーカーの勤務時間を確認</p>
        </div>
        <div class="case right">
          <p class="roll">ワーカー</p>
          <div class="image ex_step02-2">
            <img src="/images/ex_step02-2.png" alt="" />
          </div>
          <p class="action">
            タイムシートを確認し、<br />必要があれば修正
          </p>
        </div>
      </div>

      <div class="relation-link">
        <h3>このステップで活用できる主な機能</h3>
        <EWwareCategoryLink link="/function/#burden">
          打刻管理
        </EWwareCategoryLink>
        <EWwareCategoryLink link="/function/#case1-03">
          ワークトラッキング
        </EWwareCategoryLink>
        <EWwareCategoryLink link="/function/#case4-01">
          日報・伝票の自動化
        </EWwareCategoryLink>
        <EWwareCategoryLink link="/function/#case4-02">
          BIツール連携
        </EWwareCategoryLink>
      </div>
    </div>

    <div id="step3">
      <div class="stepheder left">
        <h2 class="num">
          <span class="num__inner">
            <span class="step">step</span>
            <span class="figure">03</span>
          </span>
          <span class="title">組織の改善</span>
        </h2>
      </div>

      <p>チームビルディングと業務標準化を行います</p>

      <div class="ex-case">
        <div class="case right">
          <p class="roll">スタッフ</p>
          <div class="image ex_step03-1">
            <img src="/images/ex_step03-1.png" alt="" />
          </div>
          <p class="action">人材育成のためにラダーを設計する</p>
        </div>
        <div class="case left">
          <p class="roll">スタッフ</p>
          <div class="image ex_step03-2">
            <img src="/images/ex_step03-2.png" alt="" />
          </div>
          <p class="action">評価やサンクスカードを送る</p>
        </div>
        <div class="case right">
          <p class="roll">スタッフ</p>
          <div class="image ex_step03-3">
            <img src="/images/ex_step03-3.png" alt="" />
          </div>
          <p class="action">テンプレートを整備する</p>
        </div>
      </div>

      <div class="relation-link">
        <h3>このステップで活用できる主な機能</h3>
        <EWwareCategoryLink link="/function/#case2-03">
          キャリア指標
        </EWwareCategoryLink>
        <EWwareCategoryLink link="/function/#case3-01">
          ワークのテンプレート化
        </EWwareCategoryLink>
        <EWwareCategoryLink link="/function/#case3-02">
          サンクスカード
        </EWwareCategoryLink>
      </div>
    </div>
  </>
);

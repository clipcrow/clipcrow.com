import type { PageData, PageHelpers } from "lume/core.ts";
import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";
import EWwareBlogLatestArticles from "@/EWwareBlogLatestArticles.tsx";

export const title = "Essential Workware";
export const layout = "layouts/base.tsx";

export default (data: PageData, filters: PageHelpers) => (
  <>
    <section class="kv">
      <div class="innerblock">
        <p class="copy">
          <span class="catchcopy">
            We first make our habits, and then our habits make us.
          </span>
          <span class="person">- John Dryden</span>
          <span class="readcopy">
            「はじめは人が習慣を作り、そして習慣が人を造る。」業務の標準化へ日常的に注力し続けていれば、就業環境の改善とともに、関わる皆のキャリアも拓けます。
          </span>
        </p>
        <div class="main-visual">
          <img srcset="/images/kv.png" alt="" />
        </div>
        <p class="btn round yellow">
          <a class="elevation-2" href="/contact/">お問い合わせフォーム</a>
        </p>
      </div>
    </section>
    <section class="maincont msg">
      <p class="read">
        労働人口が減少している日本ならびに先進各国では、現在もこれからも労働力の確保が難しく、特に生活必需サービス産業では労働力不足が顕著となっています。
        事業者個別に可能な対策として求人に注力する一方、IT導入による自動化と業務の標準化で、組織の生産性を向上させることが求められます。
      </p>
      <p class="read">
        「Essential
        Workware」は、スマートフォンにインストールする以外の事前準備なしですぐにワーク管理と人材管理の機能を提供し、
        業務の自動化を実現するグループウェアです。また、日々使ううちに自然と業務の標準化が実現するようになっています。
      </p>
    </section>
    <section class="maincont pain">
      <h1 class="left">
        こんな問題を<br />抱えていませんか
      </h1>
      <div class="innerblock">
        <div class="pain__item u-pos-r">
          <div class="image illust-01">
            <img
              srcset="/images/illust-01.png 1000w,/images/illust-01b.png"
              alt=""
            />
          </div>
          <div class="card round yellow-o">
            <p>
              顧客に対面する業務が多く、業務の実行内容が売上や費用の計算に直結している。繰り返し発生する業務はそれぞれが定型で短時間に完了するが、
              とにかく種類が多いため、業務見直しやDXにはなかなか手が付かない。
            </p>
            <a class="btn elevation-2" href="/example/#step1">
              ワーク管理を行い、<br />標準化を実現するには…
            </a>
          </div>
        </div>
        <div class="pain__item u-pos-l">
          <div class="image illust-02">
            <img src="/images/illust-02.png" alt="" />
          </div>
          <div class="card round yellow-o">
            <p>
              正規雇用者だけでは足りずにパート・アルバイトや未経験者も集めていることと、
              資格や専門的な技術を必要とする業務も多いことから、組織の人材を活かすにはどうすればよいのか悩む。
              離職率が高く、特にリーダー的ポジションは常に人材難。
            </p>
            <a class="btn elevation-2" href="/example/#step3">
              人材管理を行い、<br />組織を活性化するには...
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="maincont feat">
      <div class="section__head">
        <h1 class="left">Essential Workwareの特長</h1>
      </div>
      <div class="innerblock">
        <div class="feat__item">
          <div class="card round gray-pale">
            <h2>業務負担を軽減できる</h2>
            <div class="card-inner">
              <div class=" image">
                <img src="/images/illust-03.png" alt="" />
              </div>
              <p>
                事前の準備なしですぐに利用開始。スタッフの負担を減らし、ワーカーの手持ちをなくします。
              </p>
            </div>
          </div>
        </div>
        <div class="feat__item">
          <div class="card round gray-pale">
            <h2>デジタルツインを実現する</h2>
            <div class="card-inner">
              <div class="image">
                <img src="/images/illust-04.png" alt="" />
              </div>
              <p>
                スタッフとワーカーの属性やリソース状況を常に最新の状態で把握できます。
              </p>
            </div>
          </div>
        </div>
        <div class="feat__item">
          <div class="card round gray-pale">
            <h2>標準化サイクルが発生する</h2>
            <div class="card-inner">
              <div class="image">
                <img src="/images/illust-05.png" alt="" />
              </div>
              <p>
                業務を容易にペーパーレス化。使っているうち自然に業務が標準化されます。
              </p>
            </div>
          </div>
        </div>
        <div class="feat__item">
          <div class="card round gray-pale">
            <h2>既存のしくみと連携できる</h2>
            <div class="card-inner">
              <div class="image">
                <img src="/images/illust-06.png" alt="" />
              </div>
              <p>
                APIで高度なソリューション開発も可能。既存システムとの連携で、組織のDXを素早く実現します。
              </p>
            </div>
          </div>
        </div>
        <p class="btn round yellow">
          <a class="elevation-2" href="/function/">
            特長・機能の一覧
          </a>
        </p>
      </div>
    </section>
    <section class="maincont info">
      <h1>ブログ</h1>
      <EWwareBlogLatestArticles search={data.search} dateFormat={filters.dateFormat} />
    </section>
  </>
);

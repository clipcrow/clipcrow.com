import type { PageData } from "lume/core.ts";
import BlogLatestCards from "@/BlogLatestCards.tsx";
import FeatureIndex from "@/FeatureIndex.tsx";
import StoreLinks from "@/StoreLinks.tsx";

export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <main>
    <section class="top__kv">
      <div class="hero">
        <div class="hero__content">
          <div class="hero__content-title">
            心が動く<br />行動が変わる
          </div>
          <p class="hero__content-text">
            労働人口が減少している日本ならびに先進各国では、
            現在もこれからも労働力の確保が難しく、
            特に生活必需産業では労働力不足が顕著となっています。
            個別事業者に可能な対策としては、 求人に注力する一方で、
            IT導入によって組織の生産性を向上させることが考えられます。
            <span>
              「EssenntialWorkware」は、Out of the Boxですぐにタスク管理と
              シフト管理の機能を提供するスマートフォン上のグループウェアです。
            </span>
            また、日々使ううちに自然と業務の標準化が実現して、組織が活性化するようになります。
          </p>
        </div>
        <div class="hero__image">
          <img src="/images/kv.png" alt="hero cover" />
        </div>
      </div>
    </section>
    <StoreLinks />
    <section class="maincont">
      <h1>こんな問題を抱えていませんか</h1>
      <div class="maincont__card">
        <div class="card">
          <div class="card__image">
            <img src="/images/home-01.png" />
          </div>
          <p>
            顧客に対面する業務が多く、業務の実行内容が売上や費用の計算に直結している。
            繰り返し発生する業務はそれぞれが定型で短時間に完了するが、とにかく種類が多いため、
            <span class="text-blue">
              業務見直しやDXにはなかなか手が付かない。
            </span>
            既に何らかのITシステムを導入していても、うまく使いこなせていない。
          </p>
          <a class="btn__blue" href="/usage-example/#step1">
            <p class="card__pc-text">
              タスク管理〜業務管理を行い、<br />標準化を実現するには…
            </p>
            <p class="card__sp-text">
              タスク管理〜業務管理を行い、標準化を実現するには…
            </p>
          </a>
        </div>
        <div class="card">
          <div class="card__image">
            <img src="/images/home-02.png" />
          </div>
          <p>
            正規雇用者だけでは足りずに社外のパートナーや、パート・アルバイト、未経験者も集めていることと、
            資格や専門的な技術を必要とする業務も多いことから、
            <span class="text-pink">
              組織の人材を活かすにはどうすればよいのか悩む。
            </span>
            離職率が高く、特にリーダー的ポジションは常に人材難。
          </p>
          <a class="btn__pink" href="/usage-example/#step3">
            <p class="card__pc-text">
              シフト管理〜人材管理を行い、<br />組織を活性化するには...
            </p>
            <p class="card__sp-text">
              シフト管理〜人材管理を行い、組織を活性化するには...
            </p>
          </a>
        </div>
      </div>
    </section>
    <section class="features">
      <h1>Essential Workwareの特長・機能</h1>
      <FeatureIndex features={data.features} />
      <a class="btn__yellow-dark" href="/features/">特長・機能の詳細</a>
    </section>
    {
      /*
    <section class="point">
      <h1>Essential Workwareのポイント</h1>
      <div class="point__top-grid">
        <div class="point__text">
          <h4>連絡・引き継ぎ</h4>
          <p>
            基本的な勤怠管理機能として、執務時間を正確に記録しトラッキング可能に。組織全体の労務状態をリアルタイム把握します。
          </p>
        </div>
        <img src="/images/point1.png" alt="point 1" />
      </div>
      <div class="point__bottom-grid">
        <img src="/images/point2.png" alt="point 2" />

        <div class="point__text text-justify">
          <h4>打刻管理</h4>
          <p>
            正規・非正規雇用の別に関係なく、連絡や引き継ぎなど、情報共有が行えます。柔軟なタグシステムの活用で情報の可視範囲をきめ細かく設定できます。
          </p>
        </div>
      </div>
    </section>
    */
    }
    <section class="blog">
      <h1>ブログ</h1>
      <BlogLatestCards search={data.search} />
      <a class="btn__yellow-light" href="/blog/">ブログ記事の一覧</a>
    </section>
    <section class="info">
      <div class="info__text">
        <img src="/images/ClipCrow_logo.png" alt="clip-crow logo" />
        <p>
          SaaS製品事業の創造と開発案件プロデュースで、
          システムを磨き、健康で楽しく豊かな組織と個人を実現します。
        </p>
        <a class="btn__yellow-light" href="/company/">会社情報</a>
      </div>
    </section>
  </main>
);

import type { PageData } from "lume/core.ts";
import BlogLatestCards from "@/BlogLatestCards.tsx";
import FeatureIndex from "@/FeatureIndex.tsx";
import StoreLinks from "@/StoreLinks.tsx";

export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <main>
    <section className="top__kv">
      <div className="hero">
        <div className="hero__content">
          <div className="hero__content-title">
            心が動く<br />行動が変わる
          </div>
          <p className="hero__content-text">
            労働人口が減少している日本ならびに先進各国では、
            現在もこれからも労働力の確保が難しく、
            特に生活必需産業では労働力不足が顕著となっています。
            個別事業者に可能な対策としては、
            求人に注力する一方で、IT導入による自動化と地道な業務の標準化で、
            組織の生産性を向上させることが考えられます。<br />
            <span>
              「EssenntialWorkware」は、Out of the Boxですぐにワーク管理と
              人材管理の機能を提供して、業務の自動化を行うグループウェアです。
            </span>
            また、日々使ううちに自然と業務の標準化が実現するようになっています。
          </p>
        </div>
        <div className="hero__image">
          <img src="/images/kv.png" alt="hero cover" />
        </div>
      </div>
    </section>
    <StoreLinks />
    <section className="maincont">
      <h1>こんな問題を抱えていませんか</h1>
      <div className="maincont__card">
        <div className="card">
          <p className="card__pc-text">
            顧客に対面する業務が多く、業務の実行内容が売上や費用の計算に直結している。
            繰り返し発生する業務はそれぞれが定型で短時間に完了するが、とにかく種類が多いため、
            <span className="text-blue">
              業務見直しやDXにはなかなか手が付かない。
            </span>
          </p>
          <p className="card__sp-text">
            顧客に対面する業務が多く、業務の実行内容が売ざ時間に完了するが、とにかく種類が多いため、
            <span className="text-blue">
              業務見直しやDXにはなかなか手が付かない。
            </span>
          </p>
          <div className="card__image">
            <img src="/images/ex_step03-1.png" alt="step3-1" />
          </div>
          <a className="btn__blue" href="/usage-example/#step1">
            ワーク管理を行い、<br />標準化を実現するには…
          </a>
        </div>
        <div className="card">
          <p>
            正規雇用者だけでは足りずにパート・アルバイトや未経験者も集めていることと、
            <span className="text-pink">
              資格や専門的な技術を必要とする業務も多いことから、組織の人材を活かすにはどうすればよいのか悩む。
            </span>
            離職率が高く、特にリーダー的ポジションは常に人材難。
          </p>
          <div className="card__image">
            <img src="/images/ex_step03-2.png" alt="step3-2" />
          </div>
          <a className="btn__pink" href="/usage-example/#step3">
            人材管理を行い、<br />組織を活性化するには...
          </a>
        </div>
      </div>
    </section>
    <section className="features">
      <h1>Essential Workwareの特長・機能</h1>
      <FeatureIndex features={data.features} />
      <a className="btn__yellow-dark" href="/features">特長・機能の詳細</a>
    </section>
    <section className="point">
      <h1>Essential Workwareのポイント</h1>
      <div className="point__top-grid">
        <div className="point__text">
          <h4>連絡・引き継ぎ</h4>
          <p>
            基本的な勤怠管理機能として、執務時間を正確に記録しトラッキング可能に。組織全体の労務状態をリアルタイム把握します。
          </p>
        </div>
        <img src="/images/point1.png" alt="point 1" />
      </div>
      <div className="point__bottom-grid">
        <img src="/images/point2.png" alt="point 2" />

        <div className="point__text text-justify">
          <h4>打刻管理</h4>
          <p>
            正規・非正規雇用の別に関係なく、連絡や引き継ぎなど、情報共有が行えます。柔軟なタグシステムの活用で情報の可視範囲をきめ細かく設定できます。
          </p>
        </div>
      </div>
    </section>
    <section className="blog">
      <h1>ブログ</h1>
      <BlogLatestCards search={data.search} />
      <a className="btn__yellow-light" href="/blog">ブログ記事の一覧</a>
    </section>
    <section className="info">
      <div className="info__text">
        <img src="/images/ClipCrow_logo.png" alt="clip-crow logo" />
        <p>
          クリップクロウ合同会社は、代表する栗原が20年以上にわたるエンタープライズ向けIT事業会社経営において得た、
          大規模なクラウドネイティブアプリケーション開発プロジェクト指揮の経験と、
          クラウドグループウェア製品の開発・販売・導入ビジネスの経験により、
          医療や健康管理分野のシステム開発案件プロデュースと、
          生活必需サービス産業の従業者間コミュニケーションを円滑にするグループウェア製品を提案することで、
          データに基づく医療最適化と個人健康管理の実現を推進します。
        </p>
        <a className="btn__yellow-light" href="/profile">会社情報</a>
      </div>
    </section>
  </main>
);

export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default () => (
  <main>
    <section class="profile__page-title">
      <h1>会社概要</h1>
    </section>
    <section class="profile__kv">
      <div class="profile__kv-content">
        <img src="/images/ClipCrow_logo.png" alt="clipcrow logo" />
        <p>
          皆が健康で・楽しく・豊かな人生をおくるために、医療の高度化とその利便性向上はいつの時代であっても社会的最重要テーマであり続けてきました。
          近年では医療進化の一部として、病気や怪我への処方や製薬の努力に加えて、医療情報システムへの投資が議論されるようになってきています。
          海外発のニュースでは、AIによる診断の最適化やウェアラブルデバイスでの日常的な健康管理など、医療や健康増進分野へのIT導入について様々報じられています。
        </p>
        <p>
          しかし日本の医療機関の多くでは、クラウドやモバイルやIoTやAIなど他の産業で普及しつつある新しいテクノロジーが紹介されていないために、
          既に旧式化しているアーキテクチャで運用されていたり、そもそもにITが導入されてないケースもあるようです。
          そのためにデータの利活用が進まず、医療従事者と患者双方でユーザー体験が最適化されているとは言い難い状態です。
        </p>
        <p>
          クリップクロウ合同会社は、代表する栗原が20年以上にわたるエンタープライズ向けIT事業会社経営において得た、
          クラウドグループウェア製品の開発・販売・導入ビジネスの経験と、
          大規模なクラウドネイティブアプリケーション開発プロジェクト指揮の経験より、
          医療従事者間および医療従事者と患者との間のコミュニケーションを円滑にする
          グループウェアの適用を提案し、
          同時にクラウドでの医療情報システム開発案件をプロデュースすることで、
          データに基づく医療最適化と個人健康管理の実現を推進しています。
        </p>
        <p>
          そして、今、医療と健康管理の領域で得られた成功体験を汎化して、「Essemtial
          Work」つまり生活必需産業全般、
          さらには自らも属するIT産業まで広くソリューションをお届けいたします。
        </p>
      </div>
    </section>
    <section class="business">
      <h2>SaaS製品事業の創造と、開発案件プロデュース</h2>
      <div class="business__diagram">
        <div class="top-box">
          <div class="box__inside">
            <div class="box__text">
              <div class="box__title">SaaS製品事業の創造</div>
              <p>Essential Workwareの開発・販売を行う</p>
            </div>
            <img
              src="/images/business-diagram-illust01.png"
              alt="business diagram illust1"
            />
          </div>
        </div>
        <div class="center-box">
          <div class="center-box__title">
            システムを磨き、健康で楽しく豊かに
          </div>
        </div>
        <div class="bottom-box">
          <div class="box__inside">
            <img
              src="/images/business-diagram-illust02.png"
              alt="business diagram illust2"
            />
            <div class="box__text">
              <div class="box__title">開発案件プロデュース</div>
              <p>技術部門組織と指導、企画〜設計、PM業務</p>
            </div>
          </div>
        </div>
      </div>
      <div class="teams">
        <div class="teams__box">
          <p class="teams__box-name">パートナーシップ</p>
          <div class="teams__box-inner">
            <img class="dev__img" src="/images/team-dev.svg" alt="dev team" />
            <ul>
              <li>React, Flutter</li>
              <li>GCP, AWS</li>
              <li>Golang, TypeScript, Dart</li>
              <li>Docker, Kubernetes, Terraform</li>
              <li>OAuth, SAML, IDM/IDP</li>
              <li>HL7 FHIR, DICOM, ORCA</li>
              <li>位置情報, 画像, DWH</li>
            </ul>
          </div>
          <p class="teams__box-note">
            オフショアで高度ソフトウェア開発を行います
          </p>
        </div>
        <div class="teams__box">
          <p class="teams__box-name">ClipCrow</p>
          <div class="teams__box-inner">
            <img class="cc__img" src="/images/team-cc.svg" alt="cc team" />
            <ul>
              <li>案件コンソーシアム運営</li>
              <li>顧客ヒアリング, フィット&ギャップ</li>
              <li>RFP作成支援, 契約クロージング</li>
              <li>開発組織の組成, メンターシップ</li>
              <li>事業企画, 製品企画, アーキテクチャ</li>
              <li>スクラムマスター</li>
              <li>カスタマーサクセス</li>
            </ul>
          </div>
          <p class="teams__box-note">
            ゼロから開発プロジェクトを立ち上げられます
          </p>
        </div>
      </div>
    </section>
    <section class="enclose">
      <dl>
        <dt>社名</dt>
        <dd>クリップクロウ合同会社</dd>
        <dt>設立</dt>
        <dd>2020年7月1日</dd>
        <dt>代表社員</dt>
        <dd class="enclose__button">
          栗原傑享/くりはらまさたか
          <span class="button">
            <a href="/leadership">詳細</a>
          </span>
        </dd>
        <dt>住所</dt>
        <dd>〒158-0083 東京都世田谷区奥沢1-37-2</dd>
        <dt>定款記載の目的</dt>
        <dd>
          <ul>
            <li>
              コンピューターソフトウェア及びハードウェアの企画、研究、開発、設計、製造、
              販売、保守、リース、賃貸、輸出入並びにこれらに関するコンサルティング業務
            </li>
            <li>
              情報の収集、分析、管理及び処理サービス業、情報提供サービス業並びに情報処理に関する研究開発
            </li>
            <li>前各号に附帯関連する一切の事業</li>
          </ul>
        </dd>
      </dl>
    </section>
  </main>
);

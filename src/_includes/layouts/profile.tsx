import type { PageData } from "lume/core.ts";

export const layout = "layouts/base.tsx";

export default (data: PageData) => (
  <main>
    <section class="profile__page-title">
      <h1>会社概要</h1>
    </section>
    <section class="profile__kv">
      <div class="profile__kv-content">
        <img src="/images/ClipCrow_logo.png" alt="clipcrow logo" />
        {data.children}
      </div>
    </section>
    <section class="business">
      <h2>製品事業の創造と、開発案件プロデュース</h2>
      <div class="business__diagram">
        <div class="top-box">
          <div class="box__inside">
            <div class="box__text">
              <div class="box__title">製品事業の創造</div>
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
            データに基づく医療最適化と個人健康管理の実現を推進する
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
          <p class="teams__box-name">開発陣</p>
          <div class="teams__box-inner">
            <img class="dev__img" src="/images/team-dev.svg" alt="dev team" />
            <ul>
              <li>React, Unity, Flutter</li>
              <li>GCP, AWS</li>
              <li>Golang, TypeScript, Dart</li>
              <li>Docker, Kubernetes, Terraform</li>
              <li>OAuth, SAML, IDM/IDP</li>
              <li>HL7 FHIR, DICOM, ORCA</li>
              <li>位置情報, 画像, DWH</li>
            </ul>
          </div>
          <p class="teams__box-note">
            20年以上のパートナーシップ、国内外で連携する開発組織
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

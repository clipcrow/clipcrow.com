import type { PageData, PageHelpers } from "lume/core.ts";

export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default (data: PageData, filters: PageHelpers) => (
  <main>
    <section class="history__page-title">
      <h1>
        <span>クリップクロウ合同会社</span>
        <br />
        代表社員 栗原傑享
      </h1>
    </section>
    <section class="history__main-cont">
      <div class="history__kv">
        <img class="history__kv-image" src="" alt="" />
        <p class="history__kv-text">
          妻と娘2人、愛犬のゴールデンレトリバーとで東京都世田谷区に在住。<br />
          趣味はアクアリウム、プラモデル。最近ちょっと良いクロスバイクを購入し、毎日乗るのが楽しい。
        </p>
      </div>
      <div class="career">
        <h4 class="career__title">経歴</h4>
        <div class="career__section">
          <div class="career__content">
            <h6 class="career__content-year">1972/07</h6>
            <p>
              母親の実家がある北海道札幌市で生まれる。父親の転勤によって三重県四日市市、千葉県市原市、埼玉県浦和市(当時)に住み、
              小学校から千葉県市川市で育つ。私立麻布中学校・高等学校に進学して、サッカー部に所属する。
            </p>
          </div>
          <div class="career__content">
            <h6 class="career__content-year">1995/07</h6>
            <p>
              早稲田大学商学部在学時に、「資格の学校TAC」の講師として知った吉木公認会計士が経営するビジネストラストにて、
              アルバイトで連結会計パッケージの開発に従事する。初期は栗原一人だけがプログラマーであったが徐々に人数を増やす。その後「連結大王」と名付けられたそのソフトをきっかけにビジネストラストは躍進し、大証ヘラクレスへ上場した。
            </p>
          </div>
          <div class="career__content">
            <h6 class="career__content-year">1996/12</h6>
            <p>
              ニフティサーブに「Delphi Users’
              Forum」を開設して初代シスオペを務める。インターネット普及の前、
              パソコン通信でのソフトウェア開発技術コミュニティとして盛況となり、最盛期には4万人の熱心な利用者がいた。
            </p>
          </div>
          <div class="career__content">
            <h6 class="career__content-year">1999/07</h6>
            <p>
              株式会社グルージェントを創業してシステム受託開発を行う。
              設立と同時に初受注した案件は、TACの株式上場プロジェクトの一環として、
              物品と学習コースの販売に両対応した売上管理システムおよび専用POSを整備するものだった。
              翌年にはインターネット証券会社の創業システム開発に主力として参画する。
              次第に企業として成熟し、金融や自治体を中心にエンタープライズ業務システム多数に関わる。
            </p>
          </div>
          <div class="career__content">
            <h6 class="career__content-year">2004/07</h6>
            <p>
              顧客事情に大きく左右されて経営環境が安定しないシステム受託開発のビジネスモデルに限界を感じ、
              SQLデータベースのOLEDBドライバ製品・携帯GPSハードウェア製品・PDA搭載パッケージアプリの開発販売といった、
              技術的にも経営的にも蛮勇なエピソードを重ねつつ、
              ’04に財務の安定を求めてグルージェントをビジネストラストに買収してもらい、傘下へ。
            </p>
          </div>
          <div class="career__content">
            <h6 class="career__content-year">2005/06</h6>
            <p>
              上場企業傘下にて財務が安定することでできた時間的余裕の中、個人として技術力を磨き発信することに注力してみたく、
              情報処理推進機構2005年度上期未踏ソフトウェア創造事業に応募し、「JavaServer
              Templates “Mayaa"の開発と世界発信」が採択されて実施した。
              追加加工がないピュアなHTMLを動的なWEBアプリケーションにするJavaフレームワークをOSSとしてリリースする。
            </p>
          </div>
          <div class="career__content">
            <h6 class="career__content-year">2005/12</h6>
            <p>
              OSSコミュニティを運営する組織としてNPO法人Seasarファウンデーションを設立し代表理事を務める。
              Seasarファウンデーションの活動は当時のシステムのオープン化やWEB化ブーム・OSSブーム・Javaブームの中で大きな評価を得た。
            </p>
          </div>
          <div class="career__content">
            <h6 class="career__content-year">2008/02</h6>
            <p>
              サイオステクノロジーから自社製品をOSS化したいという相談を受けて交流を深めた後、
              それまで構築仕切れなかった事業上のシナジーが得られることへの期待よりお願いして、
              ビジネストラストが保有するグルージェント株式全部をサイオステクノロジーに譲渡してもらう。
              後年にはサイオステクノロジーで立ち上げ途上だったクラウド関連事業を、グループ戦略としてグルージェントに集約したことで、
              グルージェントは受託開発のみのビジネスモデルからSaaSグループウェアの再販とその周辺自社サービスの開発販売によるサブスクリプション中心のビジネスモデルへとコア変更に成功した。
            </p>
          </div>
          <div class="career__content">
            <h6 class="career__content-year">2014/07</h6>
            <p>
              渡米してSIOS Technology Corp.（San
              Mateo、California）に駐在し、米国子会社Glabio
              Inc.を設立してCEOに就任し、
              その後、中食/外食大手プレナスとの合弁でBayPOS
              Inc.を設立しCTO兼CFOとして経営に関与した。
              BayPOSは外食レストランの店舗で利用されるタブレットオーダーシステムとPOSシステムを開発して、世界中の店舗に展開している。
            </p>
          </div>
          <div class="career__content">
            <h6 class="career__content-year">2018/07</h6>
            <p>
              ４年間の米国生活を終えて帰国してからは、サイオステクノロジー常務執行役員として自社製品の開発エンジニアリングを担当し、
              さらに'20/1よりは精神病院向け電子カルテサービス開発受託案件を特命担当した。プロジェクトを立ち上げ、開発にはアーキテクチャとUIデザインおよびスクラムマスターとして従事した。
            </p>
          </div>
          <div class="career__content">
            <h6 class="career__content-year">2020/07</h6>
            <p>
              グルージェント創業以来、21年間で立場を変えながらも連続していた歴史に区切りをつけ、サイオステクノロジーを退社し、
              クリップクロウ合同会社を設立した。独立後は電子カルテ開発案件、治験システム開発案件、ITスタートアップの技術組織組成プロジェクトに関わる。
            </p>
          </div>
          <div class="career__content">
            <h6 class="career__content-year">2022/04</h6>
            <p>
              生活必需サービス産業のDXを課題として、グループウェア製品「Essential
              Workware」を開発開始。GolangとFlutterによる。
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

import AnimatedCloud from "@/AnimatedCloud.tsx";

export const bodyClass = "bg_g";

export default () => (
  <main>
    <section id="topimage">
      <AnimatedCloud id={1} />
      <article className="topcontents">
        <div
          className="topcopy animated deley01"
          data-scroll="once toggle(.fadeIn, .invisible) 0,0"
        >
          <h2>
            システムを磨き、<br />健康で楽しく豊かに。
          </h2>
          <p>
            "Essential Workware"とSI案件プロデュースで<br />
            データに基づいた業務最適化を推進し、<br />
            心身ともに健康管理の組織的な実現と<br />
            関わる皆さまのQuality of Life向上を目指します。
          </p>
        </div>
        <div
          className="toppg animated deley03"
          data-scroll="once toggle(.fadeIn, .invisible) 0,0"
        >
          <img src="/assets/images/topimage.png" alt="" />
        </div>
      </article>
      <AnimatedCloud id={2} />
    </section>

    <section id="topstory">
      <div className="inner">
        <h2
          className="animated"
          data-scroll="once toggle(.fadeIn, .invisible) 0,0"
        >
          皆が健康で・楽しく・豊かな人生をおくるために、
        </h2>
        <p
          className="animated deley01"
          data-scroll="once toggle(.fadeIn, .invisible) 0,0"
        >
          医療・介護・保育・物流・外食・建設など生活必需サービス産業の高度化とその利便性向上は、いつの時代であっても社会的最重要テーマであり続けてきました。
          近年ではそれぞれ業界固有なサービス提供ノウハウの進化に加えて、情報システムへの投資が議論されるようになってきています。
        </p>
        <p
          className="animated deley02"
          data-scroll="once toggle(.fadeIn, .invisible) 0,0"
        >
          しかし日本の生活必需サービス産業の多くでは、クラウドやモバイルやIoTやAIなど他の産業で普及しつつある新しいテクノロジーが紹介されていないために、
          既に旧式化しているアーキテクチャで運用されていたり、そもそもにITが導入されてないケースもあるようです。データの利活用が進まず、
          業務従事者と顧客双方でユーザー体験が最適化されるのはこれからの取組み次第となっています。
        </p>
        <p
          className="animated deley03"
          data-scroll="once toggle(.fadeIn, .invisible) 0,0"
        >
          クリップクロウ合同会社は、日常業務のDXと組織内外のコミュニケーションを担うSaaS「Essential
          Workware」と、生活必需サービス産業向けSI案件プロデュースとの両輪で、
          データに基づく業務最適化と組織的な健康管理および、関わる皆さまそれぞれの自己実現をお手伝いします。
        </p>
      </div>
    </section>

    <section id="business_outline">
      <h2>
        <span>Business Outline</span>クリップクロウ事業概要
      </h2>
      <AnimatedCloud id={3} />
      <AnimatedCloud id={4} />
      <div
        className="page_mainimg animated deley02"
        data-scroll="once toggle(.fadeIn, .invisible) 0,0"
      >
        <img
          src="/assets/images/img_business_main_pc.png"
          alt="独自SaaS事業の創造 SI案件プロデュース"
          className="switch"
        />
        <div className="btn_detail_g">
          <a href="/product/">
            詳細を見る<span className="arrow-right"></span>
          </a>
        </div>
      </div>
      <article className="business_point">
        <div
          className="business_item animated"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          <h3>
            <a href="https://genkisystem.com/" target="_blank">Genki Systems</a>
          </h3>
          <p>オフショアで高度ソフトウェア開発を行います</p>
          <ul>
            <li>GCP、AWS</li>
            <li>Golang、Dart、TypeScript</li>
            <li>Flutter、React</li>
            <li>Terraform、Docker、Kubernetes</li>
            <li>OpenAPI、OAuth、SAML</li>
            <li>HL7 FHIR、課金管理、位置情報、DWH</li>
          </ul>
        </div>
        <div
          className="business_item animated deley02"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          <h3>ClipCrow</h3>
          <p>ゼロから開発プロジェクトを立ち上げられます</p>
          <ul>
            <li>案件コンソーシアム運営</li>
            <li>RFP作成支援、契約クロージング</li>
            <li>開発組織の組成、メンターシップ</li>
            <li>顧客ヒアリング、フィット＆ギャップ</li>
            <li>事業企画、製品企画、プロダクトマネージャー</li>
            <li>アーキテクチャ、PMO、スクラムマスター</li>
          </ul>
        </div>
      </article>
    </section>

    <section id="solution">
      <h2>
        <span>Solution</span>ご提案
      </h2>
      <p className="solution_lead">
        独自SaaS事業の創造、SI案件のプロデュースの両輪で、<br className="viewpc viewtb" />
        生活必需産業全般からその他産業まで幅広くソリューションをお届けしています。
      </p>
      <div
        className="page_mainimg animated deley02"
        data-scroll="once toggle(.fadeIn, .invisible) 0,0"
      >
        <img
          src="/assets/images/img_solution_main_pc.png"
          alt="独自SaaS事業の創造 SI案件プロデュース"
          className="switch"
        />
        <p className="img_cap">
          Essential
          Workwareが示す製品開発技術を、<br className="viewpc viewtb" />御社の課題解決のために役立てます。
        </p>
      </div>
      <article className="casestudy">
        <h2>
          <span>Case Study</span>事例概要
        </h2>
        <div className="casestudy_index">
          <article
            className="casestudy_item animated"
            data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
          >
            <div className="casestudy_img">
              <img
                src="/assets/images/casestudy/img01.jpg"
                alt="クラウド電子カルテ開発案件"
              />
            </div>
            <div className="casestudy_txt">
              <h4>
                クラウド電子カルテ<br />開発案件
              </h4>
              <p>
                2020年1月よりプロジェクトの中心として開発チームの組成やアーキテクチャから実行しました。開発するEHRは
                SaaSとして、Google Cloud 上で実装しています。
              </p>
              <div className="btn_detail_g">
                <a href="/case-study/#case01">
                  詳細を見る<span className="arrow-right"></span>
                </a>
              </div>
            </div>
          </article>
          <article
            className="casestudy_item animated deley02"
            data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
          >
            <div className="casestudy_img">
              <img
                src="/assets/images/casestudy/img02.jpg"
                alt="国立大学病院の治験プラットフォーム"
              />
            </div>
            <div className="casestudy_txt">
              <h4>
                国立大学病院の<br />治験プラットフォーム
              </h4>
              <p>
                治験届の電子化および各国治験届の相互翻訳自動化、RWDの構築と電子カルテ等の連携元からの治験データ収集などを実装しました。
              </p>
              <div className="btn_detail_g">
                <a href="/case-study/#case02">
                  詳細を見る<span className="arrow-right"></span>
                </a>
              </div>
            </div>
          </article>
          <article
            className="casestudy_item animated deley03"
            data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
          >
            <div className="casestudy_img">
              <img
                src="/assets/images/casestudy/img03.jpg"
                alt="開発組織のモダン化コンサルティング"
              />
            </div>
            <div className="casestudy_txt">
              <h4>
                開発組織のモダン化<br />コンサルティング
              </h4>
              <p>
                AIプラットフォーム製品の開発を行いAI活用SIを提供するスタートアップ企業へ、開発組織の様々な課題を解決するコンサルティングを提供しました。
              </p>
              <div className="btn_detail_g">
                <a href="/case-study/#case03">
                  詳細を見る<span className="arrow-right"></span>
                </a>
              </div>
            </div>
          </article>
          <article
            className="casestudy_item animated"
            data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
          >
            <div className="casestudy_img">
              <img
                src="/assets/images/casestudy/img04.jpg"
                alt="遠隔診療SaaS開発"
              />
            </div>
            <div className="casestudy_txt">
              <h4>遠隔診療SaaS開発</h4>
              <p>
                大手運輸会社グループ向けに遠隔診療システムをフルスクラッチ開発。ドライバー向けアプリ、薬局向けWEBアプリなどから構成されるシステムを運用しています。
              </p>
              <div className="btn_detail_g">
                <a href="/case-study/#case04">
                  詳細を見る<span className="arrow-right"></span>
                </a>
              </div>
            </div>
          </article>
          <article
            className="casestudy_item animated deley02"
            data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
          >
            <div className="casestudy_img">
              <img
                src="/assets/images/casestudy/img05.jpg"
                alt="福利厚生SaaS開発"
              />
            </div>
            <div className="casestudy_txt">
              <h4>福利厚生SaaS開発</h4>
              <p>
                健康経営を行う大企業向けに、従業員の日々の運動をポイント評価してそのポイントをギフトに引き換えられるようにする、福利厚生を目的としたSaaSを開発しました。
              </p>
              <div className="btn_detail_g">
                <a href="/case-study/#case05">
                  詳細を見る<span className="arrow-right"></span>
                </a>
              </div>
            </div>
          </article>
          <article
            className="casestudy_item animated deley03"
            data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
          >
            <div className="casestudy_img">
              <img
                src="/assets/images/casestudy/img06.jpg"
                alt="PHR製品の拡張と展開"
              />
            </div>
            <div className="casestudy_txt">
              <h4>PHR製品の拡張と展開</h4>
              <p>
                インテグリティ・ヘルスケアとSIパートナーシップを構築し、同社の技術フェロー(非常勤)に就任しました。PHR製品の拡張機能群を開発し、現在も引き続き実施中です。
              </p>
              <div className="btn_detail_g">
                <a href="/case-study/#case06">
                  詳細を見る<span className="arrow-right"></span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </article>
    </section>

    <section id="company_profile">
      <h2>
        <span>Company Profile</span>企業情報
      </h2>
      <dl>
        <dt
          className="animated deley02"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          社名
        </dt>
        <dd
          className="animated deley02"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          クリップクロウ合同会社
        </dd>
        <dt
          className="animated deley02"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          設立年月日
        </dt>
        <dd
          className="animated deley02"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          2020年7月1日
        </dd>
        <dt
          className="animated deley02"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          代表社員
        </dt>
        <dd
          className="animated deley02"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          栗原傑享/くりはらまさたか<div className="btn_detail">
            <a href="/leadership/">
              詳細<span className="arrow-right"></span>
            </a>
          </div>
        </dd>
        <dt
          className="animated deley02"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          住所
        </dt>
        <dd
          className="animated deley02"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          〒158-0083 東京都世田谷区奥沢1-37-2
        </dd>
        <dt
          className="animated deley02"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
          定款記載の目的
        </dt>
        <dd
          className="animated deley02"
          data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
        >
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

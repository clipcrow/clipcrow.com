
export const bodyClass = "bg_g";
export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default () => (
  <main>
    <section id="topimage">
      <div className="img_am01">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="330" height="250" viewBox="0 0 330 214">
        <path fill="#6C848D" fill-opacity="0.5">
          <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                  M324.333 105.976C318.238 90.088 304.574 77.9334 282.728 74.8454C271.856 73.3117 260.634 75.097 249.875 72.918C226.671 68.2253 211.542 46.971 193.757 31.5075C111.678 -39.8914 -13.2499 18.9156 1.81351 129.685C5.7359 158.549 22.4684 189.458 52.806 196.68C94.3519 206.565 138.041 163.534 178.502 183.985C186.372 187.963 192.697 194.34 199.942 199.351C262.781 242.758 351.175 175.955 324.333 105.976Z;
                  M321.057 134.956C314.962 119.068 312.036 98.456 301.558 77.4562C293.324 60.9561 279.057 29.4331 244.557 22.4561C221.353 17.7634 196.843 22.4197 179.058 6.95623C79 -24 -20 66.5 4.50001 144C19.5 174 14.5 180 56.5362 205.241C83.5 217.981 115 226.5 155.5 226.5C196 226.5 206.958 227.744 239.298 217.981C281.5 205.24 321.057 191.456 321.057 134.956Z;
                  M324.333 105.976C318.238 90.088 304.574 77.9334 282.728 74.8454C271.856 73.3117 260.634 75.097 249.875 72.918C226.671 68.2253 211.542 46.971 193.757 31.5075C111.678 -39.8914 -13.2499 18.9156 1.81351 129.685C5.7359 158.549 22.4684 189.458 52.806 196.68C94.3519 206.565 138.041 163.534 178.502 183.985C186.372 187.963 192.697 194.34 199.942 199.351C262.781 242.758 351.175 175.955 324.333 105.976Z
                  ">
          </animate>
        </path>
        </svg>
      </div>
      <article className="topcontents">
        <div className="topcopy animated deley01" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
          <h2>システムを磨き、<br />健康で楽しく豊かに。</h2>
          <p>医療をはじめとする生活必需サービス産業で<br />
            データに基づく業務最適化と組織的な健康管理や<br />
            関わる皆さまそれぞれの自己実現をお手伝いします</p>
        </div>
        <div className="toppg animated deley03" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
          <img src="/assets/images/topimage.png" alt="" />
        </div>
      </article>
      <div className="img_am02">
        <svg xmlns="http://www.w3.org/2000/svg" width="371" height="318" viewBox="0 0 371 318" fill="none">
          <path fill="white" fill-opacity="0.47">
          <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                  M82.6654 115.034C104.925 107.573 98.5592 88.7763 95.8803 69.4977C87.8689 11.8991 160.665 -21.6145 207.846 17.0735C226.276 32.1882 236.063 57.3447 230.132 78.5723C226.671 90.9413 220.908 99.6878 227.107 113.588C234.685 130.586 250.216 131.775 263.717 141.64C297.231 166.129 291.878 211.428 261.645 231.699C245.152 242.758 223.531 246.185 202.72 242.98C186.844 240.53 164.026 230.41 149.323 237.717C133.407 245.617 117.432 255.398 99.5419 259.517C78.9715 264.255 55.2223 259.561 37.5013 246.24C12.5532 227.485 -4.96766 193.732 2.33486 164.503C8.18281 141.083 28.638 122.7 53.3558 118.957C63.094 117.482 73.3702 118.148 82.6654 115.034Z;
                  M97.6111 48.2853C120.283 38.4135 147.14 21.7742 180.652 13.4345C214.163 5.0948 246.436 -22.4645 293.253 40.3868C311.54 64.9407 332.492 67.8531 346.77 107.924C353.293 126.229 358.993 135.068 362.293 154.414C366.326 178.069 373.629 195.984 368.167 217.227C354.103 271.929 345.414 270.154 300.845 286.547C276.532 295.49 252.309 313.588 222.855 314.199C201.42 319.428 184.428 318.03 156.1 316.59C127.773 315.149 87.2123 306.118 77.2252 293.706C39.9263 247.348 69.6618 248.993 51.6863 226.908C26.3801 195.815 -8.29704 182.461 2.69571 139.705C12.2335 102.608 18.5742 96.1169 42.9132 77.967C58.1563 66.6 74.9389 58.1571 97.6111 48.2853Z;
                  M82.6654 115.034C104.925 107.573 98.5592 88.7763 95.8803 69.4977C87.8689 11.8991 160.665 -21.6145 207.846 17.0735C226.276 32.1882 236.063 57.3447 230.132 78.5723C226.671 90.9413 220.908 99.6878 227.107 113.588C234.685 130.586 250.216 131.775 263.717 141.64C297.231 166.129 291.878 211.428 261.645 231.699C245.152 242.758 223.531 246.185 202.72 242.98C186.844 240.53 164.026 230.41 149.323 237.717C133.407 245.617 117.432 255.398 99.5419 259.517C78.9715 264.255 55.2223 259.561 37.5013 246.24C12.5532 227.485 -4.96766 193.732 2.33486 164.503C8.18281 141.083 28.638 122.7 53.3558 118.957C63.094 117.482 73.3702 118.148 82.6654 115.034Z
                  ">
          </animate>
          </path>
        </svg>
      </div>
    </section>

    <section id="topstory">
      <div className="inner">
        <h2 className="animated" data-scroll="once toggle(.fadeIn, .invisible) 0,0">皆が健康で・楽しく・豊かな人生をおくるために、</h2>
        <p className="animated deley01" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
          医療・介護・保育・物流・外食・建設など生活必需サービス産業の高度化とその利便性向上は、いつの時代であっても社会的最重要テーマであり続けてきました。
          近年ではそれぞれ業界固有なサービス提供ノウハウの進化に加えて、情報システムへの投資が議論されるようになってきています。
        </p>
        <p className="animated deley02" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
          しかし日本の生活必需サービス産業の多くでは、クラウドやモバイルや IoT や AI など他の産業で普及しつつある新しいテクノロジーが紹介されていないために、
          既に旧式化しているアーキテクチャで運用されていたり、そもそもに IT が導入されてないケースもあるようです。データの利活用が進まず、
          業務従事者と顧客双方でユーザー体験が最適化されるのはこれからの取組み次第となっています。
        </p>
        <p className="animated deley03" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
          クリップクロウ合同会社は、医療をはじめとする生活必需サービス産業の SI 案件プロデュースと、従業者間のコミュニケーションを円滑にする SaaS との両輪で、
          データに基づく業務最適化と組織的な健康管理および、関わる皆さまそれぞれの自己実現をお手伝いします。</p>
      </div>
    </section>

    <section id="business_outline">
      <h2><span>Business Outline</span>事業概要</h2>
      <div className="img_am03">
        <svg xmlns="http://www.w3.org/2000/svg" width="254" height="292" viewBox="0 0 254 292" fill="none">
          <path fill="#AFBBBF" fill-opacity="0.4" />
          <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                  M284.29 68.535C259.108 59.3159 225.6 73.1956 205.212 51.0624C195.708 40.1257 190.154 25.8468 179.946 15.4208C153.549 -11.6052 108.999 -0.250776 87.3769 27.4158C55.4172 72.2115 65.9684 110.508 17.199 154.023C-7.40826 175.432 -6.36982 219.179 25.2005 233.272C42.7056 241.303 63.1035 236.661 81.8509 232.251C132.66 217.712 139.215 236.345 173.233 267.716C192.435 285.421 226.435 276.415 236.365 252.211C244.552 233.485 238.785 209.068 252.47 193.907C264.495 180.984 282.881 180.195 295.583 167.42C324.215 138.63 324.725 83.566 284.281 68.5165L284.29 68.535Z;
                  M291.291 57.5358C266.109 48.3167 263.045 66.6818 238.5 49.5001C223.5 39 204.5 27 192 15.5001C160.37 -13.5995 94.6219 3.83342 73.0002 31.5C41.0405 76.2957 3.0491e-10 86.4763 3.0491e-10 138.5C-8.67245e-05 151.897 18.5 160.5 51.0001 182.908C73.0002 200.5 73.0002 206.5 79.0001 230.5C87.125 263 88.5001 276.5 126 290.5C155.5 296.5 206.5 260.5 230.5 221.251C246 205 245.785 198.069 259.47 182.908C271.496 169.985 289.881 169.195 302.584 156.421C331.215 127.631 331.725 72.5667 291.281 57.5172L291.291 57.5358Z;
                  M284.29 68.535C259.108 59.3159 225.6 73.1956 205.212 51.0624C195.708 40.1257 190.154 25.8468 179.946 15.4208C153.549 -11.6052 108.999 -0.250776 87.3769 27.4158C55.4172 72.2115 65.9684 110.508 17.199 154.023C-7.40826 175.432 -6.36982 219.179 25.2005 233.272C42.7056 241.303 63.1035 236.661 81.8509 232.251C132.66 217.712 139.215 236.345 173.233 267.716C192.435 285.421 226.435 276.415 236.365 252.211C244.552 233.485 238.785 209.068 252.47 193.907C264.495 180.984 282.881 180.195 295.583 167.42C324.215 138.63 324.725 83.566 284.281 68.5165L284.29 68.535Z
                  ">
          </animate>
        </svg>
      </div>
      <div className="img_am04">
        <svg xmlns="http://www.w3.org/2000/svg" width="291" height="321" viewBox="0 0 291 321" fill="none">
          <path fill="#6C848D" fill-opacity="0.2" />
          <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                  M231.026 63.0679C205.938 52.2612 176.676 49.6909 151.14 63.4741C138.672 70.2025 127.953 80.597 113.081 82.0471C77.3611 85.5395 63.1698 50.5707 45.725 30.8969C9.76022 -9.66581 -70.0236 -8.88396 -104.098 32.1127C-197.395 144.356 25.0113 418.03 133.303 284.16C154.271 258.235 158.869 213.116 198.929 203.404C223.548 197.434 250.027 208.003 269.759 190.301C311.929 152.464 284.661 86.1826 231.026 63.0679Z;
                  M213 107.047C191 86 191 105.5 158.5 86C126 66.5 135.725 48.0947 111.5 34.5C80.5 17.1032 66.5 20.3731 45.7248 13.5C-51 -18.4999 -70.0236 16.116 -104.098 57.1126C-197.395 169.356 -62.5671 375.369 45.7248 241.5C66.6926 215.575 118.44 251.212 158.5 241.5C183.119 235.53 160.268 186.702 180 169C199.732 151.298 233.5 140 213 107.047Z;
                  M231.026 63.0679C205.938 52.2612 176.676 49.6909 151.14 63.4741C138.672 70.2025 127.953 80.597 113.081 82.0471C77.3611 85.5395 63.1698 50.5707 45.725 30.8969C9.76022 -9.66581 -70.0236 -8.88396 -104.098 32.1127C-197.395 144.356 25.0113 418.03 133.303 284.16C154.271 258.235 158.869 213.116 198.929 203.404C223.548 197.434 250.027 208.003 269.759 190.301C311.929 152.464 284.661 86.1826 231.026 63.0679Z
                  ">
          </animate>
        </svg>
      </div>
      <div className="page_mainimg animated deley02" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
        <img src="/assets/images/img_business_main_pc.png" alt="独自SaaS事業の創造 SI案件プロデュース" className="switch" />
        <div className="btn_detail_g"><a href="/product/">詳細を見る<span className="arrow-right"></span></a></div>
      </div>
      <article className="business_point">
        <div className="business_item animated" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
          <h3><a href="https://genkisystem.com/" target="_blank">Genki Systems</a></h3>
          <p>オフショアで高度ソフトウェア開発を行います</p>
          <ul>
            <li>Flutter,React</li>
            <li>GCP、AWS</li>
            <li>Golang、Dart、TypeScript</li>
            <li>Terraform、Docker、Kubernetes</li>
            <li>OpenApi、Oauth、SAML</li>
            <li>HL7 FHIR、DICOM、ORCA</li>
            <li>位置情報、画像、DWH</li>
          </ul>
        </div>
        <div className="business_item animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
          <h3>ClipCrow</h3>
          <p>ゼロから開発プロジェクトを立ち上げられます</p>
          <ul>
            <li>案件コンソーシアム運営</li>
            <li>顧客ヒアリング、フィット＆ギャップ</li>
            <li>RFP作成支援、契約クロージング</li>
            <li>開発組織の組成、メンターシップ</li>
            <li>事業企画、製品企画、アーキテクチャ</li>
            <li>スクラムマスター</li>
            <li>カスタマーサクセス</li>
          </ul>
        </div>
      </article>
    </section>

    <section id="solution">
      <h2><span>Solution</span>SI案件のプロデュース</h2>
      <p className="solution_lead">
        SaaS製品事業の創造、開発案件プロデュースを基盤に、<br className="viewpc viewtb" />
        生活必需産業全からるIT産業まで幅広くソリューションをお届けしています。
      </p>
      <div className="page_mainimg animated deley02" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
        <img src="/assets/images/img_solution_main_pc.png" alt="独自SaaS事業の創造 SI案件プロデュース" className="switch" />
        <p className="img_cap">
          SIで徹底的に場数をこなし、提案書とノウハウやソースコードを蓄積します。<br />
          パートナーシップの制約下で、提案補強用にカタログ化します。
        </p>
      </div>
      <article className="casestudy">
        <h2><span>Case Study</span>事例紹介</h2>
        <div className="casestudy_index">
          <article className="casestudy_item animated" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
            <div className="casestudy_img">
              <img src="/assets/images/casestudy_img01.jpg" alt="クラウド電子カルテ開発案件" />
            </div>
            <div className="casestudy_txt">
              <h4>クラウド電子カルテ<br />開発案件</h4>
              <p>2020年1月よりプロジェクトの中心として開発チームの組成やアーキテクチャから実行しました。開発するEHRは SaaSとして、Google Cloud 上で実装しています。</p>
              <div className="btn_detail_g"><a href="/case-study/#case01">詳細を見る<span className="arrow-right"></span></a></div>
            </div>
          </article>
          <article className="casestudy_item animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
            <div className="casestudy_img">
              <img src="/assets/images/casestudy_img02.jpg" alt="国立大学病院の治験プラットフォーム" />
            </div>
            <div className="casestudy_txt">
              <h4>国立大学病院の<br />治験プラットフォーム</h4>
              <p>治験届の電子化および各国治験届の相互翻訳自動化、RWDの構築と電子カルテ等の連携元からの治験データ収集などを実装しました。</p>
              <div className="btn_detail_g"><a href="/case-study/#case02">詳細を見る<span className="arrow-right"></span></a></div>
            </div>
          </article>
          <article className="casestudy_item animated deley03" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
            <div className="casestudy_img">
              <img src="/assets/images/casestudy_img05.jpg" alt="開発組織のモダン化コンサルティング" />
            </div>
            <div className="casestudy_txt">
              <h4>開発組織のモダン化<br />コンサルティング</h4>
              <p>AIプラットフォーム製品の開発を行いAI活用SIを提供するスタートアップ企業へ、開発組織の様々な課題を解決するコンサルティングを提供しています。</p>
              <div className="btn_detail_g"><a href="/case-study/#case03">詳細を見る<span className="arrow-right"></span></a></div>
            </div>
          </article>
          <article className="casestudy_item animated" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
            <div className="casestudy_img">
              <img src="/assets/images/casestudy_img04.jpg" alt="遠隔診療SaaS開発" />
            </div>
            <div className="casestudy_txt">
              <h4>遠隔診療SaaS開発</h4>
              <p>大手運輸会社グループ向けに遠隔診療システムをフルスクラッチ開発。ドライバー向けアプリ、薬局向けWEBアプリなどから構成されるシステムを運用しています。</p>
              <div className="btn_detail_g"><a href="/case-study/#case04">詳細を見る<span className="arrow-right"></span></a></div>
            </div>
          </article>
          <article className="casestudy_item animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
            <div className="casestudy_img">
              <img src="/assets/images/casestudy_img06.jpg" alt="福利厚生SaaS開発" />
            </div>
            <div className="casestudy_txt">
              <h4>福利厚生SaaS開発</h4>
              <p>健康経営を行う大企業向けに、従業員に日々の運動をポイント付与しそのポイントをギフトに引き換えられるようにするなど、福利厚生を目的としたSaaSを開発しました。</p>
              <div className="btn_detail_g"><a href="/case-study/#case05">詳細を見る<span className="arrow-right"></span></a></div>
            </div>
          </article>
          <article className="casestudy_item animated deley03" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
            <div className="casestudy_img">
              <img src="/assets/images/casestudy_img03.jpg" alt="PHR製品の拡張と展開" />
            </div>
            <div className="casestudy_txt">
              <h4>PHR製品の拡張と展開</h4>
              <p>MedtechスタートアップとSIパートナーシップを構築し、同社の技術フェロー(非常勤)に就任しました。PHR製品の拡張機能群を開発し、現在も引き続き実施中です。</p>
              <div className="btn_detail_g"><a href="/case-study/#case06">詳細を見る<span className="arrow-right"></span></a></div>
            </div>
          </article>
        </div>
      </article>
    </section>

    <section id="company_profile">
      <h2><span>Company Profile</span>会社概要</h2>
      <dl>
        <dt className="animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">社名</dt>
        <dd className="animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">クリップクロウ合同会社</dd>
        <dt className="animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">設立年月日</dt>
        <dd className="animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">2020年7月1日</dd>
        <dt className="animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">代表社員</dt>
        <dd className="animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
          栗原傑享/くりはらまさたか<div className="btn_detail"><a href="/leadership/">詳細<span className="arrow-right"></span></a></div>
        </dd>
        <dt className="animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">住所</dt>
        <dd className="animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">〒158-0083 東京都世田谷区奥沢1-37-2</dd>
        <dt className="animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">定款記載の目的</dt>
        <dd className="animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
          <ul>
            <li>コンピューターソフトウェア及びハードウェアの企画、研究、開発、設計、製造、 販売、保守、リース、賃貸、輸出入並びにこれらに関するコンサルティング業務</li>
            <li>情報の収集、分析、管理及び処理サービス業、情報提供サービス業並びに情報処理に関する研究開発</li>
            <li>前各号に附帯関連する一切の事業</li>
          </ul>
        </dd>
      </dl>
    </section>
  </main>
);

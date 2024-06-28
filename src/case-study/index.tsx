import AnimatedCloud from "@/AnimatedCloud.tsx";

export const title = "事例紹介 | クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default () => (
  <main>
    <section id="contents_top">
      <div className="inner">
        <h1><span className="txt_en">Case Study</span><span className="txt_j">事例紹介</span></h1>
        <div className="bread_crumb">
          <ul>
            <li><a href="/">TOP</a></li>
            <li>事例紹介</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="main_contents">
      <AnimatedCloud id={5} />
      <AnimatedCloud id={6} />
      <AnimatedCloud id={7} />
      <article id="case01" className="case_item">
        <div className="case_title">
          <div className="case_title_img">
            <img src="casestudy_img01.jpg" alt="クラウド電子カルテ開発案件" />
          </div>
          <div className="case_title_txt">
            <div className="case_title_en">Case Study01</div>
            <div className="case_title_jp"><h2>クラウド電子カルテ開発案件</h2></div>
          </div>
        </div>
        <div className="case_contents">
          <p>2020年1月よりプロジェクトの中心として開発チームの組成やアーキテクチャから実行した。開発する EHR は SaaS として、Google Cloud 上で実装。開発体制は最大時には50名規模となった。2022年6月まで従事した。</p>
          <div className="casestudy_img_wide">
            <img src="casestudy_img01_pc.png" alt="クラウド電子カルテ開発案件" className="switch" />
          </div>
        </div>
      </article>

      <article id="case02" className="case_item">
        <div className="case_title">
          <div className="case_title_img">
            <img src="casestudy_img02.jpg" alt="国立大学病院の治験プラットフォーム" />
          </div>
          <div className="case_title_txt">
            <div className="case_title_en">Case Study02</div>
            <div className="case_title_jp"><h2>国立大学病院の治験プラットフォーム</h2></div>
          </div>
        </div>
        <div className="case_contents">
          <p>2020年9月コロナ禍の下、助成金による医療機関 ICT 実証実験プロジェクトが募集されたときに採択されたいくつかの組織のうちの一つ。国立大学医学部附属病院への実証実験プロジェクト実施支援の依頼があり参画。RFP 作成を支援し、他方、大学との協働にて応札書類を作成した。その後の開発全量について受託した。</p>
          <div className="case_txt">
            <h3>内容</h3>
            <p>アジア8カ国での国際治験協力を建て付け、それを運用するための仕組みをクラウド上で新規構築するというもの。プロジェクトは2021年4月末に完了。</p>
            <ul>
              <li>治験届の電子化および各国治験届の相互翻訳自動化</li>
              <li>RWD の構築と、電子カルテ等の連携元からの治験データ収集</li>
              <li>大規模なシステム運用設計についてコンサルティングを提供</li>
              <li>OSS治験プラットフォームを開発支援しつつ実証実験に投入</li>
            </ul>
          </div>
        </div>
      </article>

      <article id="case03" className="case_item">
        <div className="case_title">
          <div className="case_title_img">
            <img src="casestudy_img03.jpg" alt="開発組織のモダン化コンサルティング" />
          </div>
          <div className="case_title_txt">
            <div className="case_title_en">Case Study03</div>
            <div className="case_title_jp"><h2>開発組織のモダン化コンサルティング</h2></div>
          </div>
        </div>
        <div className="case_contents">
          <p>2021年1月〜12月、AIプラットフォーム製品の開発を行いAI活用SIを提供するスタートアップ企業へ、開発組織の様々な課題を解決するコンサルティングを提供した。</p>
          <div className="case_txt">
            <h3>内容</h3>
            <p>当時の開発体制が抱えていた課題を個別解決することと、さらに本業のAIだけでなくシステム全体を一括で対応できるように、エンジニア体制の拡充と技術のモダン化を行う。</p>
            <ul>
              <li>オフショア開発人員の提供と管理</li>
              <li>エンジニアの採用支援・教育、評価制度の見直し</li>
              <li>開発規約の制定を行い、SIプロジェクトを標準化</li>
              <li>FlutterとGolang、GCPによるパイロットプロジェクト実施</li>
            </ul>
          </div>
        </div>
      </article>

      <article id="case04" className="case_item">
        <div className="case_title">
          <div className="case_title_img">
            <img src="casestudy_img04.jpg" alt="遠隔診療SaaS開発" />
          </div>
          <div className="case_title_txt">
            <div className="case_title_en">Case Study04</div>
            <div className="case_title_jp"><h2>遠隔診療SaaS開発</h2></div>
          </div>
        </div>
        <div className="case_contents">
          <p>2023年4月〜2024年4月に、大手運輸会社グループ向けで、遠隔診療システムをフルスクラッチ開発した。ドライバー向けスマートフォンアプリ、医療機関と薬局向けWEBアプリからなる。はじめから顧客グループ外へのSaaS提供を想定している。</p>
          <div className="case_txt">
            <h3>内容</h3>
            <ul>
              <li>遠隔診療所＋遠隔薬局をTwilio APIで実現。APIのEoSにより今後はZoom APIへ移行を予定</li>
              <li>予約〜診療〜処方の一連をスムーズに行うためUX検討にリソースを費やす</li>
              <li>薬の配送のオペレーションと必要なStripe決済など背後システムの開発</li>
              <li>FlutterとGolangにより、AWS上で運用している</li>
            </ul>
          </div>
        </div>
      </article>

      <article id="case05" className="case_item">
        <div className="case_title">
          <div className="case_title_img">
            <img src="casestudy_img05.jpg" alt="福利厚生SaaS開発" />
          </div>
          <div className="case_title_txt">
            <div className="case_title_en">Case Study05</div>
            <div className="case_title_jp"><h2>福利厚生SaaS開発</h2></div>
          </div>
        </div>
        <div className="case_contents">
          <p>2023年5月〜2024年3月に、プロジェクト2期にわたって、健康経営を行う大企業向けに従業員に日々の運動をポイント付与し、そのポイントをギフトに引き換えられるようにするSaaSを開発した。</p>
          <div className="case_txt">
            <h3>内容</h3>
            <ul>
              <li>全従業員に歩数計を配りスマホの NFC 読み取りで記録する</li>
              <li>運動量に応じて社内通貨が報奨として与えられ、やはりスマホ上に用意したカタログギフト機能で健康グッズやサプリやグループ経営の健康食レストラン食事券に交換できるなどとした。これら一連の機能が一体化している</li>
              <li>企業側管理者は、専用のWEBコンソールによって情報可視化と健康経営施策の集中管理を行う</li>
              <li>FlutterとGolangにより、AWS上で運用している</li>
            </ul>
          </div>
        </div>
      </article>

      <article id="case06" className="case_item">
        <div className="case_title">
          <div className="case_title_img">
            <img src="casestudy_img06.jpg" alt="PHR製品の拡張と展開" />
          </div>
          <div className="case_title_txt">
            <div className="case_title_en">Case Study06</div>
            <div className="case_title_jp"><h2>PHR製品の拡張と展開</h2></div>
          </div>
        </div>
        <div className="case_contents">
          <p>2022年7月より Medtech スタートアップと SI パートナーシップを構築。その後、同社の技術フェロー(非常勤)に就任した。PHR製品の拡張機能群を開発し、現在も引き続き実施中。</p>
          <div className="case_txt">
            <h3>内容</h3>
            <ul>
              <li>PHR 製品の特定疾患管理機能を医療機関向け WEB 画面および既存スマホアプリへの組み込みで患者向け機能を提供</li>
              <li>健康診断結果の収集と表示、その後に結果の悪い従業員に対して受診勧奨を含む行動変容を促す機能を、健康経営に取り組む大企業向けに提供</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  </main>
);

import type { PageData, PageHelpers } from "lume/core.ts";
import StoreLinks from "@/StoreLinks.tsx";

export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default (data: PageData, filters: PageHelpers) => (
  <main>
    <section class="features__page-title">
      <h1>
        <span>Essential Workwareの</span>
        <br />
        特長・機能
      </h1>
    </section>
    <section class="features__kv">
      <p class="features__kv-text">
        ClipCrow Essential
        Workwareには、経営者、スタッフ、ワーカー、それぞれが必要とする特徴・機能が備わっています。
      </p>
      <div class="features__kv-image">
        <img src="/images/features_cover01.png" alt="manager" />
        <img src="/images/features_cover02.png" alt="staff" />
        <img src="/images/features_cover03.png" alt="worker" />
      </div>
    </section>
    <section class="features__maincont">
      <h3 class="title">
        <div class="title__bg left"></div>
        業務負担を軽減できる
      </h3>
      <div class="img-ellipse">
        <div class="img-ellipse__wrapper">
          <div class="ellipse"></div>
          <img
            class="features__img-1"
            src="/images/ex_step03.png"
            alt="step 3"
          />
        </div>
        <div class="img-ellipse__text">
          事前の準備少なく、すぐに利用開始。スタッフの負担を減らし、ワーカーの手持ちをなくします。
        </div>
      </div>
      <div class="features__case-wrapper">
        <div class="features__case">
          <div class="case">
            <div class="case__badge">
              <img src="/images/badge02.png" alt="badge 2" />
              <img src="/images/badge03.png" alt="badge 3" />
            </div>
            <p class="case__title">打刻管理</p>
            <p class="case__body">
              基本的な勤怠管理機能として、執務時間を正確に記録しトラッキング可能に。組織全体の労務状態をリアルタイム把握します。
            </p>
            <p class="extra-hover">
              <a href="/usage-example/#step1">活用例：勤務開始〜終了</a>
            </p>
          </div>
          <div class="case">
            <div class="case__badge">
              <img src="/images/badge02.png" alt="badge 2" />
            </div>
            <p class="case__title">業務指示</p>
            <p class="case__body">
              業務の指示出しを、特徴的なフォーム作成ツールを用いて容易に行うことができます。業務の指示内容および、報告内容を緻密に表現できるため、執務時にワーカーを困惑させることがなくなります。
            </p>
            <p class="case__relation-link">
              <a href="/usage-example/#step1">活用例：勤務開始〜終了</a>
            </p>
          </div>
          <div class="case">
            <div class="case__badge">
              <img src="/images/badge02.png" alt="badge 2" />
            </div>
            <p class="case__title">ワークトラッキング</p>
            <p class="case__body">
              システム上で業務実施の様子を常時トラッキングします。業務の開始・終了を記録する操作は、生産性に対する意識を高め、業務効率を向上させます。
            </p>
            <p class="case__relation-link">
              <a href="/usage-example/#step1">活用例：勤務開始〜終了</a>
            </p>
          </div>
        </div>
        <div class="features__case">
          <div class="case no-link">
            <div class="case__badge">
              <img src="/images/badge02.png" alt="badge 2" />
            </div>
            <p class="case__title">連絡・引き継ぎ</p>
            <p class="case__body">
              正規・非正規雇用の別に関係なく、連絡や引き継ぎなど、情報共有が行えます。柔軟なタグシステムの活用で情報の可視範囲をきめ細かく設定できます。
            </p>
          </div>
          <div class="case no-link">
            <div class="case__badge">
              <img src="/images/badge01.png" alt="badge 1" />
              <img src="/images/badge02.png" alt="badge 2" />
              <img src="/images/badge03.png" alt="badge 3" />
            </div>
            <p class="case__title">モバイルファースト</p>
            <p class="case__body">
              スタッフやワーカーが個人で所有しているスマートフォンやタブレットでもセキュアに利用できます。情報シス部門による端末管理が不必要で、負担軽減となります。
            </p>
          </div>
          <div class="case no-link">
            <div class="case__badge">
              <img src="/images/badge01.png" alt="badge 1" />
            </div>
            <p class="case__title">SaaSサブスクリプション</p>
            <p class="case__body">
              Essential
              Workwareはサブスクリプションで提供されるSaaSです。初期費用も抑えられ、システムの自己管理も必要ありません。非正規雇用者へは正規雇用者の1/5の利用料金で提供し、長期休眠にも対応するので、費用がとても合理的です。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="features__maincont">
      <h3 class="title">
        <div class="title__bg right"></div>
        デジタルツインを実現する
      </h3>
      <div class="img-ellipse">
        <div class="img-ellipse__wrapper">
          <div class="ellipse"></div>
          <img
            class="features__img-2"
            src="/images/illust-04.png"
            alt="illust 4"
          />
        </div>
        <div class="img-ellipse__text">
          スタッフとワーカーの属性やリソース状況を常に最新の状態で把握できます。
        </div>
      </div>
      <div class="features__case-wrapper">
        <div class="features__case">
          <div class="case">
            <div class="case__badge">
              <img src="/images/badge02.png" alt="badge 2" />
              <img src="/images/badge03.png" alt="badge 3" />
            </div>
            <p class="case__title">属性の可視化</p>
            <p class="case__body">
              ワーカーのキャリアやスキル属性を予め登録しておくことで、シフト作成や業務割り当て時に適切な要員指名が可能です。
            </p>
            <p class="case__relation-link">
              <a href="/usage-example/#step1">活用例：勤務開始〜終了</a>
            </p>
          </div>
          <div class="case">
            <div class="case__badge">
              <img src="/images/badge02.png" alt="badge 2" />
            </div>
            <p class="case__title">リソース可視化</p>
            <p class="case__body">
              業務負担の様子をリアルタイムに把握して、偏りが起きないように、リソースを確認しながら業務割り当てができます。
            </p>
            <p class="case__relation-link">
              <a href="/usage-example/#step1">活用例：勤務開始〜終了</a>
            </p>
          </div>
          <div class="case">
            <div class="case__badge">
              <img src="/images/badge02.png" alt="badge 2" />
              <img src="/images/badge03.png" alt="badge 3" />
            </div>
            <p class="case__title">キャリア指標</p>
            <p class="case__body">
              人材育成や能力開発における指標の管理を行います。能力ラダーによって、組織内でのキャリアを示すことができます。
            </p>
            <p class="case__relation-link">
              <a href="/usage-example/#step3">活用例：組織の改善</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="features__maincont">
      <h3 class="title">
        <div class="title__bg left"></div>
        標準化サイクルが発生する
      </h3>
      <div class="img-ellipse">
        <div class="img-ellipse__wrapper">
          <div class="ellipse"></div>
          <img
            class="features__img-3"
            src="/images/ex_step01-2.png"
            alt="step1-2"
          />
        </div>
        <div class="img-ellipse__text">
          EssentialWorkwareを使っているうちに、自然と業務が標準化されます。
        </div>
      </div>
      <div class="features__case-wrapper">
        <div class="features__case">
          <div class="case">
            <div class="case__badge">
              <div>
                <img src="/images/badge02.png" alt="badge 2" />
              </div>
            </div>
            <p class="case__title">ワークのテンプレート化</p>
            <p class="case__body">
              一度作成した業務指示はテンプレートとして繰り返し活用することが可能です。
            </p>
            <p class="case__relation-link">
              <a href="/usage-example/#step3">活用例：組織の改善</a>
            </p>
          </div>
          <div class="case">
            <div class="case__badge">
              <img src="/images/badge02.png" alt="badge 2" />
              <img src="/images/badge03.png" alt="badge 3" />
            </div>
            <p class="case__title">サンクスカード</p>
            <p class="case__body">
              感謝の気持ちをフィードバック。疎かになりがちな、業務成果の評価を可視化することができ、風通しの良い職場の人間関係構築を手助けできます。
            </p>
            <p class="case__relation-link">
              <a href="/usage-example/#step3">活用例：組織の改善</a>
            </p>
          </div>
          <div class="case no-link">
            <div class="case__badge">
              <img src="/images/badge01.png" alt="badge 1" />
              <img src="/images/badge02.png" alt="badge 2" />
            </div>
            <p class="case__title">業務指示一覧出力</p>
            <p class="case__body">
              業務指示の一覧を分析可能な資料として出力できます。本格的な業務改善活動のための調査や、さらなるIT化を進める際の要件定義として活用することが可能です。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="features__maincont">
      <h3 class="title">
        <div class="title__bg right"></div>
        既存の仕組みと連携できる
      </h3>
      <div class="img-ellipse">
        <div class="img-ellipse__wrapper">
          <div class="ellipse"></div>
          <img
            class="features__img-4"
            src="/images/illust-06.png"
            alt="illust 6"
          />
        </div>
        <div class="img-ellipse__text">
          既存の様々なしくみを連携一体運用することで、DXを素早く実現します。
        </div>
      </div>
      <div class="features__case-wrapper">
        <div class="features__case">
          <div class="case">
            <div class="case__badge">
              <img src="/images/badge02.png" alt="badge 2" />
              <img src="/images/badge03.png" alt="badge 3" />
            </div>
            <p class="case__title">日報・伝票の自動化</p>
            <p class="case__body">
              業務の実施記録がIT化されることで、業務日報や伝票作成などの事務仕事を自動化することが可能となります。
            </p>
            <p class="case__relation-link">
              <a href="/usage-example/#step2">活用例：締め作業</a>
            </p>
          </div>
          <div class="case">
            <div class="case__badge">
              <img src="/images/badge01.png" alt="badge 1" />
            </div>
            <p class="case__title">BIツール連携</p>
            <p class="case__body">
              経営向けBIツールに連携が可能です。組織を高度に分析把握するのに役立ちます。
            </p>
            <p class="case__relation-link">
              <a href="/usage-example/#step2">活用例：締め作業</a>
            </p>
          </div>
          <div class="case no-link">
            <div class="case__badge">
              <img src="/images/badge01.png" alt="badge 1" />
              <img src="/images/badge02.png" alt="badge 2" />
            </div>
            <p class="case__title">Workware API</p>
            <p class="case__body">
              すべての機能をAPIとして提供し、データの入出力も充実させているので、ITロックオン状態にされることは一切ありません。
            </p>
          </div>
        </div>
      </div>
    </section>
    <StoreLinks />
  </main>
);

import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";

import type { ComponentChildren } from "preact";
import EWwareFunctionCard from "@/EWwareFunctionCard.tsx";

export const beforeTitle = "Essential Workwareの";
export const title = "特長・機能";
export const layout = "layouts/single.tsx";

const Usage = () => (
  <div id="notes">
    <p>
      Essential
      Workwareには、経営者、スタッフ、ワーカー、それぞれが必要とする特長・機能が備わっています。
    </p>
    <div class="explanatory">
      <div>
        <img src="/images/badge-manager.png" alt="" />
        <p>
          for<br />経営者
        </p>
      </div>
      <div>
        <img src="/images/badge-staff.png" alt="" />
        <p>
          for<br />スタッフ
        </p>
      </div>
      <div>
        <img src="/images/badge-worker.png" alt="" />
        <p>
          for<br />ワーカー
        </p>
      </div>
    </div>
  </div>
);

const Category = (
  props: {
    id: string;
    title: string;
    description: string;
    children: ComponentChildren;
  },
) => (
  <div id={props.id}>
    <div class="stepheder left">
      <h2 class="text">
        <span class="title">{props.title}</span>
      </h2>
    </div>
    <p>{props.description}</p>
    <div class="func-case">
      {props.children}
    </div>
  </div>
);

export default () => (
  <EWwareContentsWrapper css="function" id="">
    <Usage />
    <Category
      id="burden"
      title="業務負担を軽減できる"
      description="事前の準備なしですぐに利用開始。スタッフの負担を減らし、ワーカーの手持ちをなくします。"
    >
      <EWwareFunctionCard
        id="case1-01"
        title="打刻管理"
        staff={true}
        worker={true}
        step={1}
      >
        基本的な勤怠管理機能として、執務時間を正確に記録しトラッキング可能に。組織全体の労務状態をリアルタイム把握します。
      </EWwareFunctionCard>

      <EWwareFunctionCard id="case1-02" title="業務指示" staff={true} step={1}>
        業務の指示出しを、直感的な操作感のフォーム作成ツールを用いて容易に行うことができます。
        業務の指示および報告に求める内容を明瞭に記述することで、執務時にワーカーを困惑させることがなくなります。
      </EWwareFunctionCard>

      <EWwareFunctionCard
        id="case1-03"
        title="ワークトラッキング"
        staff={true}
        worker={true}
        step={1}
      >
        業務実施の様子を常時トラッキングします。業務の開始・終了を記録する操作は、生産性に対する意識を高め、業務効率を向上させます。
      </EWwareFunctionCard>

      <EWwareFunctionCard
        id="case1-04"
        title="連絡・引き継ぎ"
        staff={true}
        worker={true}
      >
        正規・非正規雇用の別に関係なく、連絡や引き継ぎなど、情報共有が行えます。柔軟なタグシステムの活用で情報の可視範囲をきめ細かく設定できます。
      </EWwareFunctionCard>

      <EWwareFunctionCard
        id="case1-05"
        title="モバイルファースト"
        manager={true}
        staff={true}
        worker={true}
      >
        iPhoneもしくはAndroidを動作対象機器としていて、スタッフやワーカーが個人所有している機器でもセキュアに利用できます。
        情シス部門による端末管理が不必要で、負担軽減となります。
      </EWwareFunctionCard>

      <EWwareFunctionCard
        id="case1-06"
        title="SaaSサブスクリプション"
        manager={true}
      >
        Essential
        Workwareはサブスクリプションで提供されるSaaSです。初期費用も抑えられ、システムの自己管理も必要ありません。
        非正規雇用者へは正規雇用者の1/5の利用料金で提供し、長期休眠にも対応するので、費用がとても合理的です。
      </EWwareFunctionCard>
    </Category>

    <Category
      id="digitaltwin"
      title="デジタルツインを実現する"
      description="スタッフとワーカーの属性やリソース状況を常に最新の状態で把握できます。"
    >
      <EWwareFunctionCard
        id="case2-01"
        title="属性の可視化"
        staff={true}
        step={1}
      >
        ワーカーのキャリアやスキル属性を予め登録しておくことで、シフト作成や業務割り当て時に適切な要員指名が可能です。
      </EWwareFunctionCard>

      <EWwareFunctionCard
        id="case2-02"
        title="リソース可視化"
        staff={true}
        step={1}
      >
        業務負担の様子をリアルタイムに把握して、偏りが起きないように、リソースを確認しながら業務割り当てができます。
      </EWwareFunctionCard>

      <EWwareFunctionCard
        id="case2-03"
        title="キャリア指標"
        staff={true}
        worker={true}
        step={3}
      >
        人材育成や能力開発における指標の管理を行います。能力ラダーによって、組織内でのキャリアを示すことができます。
      </EWwareFunctionCard>
    </Category>

    <Category
      id="standardize"
      title="標準化サイクルが発生する"
      description="業務を容易にペーパーレス化。使っているうち自然に業務が標準化されます。"
    >
      <EWwareFunctionCard
        id="case3-01"
        title="ワークのテンプレート化"
        staff={true}
        step={3}
      >
        一度作成した業務指示はテンプレートとして繰り返し活用することが可能です。
        よくある業務はすぐにインポート可能な業種別テンプレート集をスターターキットとして用意しています。
      </EWwareFunctionCard>

      <EWwareFunctionCard
        id="case3-02"
        title="サンクスカード"
        staff={true}
        worker={true}
        step={3}
      >
        感謝の気持ちをフィードバック。疎かになりがちな、業務成果の評価を可視化することができ、風通しの良い職場の人間関係構築を手助けできます。
      </EWwareFunctionCard>

      <EWwareFunctionCard
        id="case3-03"
        title="業務指示一覧出力"
        manager={true}
        staff={true}
      >
        業務指示の一覧を分析可能な資料として出力できます。本格的な業務改善活動のための調査や、さらなるIT化を進める際の要件定義として活用することが可能です。
      </EWwareFunctionCard>
    </Category>

    <Category
      id="connect"
      title="既存の仕組みと連携できる"
      description="APIで高度なソリューション開発も可能。既存システムとの連携で、組織のDXを素早く実現します。"
    >
      <EWwareFunctionCard
        id="case4-01"
        title="日報・伝票の自動化"
        staff={true}
        worker={true}
        step={2}
      >
        業務の実施記録がIT化されることで、業務日報や伝票作成などの事務仕事を自動化することが可能となります。
      </EWwareFunctionCard>

      <EWwareFunctionCard
        id="case4-02"
        title="BIツール連携"
        manager={true}
        step={2}
      >
        経営向けBIツールに連携が可能です。組織を高度に分析把握するのに役立ちます。
      </EWwareFunctionCard>

      <EWwareFunctionCard
        id="case4-03"
        title="Workware API"
        manager={true}
        staff={true}
      >
        すべての機能をAPIとして提供し、すべてのイベントを通知するWebhookも用意しています。
        データの入出力も充実させているので、ITロックオン状態になることはありません。
      </EWwareFunctionCard>
    </Category>
  </EWwareContentsWrapper>
);

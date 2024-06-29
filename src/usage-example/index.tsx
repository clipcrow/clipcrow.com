import ActorImg, { Actor } from "@/ActorImg.tsx";
import DownloadButtons from "@/DownloadButtons.tsx";
import { React } from "lume/deps/react.ts";

export const title = "Essential Workware 活用例 | クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

const UsageBlock = (props: React.PropsWithChildren<{ step: number, title: string }>) => (
  <>
    <h2><span>{("00" + props.step).slice(-2)}</span>{props.title}</h2>
    <div className="usage_index">
      {props.children}
    </div>
  </>
);

const UsageItem = (props: React.PropsWithChildren<{ image: string, target: Actor }>) => (
  <div className="usage_item">
    <div className="productcase_img">
      <img src={props.image} alt="" />
      <div className="member_icon"><ActorImg actor={props.target} /></div>
    </div>
    <p>{props.children}</p>
  </div>
);

const FeatureBlock = (props: React.PropsWithChildren<{ body: string }>) => (
  <div className="productusage_detail">
    <p>{props.body}</p>
    <h3>関係する機能や特長</h3>
    <div className="productusage_linkarea">
      {props.children}
    </div>
  </div>
);

const FeatureLink = (props: React.PropsWithChildren<{ href: string }>) => (
  <div className="productusage_btn"><a href={props.href}>{props.children}</a></div>
);

export default () => (
  <main>
    <section id="product_top">
      <h1>Essential Workware</h1>
    </section>
    <div className="bread_crumb product_crumb">
      <ul>
        <li><a href="/">TOP</a></li>
        <li><a href="/product/">Essential Workware</a></li>
        <li>活用例</li>
      </ul>
    </div>
    <section className="product_title">
      <h1>Essential Workware <br className="viewsp" />活用例</h1>
    </section>

    <section className="main_contents">
      <div className="mark_sample">
        <dl>
          <dt><ActorImg actor="admin"/></dt>
          <dd>：管理者</dd>
          <dt><ActorImg actor="staff"/></dt>
          <dd>：スタッフ</dd>
          <dt><ActorImg actor="worker"/></dt>
          <dd>：ワーカー</dd>
          <dt><ActorImg actor="guest"/></dt>
          <dd>：ゲスト</dd>
        </dl>
      </div>

      <article id="usage01" className="usage_contents">
        <UsageBlock step={1} title="野良チャットの置き換え">
          <UsageItem image="/assets/images/illust/01.png" target="admin">グループでも1on1でも使えるチャット</UsageItem>
          <UsageItem image="/assets/images/illust/04.png" target="staff">業務の役に立つチャット以上の機能</UsageItem>
          <UsageItem image="/assets/images/illust/05.png" target="admin">ビジネス用途のツールとして万全のセキュリティを確保</UsageItem>
          <UsageItem image="/assets/images/illust/06.png" target="admin">フリーミアムと利用しやすい価格体系で合理的なコスト負担</UsageItem>
        </UsageBlock>
        <FeatureBlock body="自然発生的に用いられるようになったコンシューマ向けツールをIT統制の観点より組織公式なツールに置き換えるとき。野良チャット撲滅。">
          <FeatureLink href="/technology/#technology02">打刻管理</FeatureLink>
          <FeatureLink href="/technology/#technology03">属性の可視化</FeatureLink>
          <FeatureLink href="/features/#features03">業務指示</FeatureLink>
          <FeatureLink href="/features/#features04">タスクトラッキング</FeatureLink>
          <FeatureLink href="/features/#features01">リソース可視化</FeatureLink>
        </FeatureBlock>
      </article>

      <article id="usage02" className="usage_contents">
        <UsageBlock step={2} title="ちいさな業務のシステム化">
          <UsageItem image="/assets/images/illust/02.png" target="worker">顧客や業務リソースなどをわかりやすくカードで表現</UsageItem>
          <UsageItem image="/assets/images/illust/07.png" target="staff">データベース基本機能としてカードの検索や更新が自在</UsageItem>
          <UsageItem image="/assets/images/illust/07.png" target="staff">よく使うカードはテンプレートとして再利用できる</UsageItem>
        </UsageBlock>
        <FeatureBlock body="紙やスプレッドシートの共有で行っているような雑多でちいさな業務をシステム化するとき。使いながら業務をシステムに乗せてDX実現。">
          <FeatureLink href="/technology/#technology02">打刻管理</FeatureLink>
          <FeatureLink href="/features/#features04">タスクトラッキング</FeatureLink>
          <FeatureLink href="/features/#technology02">日報・伝票の自動化</FeatureLink>
          <FeatureLink href="/technology/#technology07">BIツール連携</FeatureLink>
        </FeatureBlock>
      </article>

      <article id="usage03" className="usage_contents">
        <UsageBlock step={3} title="組織内外を縦断するコミュニケーション">
          <UsageItem image="/assets/images/illust/03.png" target="admin">コミュニケーションの一元化で、複数ツールを使い分ける面倒がなくなる</UsageItem>
          <UsageItem image="/assets/images/illust/08.png" target="worker">一人の顧客をチームで応対。顧客の家族との情報共有も同時に可能</UsageItem>
          <UsageItem image="/assets/images/illust/09.png" target="staff">緻密なコミュニケーション実現で顧客満足度を向上させる</UsageItem>
        </UsageBlock>
        <FeatureBlock body="情報の共有を組織内に止めることなく、ゲストユーザーとして顧客を取り込めることで、緻密なコミュニケーションを実現。組織横断かつ縦断。">
          <FeatureLink href="/features/">キャリア指標</FeatureLink>
          <FeatureLink href="/features/#features04">タスクのテンプレート化</FeatureLink>
          <FeatureLink href="/features/#features03">サンクスカード</FeatureLink>
        </FeatureBlock>
      </article>

      <article id="usage04" className="usage_contents">
        <UsageBlock step={4} title="既存システムのフロントウェア">
          <UsageItem image="/assets/images/illust/03.png" target="admin">全員分のPCがなかったり、立って移動しながらの業務でもDX</UsageItem>
          <UsageItem image="/assets/images/illust/03.png" target="staff">業務の状態をリアルタイムに把握できるようになる</UsageItem>
          <UsageItem image="/assets/images/illust/03.png" target="staff">必要な指示をすぐに出し、タスク割り振りもスムーズに実行</UsageItem>
        </UsageBlock>
        <FeatureBlock body="電子カルテなど既存の業務システムにAPIを利用して連携させて、携帯性の高い情報入出力機能を追加する。フロントウェアとしての使い方。">
          <FeatureLink href="/features/">キャリア指標</FeatureLink>
          <FeatureLink href="/features/#features04">タスクのテンプレート化</FeatureLink>
          <FeatureLink href="/features/#features03">サンクスカード</FeatureLink>
        </FeatureBlock>
      </article>
    </section>
    <DownloadButtons />
  </main>
);

import DownloadButtons from "@/DownloadButtons.tsx";

export const title = "ClipCrow | クリップクロウ合同会社";

const Usage = (
  props: React.PropsWithChildren<
    { step: number; clazz: string; title: string; image: string; href: string }
  >,
) => (
  <article
    className={`productcase_item animated ${props.clazz}`}
    data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
  >
    <h3>
      <span>{("00" + props.step).slice(-2)}</span>
      {props.title}
    </h3>
    <div className="productcase_img">
      <img src={props.image} alt="" />
    </div>
    <div className="productcase_txt">
      <p>{props.children}</p>
    </div>
    <div className="btn_detail btn_w">
      <a href={props.href}>もっと詳しく</a>
    </div>
  </article>
);

const Feature = (
  props: React.PropsWithChildren<
    {
      clazz: string;
      title: string;
      image1: string;
      image2: string;
      href: string;
    }
  >,
) => (
  <article
    className={`productfunction_item animated ${props.clazz}`}
    data-scroll="once toggle(.fadeInUp, .invisible) 0,0"
  >
    <div className="product_screenimg">
      <div className="screen_img">
        <img src={props.image1} alt="" />
      </div>
      <div className="screen_img">
        <img src={props.image2} alt="" />
      </div>
    </div>
    <div className="product_screentxt">
      <h3>{props.title}</h3>
      <p>{props.children}</p>
    </div>
    <div className="btn_detail btn_w">
      <a href={props.href}>もっと詳しく</a>
    </div>
  </article>
);

export default () => (
  <main>
    <section id="product_topimage">
      <div className="product_topcontents">
        <article className="topcon_txt">
          <h1
            className="animated"
            data-scroll="once toggle(.fadeIn, .invisible) 0,0"
          >
            SaaS製品"ClipCrow"
          </h1>
          <h2
            className="animated deley01"
            data-scroll="once toggle(.fadeIn, .invisible) 0,0"
          >
            <span className="marker">心が動く、行動が変わる</span>
          </h2>
          <div
            className="topcon_lead animated deley02"
            data-scroll="once toggle(.fadeIn, .invisible) 0,0"
          >
            <p>
              クリップクロウ合同会社が開発・販売するClipCrowは、<br />
              カード型データベース機能とビジネスチャット機能を、<br className="viewpc" />
              スマホへのインストールだけですぐに利用開始できます。<br className="viewpc" />
              同時に提供するタスク管理機能は日々使ううちに<br className="viewpc" />
              自然と業務の標準化を進めます。フリーミアムです。
            </p>
          </div>
        </article>
        <div
          className="topcon_img animated deley02"
          data-scroll="once toggle(.fadeIn, .invisible) 0,0"
        >
          <img src="product_kv.png" alt="" />
        </div>
      </div>
    </section>

    <section id="product_case">
      <h2 className="product_h2">解決する課題</h2>
      <div className="productcase_index">
        <Usage
          step={1}
          clazz=""
          title="野良チャットの置き換え"
          image="/assets/images/illust/14.png"
          href="/product/usage-example/#usage01"
        >
          自然発生的に用いられるようになったコンシューマ向けツールをIT統制の観点より組織公式なツールに置き換えるとき。野良チャット撲滅。
        </Usage>
        <Usage
          step={2}
          clazz="deley02"
          title="ちいさな業務のシステム化"
          image="/assets/images/illust/04.png"
          href="/product/usage-example/#usage02"
        >
          紙やスプレッドシートの共有で行っているような雑多でちいさな業務をシステム化するとき。使いながら業務をシステムに乗せてDX実現。
        </Usage>
        <Usage
          step={3}
          clazz="deley03"
          title="組織内外を縦断するコミュニケーション"
          image="/assets/images/illust/08.png"
          href="/product/usage-example/#usage03"
        >
          情報の共有を組織内に止めることなく、ゲストユーザーとして顧客を取り込めることで、緻密なコミュニケーションを実現。組織横断かつ縦断。
        </Usage>
      </div>
    </section>

    <section id="product_function">
      <h2 className="product_h2">製品の機能</h2>
      <div className="productfunction_index">
        <Feature
          clazz=""
          title="ホームとチームのInfographics"
          image1="product_screen01-01.jpg"
          image2="product_screen01-02.jpg"
          href="/product/features/#features01"
        >
          ホームには、現在の自分の状態とチャットの未読メンションおよびブックマークしたカードを表示。チームでは、ユーザー間の連携度合いをグラフ化します。
        </Feature>
        <Feature
          clazz="deley02"
          title="カード型データベース"
          image1="product_screen02-01.jpg"
          image2="product_screen02-02.jpg"
          href="/product/features/#features02"
        >
          DBカードの一覧表示、フィルター（検索）、並び替え、およびDBカードの新規作成ができます。
        </Feature>
        <Feature
          clazz=""
          title="ビジネスチャット"
          image1="product_screen03-01.jpg"
          image2="product_screen03-02.jpg"
          href="/product/features/#features03"
        >
          ClipCrowのカードは、すべてチャットルームを背景に持っています。カード操作ログ、メッセージのやり取りおよび貼り付けられたカードが時系列に沿って表示されます。
        </Feature>
        <Feature
          clazz="deley02"
          title="タスク管理"
          image1="product_screen04-01.jpg"
          image2="product_screen04-02.jpg"
          href="/product/features/#features04"
        >
          ClipCrowのタスク管理はTODOを備忘するだけに留まりません。進捗状態や効率まで可視化することが可能です。
        </Feature>
      </div>
    </section>

    <section id="product_additional">
      <article className="productadd_txt">
        <h2
          className="animated"
          data-scroll="once toggle(.fadeIn, .invisible) 0,0"
        >
          <span className="marker">
            フリーミアム<br className="viewsp" />＋プロフェッショナルサービス
          </span>
        </h2>
        <p
          className="animated deley01"
          data-scroll="once toggle(.fadeIn, .invisible) 0,0"
        >
          ClipCrowはフリーミアム。<br />
          App Store / Google
          Playから今すぐインストールして、気軽に試使用できます。
        </p>
      </article>
      <div
        className="productadd_img animated deley02"
        data-scroll="once toggle(.fadeIn, .invisible) 0,0"
      >
        <img src="product_freeimg.png" alt="" />
        <p>事前の準備なしですぐに利用開始</p>
      </div>
    </section>
    <DownloadButtons />
  </main>
);

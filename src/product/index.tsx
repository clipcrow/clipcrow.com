import DownloadButtons from "@/DownloadButtons.tsx";

export const title = "Essential Workware | クリップクロウ合同会社";
export const layout = "layouts/baseAdobeFont.tsx";

export default () => (
  <main>
    <section id="product_topimage">
      <div className="product_topcontents">
        <article className="topcon_txt">
          <h1 className="animated" data-scroll="once toggle(.fadeIn, .invisible) 0,0">Essential Workware</h1>
          <h2 className="animated deley01" data-scroll="once toggle(.fadeIn, .invisible) 0,0"><span className="marker">心が動く、行動が変わる</span></h2>
          <div className="topcon_lead animated deley02" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
            <p>Essenntial Workware は、<br />
              スマホへのインストールだけですぐに利用開始できる、<br className="viewpc" />
              カード型データベース＋ビジネスチャットを<br className="viewpc" />
              フリーミアムで提供します。<br />
              同時に提供するタスク管理機能は日々使ううちに<br className="viewpc" />
              自然と業務の標準化を進めます。</p>
          </div>
        </article>
        <div className="topcon_img animated deley02" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
          <img src="product_kv.png" alt="" />
        </div>
      </div>
    </section>

    <section id="product_case">
      <h2 className="product_h2">活用例</h2>
      <div className="productcase_index">
        <article className="productcase_item animated" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
          <h3><span>01</span>野良チャットの置き換え</h3>
          <div className="productcase_img">
            <img src="product_case02.png" alt="" />
          </div>
          <div className="productcase_txt">
            <p>自然発生的に用いられるようになったコンシューマ向けツールをIT統制の観点より組織公式なツールに置き換えるとき。野良チャット撲滅。</p>
          </div>
          <div className="btn_detail btn_w">
            <a href="/usage-example/#usage01">もっと詳しく</a>
          </div>
        </article>

        <article className="productcase_item animated deley02" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
          <h3><span>02</span>ちいさな業務のシステム化</h3>
          <div className="productcase_img">
            <img src="product_case01.png" alt="" />
          </div>
          <div className="productcase_txt">
            <p>紙やスプレッドシートの共有で行っているような雑多でちいさな業務をシステム化するとき。使いながら業務をシステムに乗せてDX実現。
            </p>
          </div>
          <div className="btn_detail btn_w">
            <a href="/usage-example/#usage02">もっと詳しく</a>
          </div>
        </article>

        <article className="productcase_item animated deley03" data-scroll="once toggle(.fadeInUp, .invisible) 0,0">
          <h3><span>03</span>組織内外を縦断するコミュニケーション</h3>
          <div className="productcase_img">
            <img src="product_case03.png" alt="" />
          </div>
          <div className="productcase_txt">
            <p>情報の共有を組織内に止めることなく、ゲストユーザーとして顧客を取り込めることで、緻密なコミュニケーションを実現。組織横断かつ縦断。</p>
          </div>
          <div className="btn_detail btn_w">
            <a href="/usage-example/#usage03">もっと詳しく</a>
          </div>
        </article>
      </div>
    </section>

    <section id="product_function">
      <h2 className="product_h2">製品の機能</h2>
      <div className="productfunction_index">
        <article className="productfunction_item animated" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
          <div className="product_screenimg">
            <div className="screen_img"><img src="product_screen01-01.jpg" alt="" /></div>
            <div className="screen_img"><img src="product_screen01-02.jpg" alt="" /></div>
          </div>
          <div className="product_screentxt">
            <h3>ホームとチームのInfographics</h3>
            <p>ホームには、現在の自分の状態とチャットの未読メンションおよびブックマークしたカードを表示。チームでは、ユーザー間の連携度合いをグラフ化します。</p>
          </div>
          <div className="btn_detail btn_w">
            <a href="/features/#features01">もっと詳しく</a>
          </div>
        </article>

        <article className="productfunction_item animated deley02" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
          <div className="product_screenimg">
            <div className="screen_img"><img src="product_screen02-01.jpg" alt="" /></div>
            <div className="screen_img"><img src="product_screen02-02.jpg" alt="" /></div>
          </div>
          <div className="product_screentxt">
            <h3>カード型データベース</h3>
            <p>DBカードの一覧表示、フィルター（検索）、並び替え、およびDBカードの新規作成ができます。</p>
          </div>
          <div className="btn_detail btn_w">
            <a href="/features/#features02">もっと詳しく</a>
          </div>
        </article>

        <article className="productfunction_item animated" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
          <div className="product_screenimg">
            <div className="screen_img"><img src="product_screen03-01.jpg" alt="" /></div>
            <div className="screen_img"><img src="product_screen03-02.jpg" alt="" /></div>
          </div>
          <div className="product_screentxt">
            <h3>ビジネスチャット</h3>
            <p>Essential Workwareのカードは、すべてチャットルームを背景に持っています。カード操作ログ、メッセージのやり取りおよび貼り付けられたカードが時系列に沿って表示されます。</p>
          </div>
          <div className="btn_detail btn_w">
            <a href="/features/#features03">もっと詳しく</a>
          </div>
        </article>

        <article className="productfunction_item animated deley02" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
          <div className="product_screenimg">
            <div className="screen_img"><img src="product_screen04-01.jpg" alt="" /></div>
            <div className="screen_img"><img src="product_screen04-02.jpg" alt="" /></div>
          </div>
          <div className="product_screentxt">
            <h3>タスク管理</h3>
            <p>Essential Workwareのタスク管理はTODOを備忘するだけに留まりません。進捗状態や効率まで可視化することが可能です。</p>
          </div>
          <div className="btn_detail btn_w">
            <a href="/features/#features04">もっと詳しく</a>
          </div>
        </article>
      </div>
    </section>

    <section id="product_additional">
      <article className="productadd_txt">
        <h2 className="animated" data-scroll="once toggle(.fadeIn, .invisible) 0,0"><span className="marker">フリーミアム<br className="viewsp" />＋プロフェッショナルサービス</span></h2>
        <p className="animated deley01" data-scroll="once toggle(.fadeIn, .invisible) 0,0">Essenntial Workware はフリーミアム。<br />
        App Store / Google Playから今すぐインストールして、気軽に試使用できます。</p>
      </article>
      <div className="productadd_img animated deley02" data-scroll="once toggle(.fadeIn, .invisible) 0,0">
        <img src="product_freeimg.png" alt="" />
        <p>事前の準備なしですぐに利用開始</p>
      </div>
    </section>
    <DownloadButtons />
  </main>
);

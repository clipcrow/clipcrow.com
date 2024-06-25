import DownloadButtons from "@/DownloadButtons.tsx";

export const title = "Essential Workware 製品機能 | クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

export default () => (
  <main>
    <section id="product_top">
      <h1>Essential Workware</h1>
    </section>
    <div className="bread_crumb product_crumb">
      <ul>
        <li><a href="/">TOP</a></li>
        <li><a href="/product/">Essential Workware</a></li>
        <li>Essential Workware 製品機能</li>
      </ul>
    </div>
    <section className="product_title">
      <h1>Essential Workware <br className="viewsp" />製品機能</h1>
    </section>
    <section className="main_contents">
      <div className="mark_sample">
        <dl>
          <dt><img src="/assets/images/common/mark_admin.png" alt="管理者" /></dt>
          <dd>：管理者</dd>
          <dt><img src="/assets/images/common/mark_staff.png" alt="スタッフ" /></dt>
          <dd>：スタッフ</dd>
          <dt><img src="/assets/images/common/mark_guest.png" alt="ゲスト" /></dt>
          <dd>：ゲスト</dd>
        </dl>
      </div>

      <article id="features01" className="features_contents">
        <h2>
          ホームとチームのInfographics
          <span><img src="/assets/images/common/mark_staff.png" alt="スタッフ" /></span>
          <span><img src="/assets/images/common/mark_guest.png" alt="ゲスト" /></span>
        </h2>
        <div className="features_bg"></div>
        <div className="features_inner">
          <div className="features_item">
            <img src="features_fig01.png" alt="情報表示順を上下スワップ" />
          </div>
          <div className="features_item">
            <img src="features_fig02.png" alt="ユーザー連携度の図示" />
            <p>ホームには、現在の自分の状態とチャットの未読メンションおよびブックマークしたカードを表示する。</p>
          </div>
          <div className="features_item">
            <img src="features_fig03.png" alt="ユーザー間のDM" />
          </div>
          <div className="features_item">
            <p>ユーザープロファイルもカード型 DB で実現している。よって、他のカードと同様に、柔軟な項目定義が可能</p>
            <p>チームでは、ユーザー間の連携度合いをグラフ表示する。同時にユーザー管理機能であり、新しいチームメイトを招待したり、個別ユーザーの情報表示とチャットが融合。</p>
          </div>
        </div>
      </article>

      <article id="features02" className="features_contents">
        <h2>
          カード型データベース
          <span><img src="/assets/images/common/mark_admin.png" alt="管理者" /></span>
        </h2>
        <div className="features_bg"></div>
        <div className="features_inner">
          <div className="features_item">
            <img src="features_fig04.png" alt="カード型データベース" />
          </div>
          <div className="features_item">
            <p>DBカードのファシリテーターに含まれているユーザーもしくはタグの保有者だけが、カードを編集できる。</p>
            <p>Essential Workwareではすべての DB カードにチャットルームが自動的に用意される。</p>
            <p>DB カードの操作は日時内容をログ保存される。操作ログはチャットルームにユーザー同士のメッセージのやりとりに混在して表示される。<br />
            ログの一部として情報項目の更新内容を日時とともにすべて保存しているので、チャットルーム上で対象の変化を時系列に沿って追うことができる。<br />
            <br />
            ログは以下の情報を含む<br />
            ・操作者<br />
            ・発生日時<br />
            ・操作の内容<br />
            ・補足情報として、操作対象や編集内容などの値</p>
          </div>
        </div>
      </article>

      <article id="features03" className="features_contents">
        <h2>
          ビジネスチャット
          <span><img src="/assets/images/common/mark_staff.png" alt="スタッフ" /></span>
          <span><img src="/assets/images/common/mark_guest.png" alt="ゲスト" /></span>
        </h2>
        <div className="features_bg"></div>
        <div className="features_inner">
          <div className="features_item">
            <img src="features_fig05.png" alt="ビジネスチャット" />
          </div>
          <div className="features_item">
            <p>ワークスペース作成時に用意される「チャット」機能は、データベースのサンプル定義。</p>
            <p>カード操作ログ、メッセージのやりとりおよび貼り付けられたカードが時系列に沿って表示される。</p>
            <p>Essential Workware のカードはすべてチャットルームを背後に持つ。<br />
              <br />
              チャットルームに表示されるログ・メッセージ・カードすべてにリアクション等の操作が可能。</p>
          </div>
        </div>
      </article>
      <article id="features04" className="features_contents">
        <h2>
          タスク管理
          <span><img src="/assets/images/common/mark_staff.png" alt="スタッフ" /></span>
          <span><img src="/assets/images/common/mark_guest.png" alt="ゲスト" /></span>
        </h2>
        <div className="features_bg"></div>
        <div className="features_inner">
          <div className="features_item">
            <img src="features_fig06.png" alt="タスクとして作成" />
          </div>
          <div className="features_item">
            <p>チャット上にカードを作成する際に、「タスクとして進捗を管理する」ことができる。タスクはカードに担当者・進捗の状態・期限日の管理機能が加わったもの</p>
          </div>
          <div className="features_item">
            <img src="features_fig07.png" alt="タスクのチャットルーム" />
          </div>
          <div className="features_item">
            <p>タスクだけを集めて管理する機能があり、チャット外ですぐにタスク機能を備えたカードを作成できる</p>
          </div>
        </div>
      </article>
    </section>
    <DownloadButtons />
  </main>
);

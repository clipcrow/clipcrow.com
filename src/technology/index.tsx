import ActorImg from "@/ActorImg.tsx";
import DownloadButtons from "@/DownloadButtons.tsx";

export const title = "Essential Workwareの技術的特長 | クリップクロウ合同会社";
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
        <li>技術的特長</li>
      </ul>
    </div>
    <section className="product_title">
      <h1>Essential Workware<br className="viewsp" />の技術的特長</h1>
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

      <article id="technology01" className="technology_contents">
        <div className="technology_bg"></div>
        <div className="technology_inner">
          <h2>
            フォームを自由に作成
            <span><ActorImg actor="admin"/></span>
            <span><ActorImg actor="staff"/></span>
          </h2>
          <p>カード型DBのレコードとしてのカード・チャットに貼り付けるカード・タスク・プロファイルなどのあらゆる箇所で自由に入力フォームを作る機能を備えている。</p>
          <div className="technology_3column">
            <div className="technology_item">
              <div className="technology_img">
                <img src="technology_fig01.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>指示内容を示すフォームは、あらかじめ組み込まれている多彩な項目型を使い分ければ、それぞれの型に適した入力方法やバリデーションが提供される。</p>
                <p>報告内容を示すフォームはタスクの実行者に入力させるためのもの。タスク生成時にはファシリテーターがデフォルト値を指定できる。</p>
              </div>
            </div>
            <div className="technology_item">
              <div className="technology_img">
                <img src="technology_fig02.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>指示内容を示すフォームは、作成編集が完了したらリードオンリー表示</p>
                <p>タスク実行者が、報告内容を示すフォームへ値を入力する。(例ではチェックBOX)</p>
              </div>
            </div>
            <div className="technology_item">
              <div className="technology_img">
                <img src="technology_fig03.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>参照者が常に更新できる項目(例では数値)</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article id="technology02" className="technology_contents">
        <div className="technology_bg"></div>
        <div className="technology_inner">
          <h2>
            打刻を記録、状態変化をリアルタイム共有
            <span><ActorImg actor="staff"/></span>
            <span><ActorImg actor="guest"/></span>
          </h2>
          <div className="technology_3column">
            <div className="technology_item">
              <div className="technology_img">
                <img src="technology_fig04.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>「所要時間を計る」オプションをONにすると、棒状のインジケーターで経過時間をリアルタイム表示する。さらにアラームを鳴らす機能もある。</p>
                <p>すべてのオブジェクトについて、ユーザー操作での状態変化を記録。</p>
              </div>
            </div>
            <div className="technology_item">
              <div className="technology_img">
                <img src="technology_fig05.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>時系列に沿ったログが作成されていて、手軽に参照できるようにしている。<br />
                  アプリケーション全体がプッシュに対応していて、同僚の操作がリアルタイムに画面に反映する。<br />
                  チャットの機能も同じ。</p>
              </div>
            </div>
            <div className="technology_item">
              <div className="technology_img">
                <img src="technology_fig06.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>OS機能のプッシュ通知も充実させている。通知をクリックすると、Deeplinkでアプリケーション内の該当画面に遷移する。</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article id="technology03" className="technology_contents">
        <div className="technology_bg"></div>
        <div className="technology_inner">
          <h2>
            可視性を柔軟にコントロール
            <span><ActorImg actor="admin"/></span>
            <span><ActorImg actor="staff"/></span>
            <span><ActorImg actor="worker"/></span>
            <span><ActorImg actor="guest"/></span>
          </h2>
          <div className="technology_2column">
            <div className="technology_item wide_item">
              <div className="technology_img">
                <img src="technology_fig07.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>各所でタグを用いてユーザーの検索を行うようにしている。<br />
                タグは、所属や資格などのユーザー属性を示すために用いられる。</p>
              </div>
            </div>
            <div className="technology_item conp_item">
              <div className="technology_img">
                <img src="technology_fig08.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>タグの付与によってユーザーの可視性が変化して引受可能なタスクも変わる。つまり、タグによりキャリアを設計する。</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article id="technology04" className="technology_contents">
        <div className="technology_bg"></div>
        <div className="technology_inner">
          <h2>
            ビジュアルの活用
            <span><ActorImg actor="worker"/></span>
            <span><ActorImg actor="guest"/></span>
          </h2>
          <p>カードの背景に画像を表示できる。デバイスのカメラやカメラロールのほか、プロ写真家の写真やオリジナルイラストも用意している。</p>
          <div className="technology_1column">
            <div className="technology_item">
              <div className="technology_img">
                <img src="technology_fig09.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>フォトストックサービスの「Unsplash」や、<br />Essential Workwareを彩る独自キャラクターが登場。</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article id="technology05" className="technology_contents">
        <div className="technology_bg"></div>
        <div className="technology_inner">
          <h2>
            国際化とコンテンツ翻訳
            <span><ActorImg actor="staff"/></span>
            <span><ActorImg actor="worker"/></span>
            <span><ActorImg actor="guest"/></span>
          </h2>
          <p>アプリケーション全体を国際化していて、現在は、日本語・英語・ベトナム語に対応している。今後、中台韓葡西語対応を予定。</p>
          <div className="technology_2column">
            <div className="technology_item conp_item">
              <div className="technology_img">
                <img src="technology_fig10.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>デバイスごと（ワークスペースやユーザーごとではない）に表示言語の設定を行う。</p>
              </div>
            </div>
            <div className="technology_item wide_item">
              <div className="technology_img">
                <img src="technology_fig11.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>デバイスの設定言語が英語で、コンテンツが日本語のときの動作の様子。日本語から英語に翻訳している。</p>
                <p>カードのタイトルと説明文が、デバイス設定言語と異なる場合、自動検知して翻訳機能を有効にする。</p>
              </div>
            </div>
            <div className="technology_item wide_item">
              <div className="technology_img">
                <img src="technology_fig12.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>長押し選択したチャットのメッセージを対象とした操作シートの、”Translate text”の実行で翻訳される。</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article id="technology06" className="technology_contents">
        <div className="technology_bg"></div>
        <div className="technology_inner">
          <h2>
            タブレットやPCの大画面にも最適化表示
            <span><ActorImg actor="admin"/></span>
            <span><ActorImg actor="staff"/></span>
          </h2>
          <p>同じスマホでも縦横で最適表示を自動的に行い、タブレットサイズ以上ではナビゲーション+2列表示を行う。Apple Silicon搭載Macでも動作する</p>

          <div className="technology_1column">

            <div className="technology_item">
              <div className="technology_img">
                <img src="technology_fig13.png" alt="" />
              </div>
              <div className="technology_txt">
                <p>1,800幅までレスポンシブ対応し、それ以上は余白表示する。</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article id="technology07" className="technology_contents">
        <div className="technology_bg"></div>
        <div className="technology_inner">
          <h2>
            APIとWebhookで既存システムと連携
            <span><ActorImg actor="admin"/></span>
            <span><ActorImg actor="worker"/></span>
          </h2>
          <div className="technology_1column">
            <div className="technology_item">
              <div className="technology_img wide_img">
                <img src="technology_fig14_pc.png" alt="" className="switch" />
              </div>
            </div>
          </div>
        </div>
      </article>

      <article id="technology08" className="technology_contents">
        <div className="technology_bg"></div>
        <div className="technology_inner">
          <h2>
            Googleの技術スタックを徹底活用
            <span><ActorImg actor="admin"/></span>
          </h2>
          <div className="technology_3column box_content">
            <div className="technology_boxitem">
              <div className="technology_icon01">
                <img src="icon_smartphone.svg" alt="" />
              </div>
              <div className="dev_box boxtype01">Flutter (Dart)</div>
              <div className="dev_box boxtype02">Material Design</div>
              <div className="dev_box boxtype02">Google Maps SDK</div>
              <div className="dev_box boxtype03">Vertex AI (Gemini Pro)</div>
              <div className="dev_box boxtype04">Unsplash API</div>
            </div>
            <div className="technology_boxitem">
              <div className="technology_icon02">
                <img src="icon_server.svg" alt="" />
              </div>
              <div className="dev_box boxtype01">Golang</div>
              <div className="dev_box boxtype02">Google Cloud Identity</div>
              <div className="dev_box boxtype02">Goolge Cloud Translation</div>
              <div className="dev_box boxtype02">Google Places API</div>
              <div className="dev_box boxtype04">Pusher</div>
            </div>
            <div className="technology_boxitem">
              <div className="dev_box boxtype02">GCP / Cloud Run</div>
              <div className="dev_box boxtype02">GCP / Cloud SQL</div>
              <div className="dev_box boxtype02">GCP / Cloud Storage</div>
              <div className="dev_box boxtype02">Firebase Analytics</div>
              <div className="dev_box boxtype04">Sendmail</div>
            </div>
          </div>
        </div>
      </article>

      <article id="technology09" className="technology_contents">
        <div className="technology_bg"></div>
        <div className="technology_inner">
          <h2>
            DevOps環境
            <span><ActorImg actor="admin"/></span>
          </h2>
          <div className="technology_1column">
            <div className="technology_item">
              <div className="technology_img wide_img">
                <img src="technology_fig15_pc.png" alt="" className="switch" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
    <DownloadButtons />
  </main>
);

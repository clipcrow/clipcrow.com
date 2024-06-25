import DownloadButtons from "@/DownloadButtons.tsx";

export const title = "Essential Workware 活用例 | クリップクロウ合同会社";
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
        <li>Essential Workware 活用例</li>
      </ul>
    </div>
    <section className="product_title">
      <h1>Essential Workware 活用例</h1>
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

      <article id="usage01" className="usage_contents">
        <h2><span>01</span>野良チャットの置き換え</h2>
        <div className="usage_index">
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case01.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_guest.png" alt="ゲスト" /></div>
            </div>
            <p>グループでも1on1でも使えるチャット</p>
          </div>
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case04.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_staff.png" alt="スタッフ" /></div>
            </div>
            <p>業務の役に立つチャット以上の機能</p>
          </div>
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case05.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_guest.png" alt="ゲスト" /></div>
            </div>
            <p>ビジネス用途のツールとして万全のセキュリティを確保</p>
          </div>
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case06.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_guest.png" alt="ゲスト" /></div>
            </div>
            <p>フリーミアムと利用しやすい価格体系で合理的なコスト負担</p>
          </div>
        </div>
        <div className="productusage_detail">
          <p>自然発生的に用いられるようになったコンシューマ向けツールをIT統制の観点より組織公式なツールに置き換えなければならなくなったとき。野良チャット撲滅。</p>
            <h3>関係する機能や特長</h3>
            <div className="productusage_linkarea">
              <div className="productusage_btn"><a href="/technology/#technology02">打刻管理</a></div>
              <div className="productusage_btn"><a href="/technology/#technology03">属性の可視化</a></div>
              <div className="productusage_btn"><a href="/features/#features03">業務指示</a></div>
              <div className="productusage_btn"><a href="/features/#features04">タスクトラッキング</a></div>
              <div className="productusage_btn"><a href="/features/#features01">リソース可視化</a></div>
            </div>
        </div>
      </article>

      <article id="usage02" className="usage_contents">
        <h2><span>02</span>ちいさな業務のシステム化</h2>
        <div className="usage_index">
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case02.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_guest.png" alt="ゲスト" /></div>
            </div>
            <p>顧客や業務リソースなどをわかりやすくカードで表現</p>
          </div>
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case07.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_staff.png" alt="スタッフ" /></div>
            </div>
            <p>データベース基本機能としてカードの検索や更新が自在</p>
          </div>
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case07.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_staff.png" alt="スタッフ" /></div>
            </div>
            <p>よく使うカードはテンプレートとして再利用できる</p>
          </div>
        </div>
        <div className="productusage_detail">
          <p>紙やスプレッドシートの共有で行っているような雑多でちいさな業務を、ひとつひとつシステム化するとき。使いながら業務をシステムに乗せてDX実現。</p>
            <h3>関係する機能や特長</h3>
            <div className="productusage_linkarea">
              <div className="productusage_btn"><a href="/technology/#technology02">打刻管理</a></div>
              <div className="productusage_btn"><a href="/features/#features04">タスクトラッキング</a></div>
              <div className="productusage_btn"><a href="/features/#technology02">日報・伝票の自動化</a></div>
              <div className="productusage_btn"><a href="/technology/#technology07">BIツール連携</a></div>
            </div>
        </div>
      </article>

      <article id="usage03" className="usage_contents">
        <h2><span>03</span>組織内外を縦断するコミュニケーション</h2>
        <div className="usage_index">
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case03.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_admin.png" alt="管理者" /></div>
            </div>
            <p>コミュニケーションの一元化で、複数ツールを使い分ける面倒がなくなる</p>
          </div>
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case08.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_staff.png" alt="スタッフ" /></div>
            </div>
            <p>一人の顧客をチームで応対。顧客の家族との情報共有も同時に可能</p>
          </div>
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case09.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_staff.png" alt="スタッフ" /></div>
            </div>
            <p>緻密なコミュニケーション実現で顧客満足度を向上させる</p>
          </div>
        </div>
        <div className="productusage_detail">
          <p>情報の共有を組織内に止めることなく、ゲストユーザーとして顧客を取り込めることで、緻密なコミュニケーションを実現。組織横断かつ縦断。</p>
            <h3>関係する機能や特長</h3>
            <div className="productusage_linkarea">
              <div className="productusage_btn"><a href="/features/">キャリア指標</a></div>
              <div className="productusage_btn"><a href="/features/#features04">タスクのテンプレート化</a></div>
              <div className="productusage_btn"><a href="/features/#features03">サンクスカード</a></div>
            </div>
        </div>
      </article>

      <article id="usage03" className="usage_contents">
        <h2><span>04</span>既存システムのフロントウェア</h2>
        <div className="usage_index">
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case03.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_admin.png" alt="管理者" /></div>
            </div>
            <p>全員分のPCがなかったり、立って移動しながらの業務でもDX</p>
          </div>
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case08.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_staff.png" alt="スタッフ" /></div>
            </div>
            <p>業務の状態をリアルタイムに把握できるようになる</p>
          </div>
          <div className="usage_item">
            <div className="productcase_img">
              <img src="product_case09.png" alt="" />
              <div className="member_icon"><img src="/assets/images/common/mark_staff.png" alt="スタッフ" /></div>
            </div>
            <p>必要な指示をすぐに出し、タスク割り振りもスムーズに実行</p>
          </div>
        </div>
        <div className="productusage_detail">
          <p>電子カルテなど既存の業務システムにAPIを利用して連携させて、携帯性の高い情報入出力機能を追加する。フロントウェアとしての使い方。</p>
            <h3>関係する機能や特長</h3>
            <div className="productusage_linkarea">
              <div className="productusage_btn"><a href="/features/">キャリア指標</a></div>
              <div className="productusage_btn"><a href="/features/#features04">タスクのテンプレート化</a></div>
              <div className="productusage_btn"><a href="/features/#features03">サンクスカード</a></div>
            </div>
        </div>
      </article>
    </section>
    <DownloadButtons />
  </main>
);

export default () => (
  <>
    <div id="pagetop"><a href="#top">topへ</a></div>
    <footer>
      <h2><a href="/"><img src="/assets/images/common/logo_ClipCrow_w.svg" alt="クリップクロウ合同会社" /></a></h2>
      <p className="company_address">クリップクロウ合同会社</p>

      <div className="inner">
        <nav>
          <ul>
            <li><a href="/information/"><span>最新情報</span></a></li>
            <li><a href="/#business_outline"><span>事業概要</span></a></li>
            <li><a href="/#solution"><span>ご提案</span></a></li>
            <li><a href="/case-study/"><span>事例紹介</span></a></li>
            <li><a href="/#company_profile"><span>企業情報</span></a></li>
          </ul>
        </nav>
        <div className="product_menu">
          <ul>
            <li><a href="/product/"><span>Essential Workware</span></a></li>
            <li><a href="/usage-example/"><span>活用例</span></a></li>
            <li><a href="/features/"><span>製品機能</span></a></li>
            <li><a href="/technology/"><span>技術的特長</span></a></li>
            <li><a href="/api/"><span>API</span></a></li>
          </ul>
        </div>
        <div className="product_menu">
          <ul>
            <li><a href="/rules/"><span>利用規約</span></a></li>
            <li><a href="/privacy/"><span>プライバシーポリシー</span></a></li>
          </ul>
        </div>
      </div>
    </footer>
  </>
);

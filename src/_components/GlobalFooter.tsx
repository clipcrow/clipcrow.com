export default (props: { hideFooter: boolean }) => {
  if (props.hideFooter) {
    return (
      <div id="pagetop">
        <a href="#top">topへ</a>
      </div>
    );
  }

  return (
    <>
      <div id="pagetop">
        <a href="#top">ページのtopへ</a>
      </div>
      <footer>
        <h2>
          <a href="/">
            <img
              src="/assets/images/common/logo_ClipCrow_w.svg"
              alt="クリップクロウ"
            />
          </a>
        </h2>
        <div className="inner">
          <nav>
            <ul>
              <li>
                <a href="/information/">
                  <span>お知らせ</span>
                </a>
              </li>
              <li>
                <a href="/#business_outline">
                  <span>事業概要</span>
                </a>
              </li>
              <li>
                <a href="/#solution">
                  <span>ご提案</span>
                </a>
              </li>
              <li>
                <a href="/case-study/">
                  <span>事例紹介</span>
                </a>
              </li>
              <li>
                <a href="/#company_profile">
                  <span>企業情報</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="product_menu">
            <ul>
              <li>
                <a href="/product/">
                  <span>ClipCrow</span>
                </a>
              </li>
              <li>
                <a href="/product/usage-example/">
                  <span>解決する課題</span>
                </a>
              </li>
              <li>
                <a href="/product/features/">
                  <span>製品機能</span>
                </a>
              </li>
              <li>
                <a href="/product/technology/">
                  <span>技術的特長</span>
                </a>
              </li>

            </ul>
          </div>
          <div className="product_menu">
            <ul>
              <li>
                <a href="/product/rules/">
                  <span>利用規約</span>
                </a>
              </li>
              <li>
                <a href="/product/privacy/">
                  <span>プライバシーポリシー</span>
                </a>
              </li>
              <li>
                <a href="/product/sales/">
                  <span>特定商取引法に基づく表記</span>
                </a>
              </li>
              <li>
                <a href="/security/">
                  <span>情報セキュリティ方針</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default (props: { hideContact: boolean }) => (
  <>
    <header id="top">
      <h1><a href="/"><img src="/assets/images/common/logo_ClipCrow.svg" alt="ClipCrow" /></a></h1>
      <nav className="viewpc viewtb">
        <ul>
          <li><a href="/information/">お知らせ</a></li>
          <li><a href="/#business_outline">事業概要</a></li>
          <li><a href="/product/">Essential Workware</a></li>
        </ul>
        {props.hideContact ? null : <div className="btn_contact"><a href="/contact/">お問い合わせ</a></div>}
      </nav>
    </header>
    <div className="openbtn1 viewsp">
      <span></span>
      <span></span>
    </div>
    <nav id="g-nav" className="viewsp">
      <div id="g-nav-list">
        <div><a href="/information/">お知らせ</a></div>
        <div><a href="/#business_outline">事業概要</a></div>
        <div><a href="/product/">Essential Workware</a></div>
      </div>
      {props.hideContact ? null : <div className="btn_contact"><a href="/contact/">お問い合わせ</a></div>}
    </nav>
  </>
);

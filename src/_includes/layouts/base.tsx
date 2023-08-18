import type { PageData } from "lume/core.ts";

export default (data: PageData) => (
  <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/scss/styles.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <title>{data.title}</title>
    </head>
    <body>
      <header>
        <nav className="nav">
          <a className="nav__title">
            <img src="/images/nav_title.svg" alt="essential workware" />
          </a>
        </nav>
      </header>
      {data.children}
      <footer>
        <div className="footer">
          <div className="footer__left">
            <img src="/images/nav_title_footer.svg" alt="essential workware" />
          </div>
          <div className="footer__right">
            <div className="footer__link">
              <a href="/">ホーム</a>
              <a href="/usage-example">活用例</a>
              <a href="/features">特長・機能</a>
            </div>
            <div className="footer__link">
              <a href="/blog">ブログ</a>
              <a href="/contact">お問い合わせ</a>
              <a href="/profile">会社情報</a>
            </div>
          </div>
        </div>
      </footer>
    </body>
  </html>
);

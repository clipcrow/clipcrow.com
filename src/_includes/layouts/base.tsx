import GlobalFooter from "@/GlobalFooter.tsx";
import GlobalHeader from "@/GlobalHeader.tsx";
import GrobalScript from "@/GlobalScript.tsx";

export default (data: Lume.Data) => (
  <html lang="ja">
    <head>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <title>{data.title}</title>
      <meta name="Author" content="クリップクロウ合同会社" />
      <meta name="keywords" content="クリップクロウ合同会社" />
      <meta name="description" content="クリップクロウ合同会社" />
      <meta name="viewport" content="width=device-width,user-scalable=yes,maximum-scale=2" />
      <meta property="og:site_name" content="クリップクロウ合同会社" />
      <meta property="og:title" content="404 ページが見つかりません | クリップクロウ合同会社" />
      <meta property="og:image" content="https://" />
      <meta property="og:description" content="クリップクロウ合同会社" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:type" content="website" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      <link href="/assets/css/normalize.css" type="text/css" rel="stylesheet" />
      <link href="/assets/css/layout.css" type="text/css" rel="stylesheet" />
      <link href="/assets/css/layout_sp.css" type="text/css" rel="stylesheet" />
      <link href="/assets/css/layout_tb.css" type="text/css" rel="stylesheet" />
      <link href="/assets/css/animate.css" type="text/css" rel="stylesheet" />
    </head>
    <body className={data.bodyClass}>
      <div className="wrapper">
        <GlobalHeader />
        {data.children}
        <GlobalFooter />
      </div>
    <GrobalScript />
    </body>
  </html>
);

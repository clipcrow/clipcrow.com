import OGP from "@/OGP.tsx";
import GlobalFooter from "@/GlobalFooter.tsx";
import GlobalHeader from "@/GlobalHeader.tsx";
import GrobalScript from "@/GlobalScript.tsx";
import AdobeFont from "@/AdobeFont.tsx";

export default (data: Lume.Data) => (
  <html lang="ja">
    <head prefix="og: https://ogp.me/ns#">
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width,user-scalable=yes,maximum-scale=2" />
      <meta name="format-detection" content="telephone=no" />
      <OGP {...data} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      <link href="/assets/css/normalize.css" type="text/css" rel="stylesheet" />
      <link href="/assets/css/layout.css" type="text/css" rel="stylesheet" />
      <link href="/assets/css/layout_sp.css" type="text/css" rel="stylesheet" />
      <link href="/assets/css/layout_tb.css" type="text/css" rel="stylesheet" />
      <link href="/assets/css/animate.css" type="text/css" rel="stylesheet" />
      {data.script ? <script type="module" crossOrigin="anonymous" src={data.script}></script> : null }
      <AdobeFont show={data.url === "/product/"} />
    </head>
    <body className={data.bodyClass}>
      <div className="wrapper">
        <GlobalHeader hideContact={data.url === "/contact/"} />
        {data.children}
        <GlobalFooter hideFooter={data.url === "/product/api/"}/>
      </div>
    <GrobalScript />
    </body>
  </html>
);

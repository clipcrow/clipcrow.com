export default (props: { title?: string }) => (
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <meta property="og:image" content="/images/kv.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/styles/destyle.css" />
    <link rel="stylesheet" href="/styles/style.css" />
    <title>{props.title || "ClipCrow LLC"}</title>
  </head>
);

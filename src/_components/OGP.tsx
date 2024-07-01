export default (props: { title?: string, image?: string, description?: string }) => (
  <>
    <title>{props.title }</title>
    <meta name="Author" content="ClipCrow LLC." />
    <meta name="description" content={props.description?.replaceAll(/[\n\r]/g, "")} />
    <meta property="og:site_name" content="クリップクロウ合同会社" />
    <meta property="og:title" content={props.title} />
    <meta property="og:image" content={props.image || "/product/product_kv.png"} />
    <meta property="og:description" content={props.description?.replaceAll(/[\n\r]/g, "")} />
    <meta property="og:type" content="website" />
  </>
);

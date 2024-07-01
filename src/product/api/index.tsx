import DownloadButtons from "@/DownloadButtons.tsx";

export const title = "API | Essential Workware";
export const script = "/product/api/js/redoc.js";

export default () => (
  <main>
    <section id="product_top">
      <h1>Essential Workware</h1>
    </section>
    <div className="bread_crumb product_crumb">
      <ul>
        <li><a href="/">TOP</a></li>
        <li><a href="/product/">Essential Workware</a></li>
        <li>API</li>
      </ul>
    </div>
    <section className="product_title">
      <h1>Essential Workware<br className="viewsp" />のAPI一覧</h1>
    </section>
    <DownloadButtons />
    <div id="root"></div>
  </main>
);

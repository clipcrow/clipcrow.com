export const title = "API | クリップクロウ合同会社";
export const layout = "layouts/base.tsx";
export const script = "/api/js/redoc.js";

export default () => (
  <main>
    <section id="contents_top">
      <div className="inner">
        <h1><span className="txt_en">Workware API</span><span className="txt_j">API</span></h1>
        <div className="bread_crumb">
          <ul>
            <li><a href="/">TOP</a></li>
            <li>API</li>
          </ul>
        </div>
      </div>
    </section>
    <div id="root"></div>
  </main>
);

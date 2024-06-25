import AnimatedCloud from "@/AnimatedCloud.tsx";

import type { Event, EWData } from "@/Type.ts";

export const title = "クリップクロウ合同会社";
export const layout = "layouts/base.tsx";

function renderList(list: Event[]) {
  return list.map((row) => (
    <div className="info_item">
      <dt>{row.year}</dt>
      <dd>
        {row.text}
        {(row.link) ? (
          <div className="btn_detail btn_w">
            <a href={row.link}>もっと詳しく</a>
          </div>
        ) : null}
      </dd>
    </div>
  ));
}

export default (data: EWData) => (
  <main>
    <section id="contents_top">
      <div className="inner">
        <h1><span className="txt_en">Information</span><span className="txt_j">お知らせ 一覧</span></h1>
        <div className="bread_crumb">
          <ul>
            <li><a href="/">TOP</a></li>
            <li>お知らせ 一覧</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="main_contents">
      <AnimatedCloud id={5} />
      <div className="column_contents">
        <h2>お知らせ一覧</h2>
        <div className="information_index">
          <dl>
            {renderList(data.information)}
          </dl>
          <div className="page_nav">
            <div className="btn_page"><a href="#">1</a></div>
            <div className="btn_page"><a href="#">2</a></div>
            <div className="btn_page current"><a href="#">3</a></div>
            <div className="btn_page"><a href="#">4</a></div>
            <div className="btn_page"><a href="#">5</a></div>
            <div className="nav_dot">...</div>
            <div className="btn_page"><a href="#">99</a></div>
          </div>
        </div>    
      </div>
    </section>
  </main>
);

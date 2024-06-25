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
      <div className="img_am05">
        <svg xmlns="http://www.w3.org/2000/svg" width="573" height="502" viewBox="0 0 573 502" fill="none">
          <path fill="#AFBBBF" fill-opacity="0.2" />
          <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                  M515.512 124.21C469.849 107.502 409.088 132.657 372.118 92.5437C354.885 72.7228 344.814 46.8445 326.303 27.949C278.438 -21.0313 197.654 -0.453163 158.447 49.6881C100.495 130.873 119.627 200.28 31.1934 279.143C-13.427 317.944 -11.544 397.228 45.7026 422.769C77.4446 437.324 114.432 428.911 148.427 420.919C240.56 394.569 252.446 428.339 314.131 485.194C348.95 517.281 410.601 500.959 428.608 457.094C443.453 423.156 432.996 378.904 457.811 351.427C479.617 328.006 512.956 326.576 535.989 303.423C587.906 251.246 582.5 168.5 544.5 140.5L515.512 124.21Z;
                  M456 117.5C470 57.0003 447.5 16.8519 422 7.00007C384.337 -7.55094 325 -2.86589 290 57.0004C261.06 106.5 196 136.433 144.5 125.5C54.9998 106.5 35.5 125.5 8.99982 165.5C-12.5 226 8.25336 302.458 65.5 328C97.242 342.554 152.005 340.993 186 333C259.5 322 263.315 362.645 325 419.5C359.818 451.587 413.107 494.5 477 473.194C509.5 462.356 547.5 413.5 555 379.5C562.5 345.5 558 299.144 545.5 267.144C516.789 193.644 427 247.5 442.311 165.5L456 117.5Z;
                  M515.512 124.21C469.849 107.502 409.088 132.657 372.118 92.5437C354.885 72.7228 344.814 46.8445 326.303 27.949C278.438 -21.0313 197.654 -0.453163 158.447 49.6881C100.495 130.873 119.627 200.28 31.1934 279.143C-13.427 317.944 -11.544 397.228 45.7026 422.769C77.4446 437.324 114.432 428.911 148.427 420.919C240.56 394.569 252.446 428.339 314.131 485.194C348.95 517.281 410.601 500.959 428.608 457.094C443.453 423.156 432.996 378.904 457.811 351.427C479.617 328.006 512.956 326.576 535.989 303.423C587.906 251.246 582.5 168.5 544.5 140.5L515.512 124.21Z
                  ">
          </animate>
        </svg>
      </div>
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

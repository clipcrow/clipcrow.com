import type { Event } from "@/Type.ts";
import AnimatedCloud from "@/AnimatedCloud.tsx";

export const layout = "layouts/base.tsx";

const BreadCrumb = (props: { page: number }) => (
  <ul>
    <li><a href="/">TOP</a></li>
    {props.page === 1 ? 
      <li>最新情報</li> : 
      <>
        <li><a href="/information/">最新情報</a></li>
        <li>{props.page}</li>
      </>}
  </ul>
);

const EventList = (props: { list: Event[] }) => (
  props.list.map((row) => (
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
  ))
);

const PageNavigation = (props: {totalPages: number, page: number}) => {
  if (props.totalPages <= 1) {
    return null;
  }
  return (
    <div className="page_nav">
      {
        [...Array(props.totalPages)].map((_, n) => {
          const caption = n + 1;
          const current = caption === props.page ? " current" : "";
          const url = caption === 1 ? "/information/" : `/information/${caption}/`; 
          return <div className={`btn_page${current}`}><a href={url}>{caption}</a></div>;
        })
      }
    </div>
    //<div className="nav_dot">...</div>
  )
}

export default (data: Lume.PaginateResult<Event>) => (
  <main>
    <section id="contents_top">
      <div className="inner">
        <h1><span className="txt_en">Information</span><span className="txt_j">最新情報</span></h1>
        <div className="bread_crumb">
          <BreadCrumb page={data.pagination.page} />
        </div>
      </div>
    </section>
    <section className="main_contents">
      <AnimatedCloud id={5} />
      <div className="column_contents">
        <h2>クリップクロウと<br className="viewsp" />Essential Workware<br className="viewsp" />の最新情報</h2>
        <div className="information_index">
          <dl>
            <EventList list={data.results} />
          </dl>
          <PageNavigation {... data.pagination}/>
        </div>    
      </div>
    </section>
  </main>
);

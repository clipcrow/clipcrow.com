import DownloadButtons from "@/DownloadButtons.tsx";

export const title = "404 ページが見つかりません | クリップクロウ合同会社";

export default () => (
  <main>
    <section className="main_contents">
      <h2>お探しのページは<br className="viewsp" />見つかりませんでした。</h2>
      <article className="inner notfound_contents">
        <div className="notfound_txt">
          <p>Essential Workwareに関して、<br className="viewsp" />くわしくは<a href="/product/">こちら</a>をご覧ください。</p>
        </div>
        <div className="notfound_img">
          <img src="/assets/images/img_notfound.png" alt="404 Page not found" />
        </div>
      </article>
    </section>
    <DownloadButtons />
  </main>
);

export default () => (
  <section>
    <div className="download">
      <h4>アプリをダウンロード</h4>
      <div className="download__btn">
        <div className="download__btn-google">
          <a
            href="https://play.google.com/store/apps/details?id=com.clipcrow.ewware"
            target="_blank"
          >
            <img
              src="/images/google-play-badge_1.png"
              alt="google-play-store"
            />
          </a>
        </div>
        <div className="download__btn-appstore">
          <a
            href="https://apps.apple.com/us/app/essential-workware/id6446253088"
            target="_blank"
          >
            <img src="/images/app-store-badge_1.png" alt="app-store" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

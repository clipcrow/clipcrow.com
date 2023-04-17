export default () => (
  <>
    <footer>
      <div class="footer_title">
        <span>ClipCrow</span>Essential Workware
      </div>
      <div class="nav">
        <ul class="listgroup">
          <li class="navlist__item">
            <a class="" href="">ホーム</a>
          </li>
          <li class="navlist__item">
            <a class="" href="">活用例</a>
          </li>
          <li class="navlist__item">
            <a class="" href="{{ relref . }}">特長・機能</a>
          </li>
          <li class="navlist__item">
            <a class="" href="{{ .Site.BaseURL }}/news/">お知らせ</a>
          </li>
          <li class="navlist__item">
            <a class="" href="{{ relref .  }}">お問い合わせ</a>
          </li>
          <li class="navlist__item">
            <a class="" href="{{ relref .  }}">会社概要</a>
          </li>
        </ul>
      </div>
    </footer>
    <script
      defer
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
      crossOrigin="anonymous"
      referrerpolicy="no-referrer"
    >
    </script>
    <script type="text/javascript" defer src="{{ $js.Permalink }}"></script>
  </>
);

export default () => (
  <>
    <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      type="text/javascript"
    />
    <script src="/assets/js/common.js" type="text/javascript" />
    <script src="/assets/js/ScrollTrigger.js" type="text/javascript" />
    <script
      dangerouslySetInnerHTML={{
        __html: `if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
        document.addEventListener('DOMContentLoaded', function() { var trigger = new ScrollTrigger() });
      }`,
      }}
      type="text/javascript"
    />
  </>
);

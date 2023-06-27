(function () {
  /* フッタメニューの視覚効果 */
  $(".modebg").on("click", function () {
    console.log("nav click!");
    $("nav").toggleClass("is-drawerActive");
    if ($("#js-buttonHamburger").attr("aria-expanded") == "false") {
      $("#js-buttonHamburger").attr("aria-expanded", true);
    } else {
      $("#js-buttonHamburger").attr("aria-expanded", false);
    }
  });

  /* 画面スクロール時にフローティングするヘッダ効果 */
  $(window).on("load scroll resize", function () {
    const scroll = $(this).scrollTop();
    if (scroll > 120) {
      $("header").addClass("is-float");
    } else {
      $("header").removeClass("is-float");
    }
  });

  /* フローティングヘッダ分だけスクロールダウンさせてアンカー位置を適切にする */
  $(window).on("load", function () {
    const url = $(location).attr("href"),
      headerHeight = $("header").outerHeight() + 0;
    if (url.indexOf("#") != -1) {
      const anchor = url.split("#"),
        target = $("#" + anchor[anchor.length - 1]),
        position = Math.floor(target.offset().top) - headerHeight;
      $("html, body").animate({ scrollTop: position }, 250);
    }
  });
})();

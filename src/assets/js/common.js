/* ===========================================
common.js
=========================================== */
(function($){
"use strict";

/* smoothScroll
------------------------------------- */
//scroll speed

var speed = 500;

//pagetop btn
$('a[href="#top"]').on('click',function(){
	$('body,html').animate({scrollTop:'0'}, speed, 'swing');
	return false;
});
	
	
///gloval menu
	
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
    $(".openbtn1").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});


//other link
	
$('a[href^="#"]:not([href="#top"])').on('click',function(){
	var href= $(this).attr('href');
	var target = $(href === '#' || href === '' ? 'html' : href);
	var position = target.offset().top;
	$('body,html').animate({scrollTop:position}, speed, 'swing');
	return false;
});

/* fade appear pagetop btn
------------------------------------- */
if($('#pagetop').length){
	//setting
	var pagetop = $('#pagetop');
	
	//fadeIn / fadeOut
	$(window).scroll(function(){
		if($(this).scrollTop() > 300){
			pagetop.fadeIn('fast');
		}else{
			pagetop.fadeOut('fast');
		}
	});
}
	
//pcとspで画像切り分け
$(function() {
    var $setElem = $('.switch'),
        pcName = '_pc',
        spName = '_sp',
        replaceWidth = 639;
    $setElem.each(function() {
        var $this = $(this);

        function imgSize() {
            if (window.innerWidth > replaceWidth) {
                $this.attr('src', $this.attr('src').replace(spName, pcName));
            } else {
                $this.attr('src', $this.attr('src').replace(pcName, spName));
            }
        }
        $(window).resize(function() { imgSize(); });
        imgSize();
    });
});


})(jQuery);

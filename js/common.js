
function heightDetect(){
    $('.section').css('height', $(window).height());
  };
  heightDetect();
  $(window).resize(function(){
    heightDetect();
});

$(document).ready(function(){
	// $('#menu-open').click(function(){
	// 	$('body').toggleClass('in')
	// });

	$("body").niceScroll({
    cursorcolor:"rgba(0, 151, 214, .5)",
    cursorminheight: 10,
    cursorwidth: 4,
    touchbehavior: false,
    bouncescroll: false,
    // horizrailenabled: true,
    scrollspeed: 100,
    mousescrollstep: 50,
    railpadding: {
      right: 3
    },
    cursorborder: "0px"
  });

    // ==scroll navbar
    // arrowTop();
    // function arrowTop() {
    // 	var offset = 20;
    // 	$back_to_top = $('.top-nav-line');
    //     $(window).scroll(function(){
    //       ($(this).scrollTop() > offset) ? $back_to_top.addClass('fixed') : $back_to_top.removeClass('fixed');
    //     });
    // }
});
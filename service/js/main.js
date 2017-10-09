// "use script";
function heightDetect(){
    $('.js-height-section').css('height', $(window).height());
};
heightDetect();
$(window).resize(function(){
    heightDetect();
});

$('.js-equal ').equalHeightResponsive();

$(".owl-carousel").owlCarousel({
	margin: 10,
	items: 3,
	
	responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },            
        960:{
            items:2
        },
    }
});




$("input[name='phone']").inputmask({
	"mask": "+7(999) 999-9999",                                                                                                                                                                                    
	showMaskOnHover: false,
});


// $('.header__burger').click(function(e) {
// 	event.preventDefault();
// 	$('body').toggleClass('active');
// 	$(this).toggleClass('active');
// 	$('.header__nav').toggleClass('active')
// })

$(document).ready(function(){
  	$(".accordion__head").on("click", function(){
    	if($(this).hasClass('active')){
      		$(this).removeClass("active");
      		$(this).siblings('.accordion__content').slideUp(200);
      		// $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    	}else{
      		// $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    		// $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    		$(".accordion__head").removeClass("active");
   		 	$(this).addClass("active");
    		$('.accordion__content').slideUp(200);
    		$(this).siblings('.accordion__content').slideDown(200);
    	}
    
  	});

  	$('.js-popup-callback-header').on('click', function(event){
		event.preventDefault();
		$('#callback-header').addClass('is-visible');
		$('body').css('overflow', 'hidden');
	});
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
			$('body').css('overflow', 'auto');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
		if(event.which=='27'){
			$('.cd-popup').removeClass('is-visible');
	    }
	});


    

});

// $(function () {
//     $('.js-header__link').on('click', function(event) {
//         e.preventDefault();
//         $('html, body').animate({
//             scrollTop: $($(this).attr('href')).offset().top
//         }, 1000, 'linear');
//     })
// });


$('.js-header__link').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
    });
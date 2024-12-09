$(function() {
	
	$('.accordion-name').click(function (e) {
	
		e.preventDefault();
	
		$(".accordion-body").not($(this).next()).slideUp(400);
	
		$(this).next().slideToggle(400);
	
		$(".accordion-item").not($(this).closest(".accordion-item")).removeClass("active");
	
		$(this).closest(".accordion-item").toggleClass("active");
	
	});

	$('.js-ban').each(function() {

		$(this).length;
		var banImg = $(this).find('img').attr('src');

		$(this).attr('style', 'background-image: url(./'+ banImg +')');

	});

	var header = $('.header');
    var hederHeight = header.outerHeight(); 

    $(window).scroll(function() {
        if($(this).scrollTop() > hederHeight) {
            header.addClass('fix');
        } else {
            header.removeClass('fix');
        }
    });

	$('.js-production_slider').slick({
		slidesToShow: 1,
		dots: false,
		rows: false,
		// arrows: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg width="18" height="54" viewBox="0 0 18 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4609 54L0.000940765 27.12L17.4609 0.23L17.4609 54Z" fill="url(#paint0_linear_3891_1045)"/><defs><linearGradient id="paint0_linear_3891_1045" x1="7.61803" y1="-34.238" x2="-18.8663" y2="-24.9856" gradientUnits="userSpaceOnUse"><stop stop-color="#7390A1"/><stop offset="0.87" stop-color="#445561"/></linearGradient></defs></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg width="18" height="54" viewBox="0 0 18 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L17.46 26.88L0 53.77V0Z" fill="url(#paint0_linear_3891_1044)"/><defs><linearGradient id="paint0_linear_3891_1044" x1="9.84291" y1="88.238" x2="36.3273" y2="78.9856" gradientUnits="userSpaceOnUse"><stop stop-color="#7390A1"/><stop offset="0.87" stop-color="#445561"/></linearGradient></defs></svg></span></a>',
		asNavFor: '.js-production_slide',

	})

	$('.js-production_slide').slick({
		slidesToShow: 4,
		dots: false,
		rows: false,
		// arrows: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg width="18" height="54" viewBox="0 0 18 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4609 54L0.000940765 27.12L17.4609 0.23L17.4609 54Z" fill="url(#paint0_linear_3891_1045)"/><defs><linearGradient id="paint0_linear_3891_1045" x1="7.61803" y1="-34.238" x2="-18.8663" y2="-24.9856" gradientUnits="userSpaceOnUse"><stop stop-color="#7390A1"/><stop offset="0.87" stop-color="#445561"/></linearGradient></defs></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg width="18" height="54" viewBox="0 0 18 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L17.46 26.88L0 53.77V0Z" fill="url(#paint0_linear_3891_1044)"/><defs><linearGradient id="paint0_linear_3891_1044" x1="9.84291" y1="88.238" x2="36.3273" y2="78.9856" gradientUnits="userSpaceOnUse"><stop stop-color="#7390A1"/><stop offset="0.87" stop-color="#445561"/></linearGradient></defs></svg></span></a>',
		asNavFor: '.js-production_slider',
		slidesToScroll: 1,
		focusOnSelect: true,
	})


});

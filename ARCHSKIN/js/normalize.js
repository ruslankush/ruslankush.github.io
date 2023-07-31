$(function() {

	$('.js-burger').click(function(e) {
		e.preventDefault();
		$('body, .header').addClass('active');
	});

	$('.js-main-collection_slide').slick({
		slidesToShow: 1,
		arrows: false,
		dots: false,
		rows: false,
		infinite: false,
		fade: true,
	});

	var rev = $('.js-main-collection_slider');
	rev.on('init', function(event, slick, currentSlide) {
  		var
    		cur = $(slick.$slides[slick.currentSlide]),
    		next = cur.next(),
    		next2 = cur.next().next(),
    		prev = cur.prev(),
    		prev2 = cur.prev().prev();
  		prev.addClass('slick-sprev');
  		next.addClass('slick-snext');  
  		prev2.addClass('slick-sprev2');
  		next2.addClass('slick-snext2');  
  		cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
  		slick.$prev = prev;
  		slick.$next = next;
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  		var
    		cur = $(slick.$slides[nextSlide]);
  		// console.log(slick.$prev, slick.$next);
  		slick.$prev.removeClass('slick-sprev');
		slick.$next.removeClass('slick-snext');
		slick.$prev.prev().removeClass('slick-sprev2');
		slick.$next.next().removeClass('slick-snext2');
		next = cur.next(),  
		prev = cur.prev();
		prev.addClass('slick-sprev');
		next.addClass('slick-snext');
		prev.prev().addClass('slick-sprev2');
		next.next().addClass('slick-snext2');
		slick.$prev = prev;
		slick.$next = next;
		cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
	});
	$('.js-main-collection_slider').slick({
		slidesToShow: 1,
		rows: false,
		dots: false, 
		// arrows: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow__prev"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z"/></g></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow__next"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"/></g></svg></span></a>',
		appendArrows: ".main-collection_arr",
		infinite: false,
		centerPadding: '2.25rem',
		swipe: true,
		centerMode: true,
		focusOnSelect: true,
		slidesPerRow: 1,
		customPaging: function(slider, i) {
			return '';
		},

		asNavFor: '.js-main-collection_slide',

		responsive: [

			{
				breakpoint: 1600,
				settings: {
					centerPadding: '0.9375rem',
				}
			},

			{
				breakpoint: 768, 
				settings: {
					centerPadding: '0.9375rem',
					dots: true,
				}
			}

		]
	});

	$(".arrow__next").on('click', function(e){
		e.preventDefault();
		$('.js-main-collection_slider').slick("slickNext");
		$('a[data-slide]').each(function(ev) {

			$(this).length

			$(this).parent().addClass('active')
					.siblings()
					.removeClass('active');

		});
	});
	$(".arrow__prev").on('click', function(e){
		e.preventDefault();
		$('.js-main-collection_slider').slick("slickPrev");

		$('a[data-slide]').each(function(ev) {

			$(this).length

			$(this).parent().removeClass('active')
					.siblings()
					.addClass('active');
		});
	});

	$('a[data-slide]').each(function() {

		$(this).length

		$(this).mouseover( function(e) {

			e.preventDefault();
			$(this).parent().addClass('active')
					.siblings()
					.removeClass('active');
			var slideno = $(this).data('slide');
			rev.slick('slickGoTo', slideno - 1);

		});

	});

	$('.js-ban').each(function() {

		$(this).length;
		var banImg = $(this).find('img').attr('src');

		$(this).attr('style', 'background-image: url(../'+ banImg +')');

	});

	$('.js-main-prj_slider').slick({
		slidesToShow:1,
		rows: false,
		dots: false, 
		// arrows: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow__prev"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z"/></g></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow__next"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"/></g></svg></span></a>',
		appendArrows: ".main-prj_arr",
		infinite: false,
	});

	$('.js-main-selection_slider').slick({
		slidesToShow: 2,
		rows: false,
		dots: false, 
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow__prev"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z"/></g></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow__next"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"/></g></svg></span></a>',
		appendArrows: ".main-selection_arr",
		infinite: false,
		centerPadding: '60px',
		swipe: true,
		focusOnSelect: true,

		responsive: [

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1.4,
					arrows: false,
					dots: true,
				}
			},

			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false, 
					dots: true,
				}
			}

		]

	});

	$('.js-modal').on('click', function(e) {

		e.preventDefault();

		$('.modal').addClass('active');

	});

	$('.modal-overflow, .modal-close').on('click', function(e) {

		e.preventDefault();

		$('.modal').removeClass('active');

	});

	$('.js-main-box_slider').slick({
		slidesToShow:1,
		rows: false,
		dots: false, 
		// arrows: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow__prev"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z"/></g></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow__next"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"/></g></svg></span></a>',
		appendArrows: ".main-box_arr",
		infinite: false,

		responsive: [

			{
				breakpoint: 860, 
				settings: {
					arrows: false,
					dots: true,
				}
			}

		]

	});

	$('.js-main-galery_slider').slick({
		slidesToShow:1,
		rows: false,
		dots: false, 
		// arrows: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow__prev"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z"/></g></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow__next"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"/></g></svg></span></a>',
		appendArrows: ".main-galery_arr",
		infinite: false,
		swipe: true,
		focusOnSelect: true,

		responsive: [

			{
				breakpoint: 860,
				settings: {
					arrows: false,
					dots: true,
				}
			}

		]

	});
	
	$('.js-used').blur(function() {
        var $this = $(this);
       if ($this.val())
           $this.addClass('used');
       else
       $this.removeClass('used');
   	});

	if($(window).width() > 1200) {

		var header = $('.header');
		var hederHeight = header.outerHeight(); 

		$(window).scroll(function() {
			if($(this).scrollTop() ) {
				header.css({
					transform: 'translateY(-'+ hederHeight +'px)'
				});
			} else {
				header.css({
					transform: 'translateY(0)'
				});
			}
		});

	}

	$('.header-burger').on('click', function(e) {

		e.preventDefault();

		$('.m-menu').addClass('active');

	});

	$('.m-menu-close, .m-menu-overflow').on('click', function(e) {

		e.preventDefault();

		$('.m-menu').removeClass('active');
		
	});

	$('.accordion-name').on('click', function(e) {

		e.preventDefault();

		$(this).parent().toggleClass('active').siblings().removeClass('active');

	});

	$('.js-filter').on('click', function(e) {

		e.preventDefault();

		$('.left').addClass('active')

	});

	$('.left-overflow, .js-back').on('click', function(e) {

		e.preventDefault();

		$('.left').removeClass('active');

	});


	$('.lev > a').each(function() {

		$(this).length;

		$(this).hover(function() {

			var lnk = $(this);

			$(this).parent().addClass('hover').siblings().removeClass('hover');

			$('.nav-catalog_box.nav').addClass('hover');

			$('.nav-catalog_pre').addClass('hover');

			$('.nav-catalog_img').addClass('hover');

			$('.nav-catalog_box.nav').html(lnk.next('ul').clone());


		})


	});

	$('.nav-catalog_overflow').on('click', function() {

		$('.nav-catalog_box.nav').removeClass('hover');

		$('.nav-catalog_pre').removeClass('hover');

		$('.nav-catalog_img').removeClass('hover');

		$('.nav-catalog').removeClass('active');

	})


	$('.js-catalog').on('click', function(e) {

		e.preventDefault();

		$('.nav-catalog').addClass('active');

	})


	$('.popup-overflow, .popup-close').on('click', function(e) {

		e.preventDefault();

		$('.popup').removeClass('active')

	});
	
	$('.js-popup').on('click', function(e) {

		e.preventDefault();

		$('.popup').addClass('active')

	});

	$('.js-video').on('click', function(e) {

		e.preventDefault();

		$('.modal-video').addClass('active')

	});

	$('.modal-video_close').on('click', function(e) {

		e.preventDefault();

		$('.modal-video').removeClass('active')

	});

});

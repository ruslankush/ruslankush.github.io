$(function() {
	
	$('.accordion-name').click(function (e) {
	
		e.preventDefault();
	
		$(".accordion-body").not($(this).next()).slideUp(400);
	
		$(this).next().slideToggle(400);
	
		$(".accordion-item").not($(this).closest(".accordion-item")).removeClass("active");
	
		$(this).closest(".accordion-item").toggleClass("active");
	
	});

	var incrementPlus;
    var incrementMinus;

    var buttonPlus  = $(".amount_plus");
    var buttonMinus = $(".amount_minus");

    var incrementPlus = buttonPlus.click(function() {
        var $n = $(this)
            .parent(".amount")
            .find("input");
        $n.val(Number($n.val())+1 );
    });

    var incrementMinus = buttonMinus.click(function() {
            var $n = $(this)
            .parent(".amount")
            .find("input");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount-1);
        }
    });

	$('.js-tab').each(function() {

		$(this).lenght;

		var tId = $(this).data('tab');
		var dVal = $(this).data('val');

		$(this).on('click', function(e) {

			e.preventDefault();

			$(this).parent().addClass('active').siblings().removeClass('active');

			$('.js-tab_wrap').find('#' + tId).addClass('active').siblings().removeClass('active')

			$('.js-ttl').text(dVal);

		})

	});

	$('.header-menu').on('click', function(e) {

		e.preventDefault();

		$('.header').toggleClass('active');

	});

	$('.js-main-container_slider').slick({
		slidesToShow: 1,
		rows: false,
		dots: true,
		infinite: false,
		// arrows: false,
		prevArrow: '<a href="javascript: void(0)" class="arrow arrow-prev"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.44415 0.287447C7.02205 -0.0955095 6.33759 -0.0955095 5.91549 0.287447L0.632456 5.08514C-0.21111 5.85125 -0.210775 7.0926 0.633201 7.85831L5.91938 12.6542C6.34149 13.0372 7.02594 13.0372 7.44804 12.6542C7.87026 12.2712 7.87026 11.6503 7.44804 11.2673L2.92366 7.16252C2.50155 6.77947 2.50155 6.1586 2.92366 5.77564L7.44415 1.67433C7.86626 1.29137 7.86626 0.670403 7.44415 0.287447Z"/></svg></a>',
		nextArrow: '<a href="javascript: void(0)" class="arrow arrow-next"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.320496 0.287447C0.742603 -0.0955095 1.42705 -0.0955095 1.84916 0.287447L7.13219 5.08514C7.97576 5.85125 7.97542 7.0926 7.13145 7.85831L1.84527 12.6542C1.42316 13.0372 0.738712 13.0372 0.316605 12.6542C-0.10561 12.2712 -0.10561 11.6503 0.316605 11.2673L4.84099 7.16252C5.2631 6.77947 5.2631 6.1586 4.84099 5.77564L0.320496 1.67433C-0.101611 1.29137 -0.101611 0.670403 0.320496 0.287447Z"/></svg></a>',
	});

	$('.js-buffet_slider').slick({
		slidesToShow: 1,
		rows: false,
		dots: true,
		infinite: false,
		prevArrow: '<a href="javascript: void(0)" class="arrow arrow-prev"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.44415 0.287447C7.02205 -0.0955095 6.33759 -0.0955095 5.91549 0.287447L0.632456 5.08514C-0.21111 5.85125 -0.210775 7.0926 0.633201 7.85831L5.91938 12.6542C6.34149 13.0372 7.02594 13.0372 7.44804 12.6542C7.87026 12.2712 7.87026 11.6503 7.44804 11.2673L2.92366 7.16252C2.50155 6.77947 2.50155 6.1586 2.92366 5.77564L7.44415 1.67433C7.86626 1.29137 7.86626 0.670403 7.44415 0.287447Z"/></svg></a>',
		nextArrow: '<a href="javascript: void(0)" class="arrow arrow-next"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.320496 0.287447C0.742603 -0.0955095 1.42705 -0.0955095 1.84916 0.287447L7.13219 5.08514C7.97576 5.85125 7.97542 7.0926 7.13145 7.85831L1.84527 12.6542C1.42316 13.0372 0.738712 13.0372 0.316605 12.6542C-0.10561 12.2712 -0.10561 11.6503 0.316605 11.2673L4.84099 7.16252C5.2631 6.77947 5.2631 6.1586 4.84099 5.77564L0.320496 1.67433C-0.101611 1.29137 -0.101611 0.670403 0.320496 0.287447Z"/></svg></a>',
		asNavFor: '.js-buffet_slide',
		fade: true,
		slidesToScroll: 1,
	});

	$('.js-buffet_slide').slick({
		slidesToShow: 3,
		rows: false,
		dots: true,
		infinite: false,
		arrows: false,
		slidesToScroll: 1,
		asNavFor: '.js-buffet_slider',
		focusOnSelect: true,
	});

	$('.js-ban').each(function() {

		$(this).length;

		var banImg = $(this).find('img').attr('src');

		$(this).attr('style', 'background-image: url(./'+ banImg +')');

	});

});



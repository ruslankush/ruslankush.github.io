$(function() {
	
	$('.accordion-name').click(function (e) {
	
		e.preventDefault();
	
		$(".accordion-body").not($(this).next()).slideUp(400);
	
		$(this).next().slideToggle(400);
	
		$(".accordion-item").not($(this).closest(".accordion-item")).removeClass("active");
	
		$(this).closest(".accordion-item").toggleClass("active");
	
	});

	$(".js-stand_slider").slick({
		rows: false,
		dots: false,
		// arrows: false,
		slidesToShow: 1,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.984 6.64303C9.984 8.36857 9.984 10.0941 9.984 11.8157C9.984 11.9569 10.025 12.1138 9.9758 12.2353C9.87339 12.4942 9.78734 12.8432 9.57842 12.9569C9.39816 13.0589 8.9967 12.9648 8.78777 12.8314C6.59198 11.4079 4.41257 9.95685 2.22906 8.51367C1.63505 8.12151 1.03696 7.73718 0.451141 7.33717C-0.151063 6.92932 -0.15106 6.42343 0.455242 6.01558C3.22866 4.14886 6.00206 2.28214 8.78777 0.438956C8.9967 0.301698 9.39817 0.215422 9.57842 0.317386C9.78734 0.435036 9.9594 0.787995 9.9635 1.03898C9.99627 2.90962 9.984 4.77632 9.984 6.64303Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.015997 6.35697C0.015997 4.63143 0.015997 2.9059 0.015997 1.18429C0.015997 1.04311 -0.0249613 0.88624 0.0241982 0.764669C0.126614 0.505839 0.212656 0.1568 0.421584 0.0430716C0.601836 -0.0588917 1.0033 0.0352312 1.21223 0.168568C3.40802 1.59213 5.58743 3.04315 7.77094 4.48633C8.36495 4.87849 8.96304 5.26281 9.54886 5.66282C10.1511 6.07068 10.1511 6.57657 9.54476 6.98442C6.77134 8.85114 3.99794 10.7179 1.21223 12.561C1.0033 12.6983 0.601836 12.7846 0.421584 12.6826C0.212656 12.565 0.0405968 12.212 0.0365001 11.961C0.0037271 10.0904 0.015997 8.22368 0.015997 6.35697Z"/></svg></span></a>',
	
		responsive: [

			{
				breakpoint: 1100,
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

	   $('.js-file input').on('change', function(){

		var v = $(this).val();
		var Ink = $('.js-file label');
		if(v!='') Ink.text(v.substring(v.lastIndexOf('\\')+1,v.length)); 

	});

	// $('.js-press-centr_slider').slick({
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	rows: false,
	// 	dots: false,
	// 	// arrows: false,
	// 	variableWidth: true,
	// 	nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.015997 6.35697C0.015997 4.63143 0.015997 2.9059 0.015997 1.18429C0.015997 1.04311 -0.0249613 0.88624 0.0241982 0.764669C0.126614 0.505839 0.212656 0.1568 0.421584 0.0430716C0.601836 -0.0588917 1.0033 0.0352312 1.21223 0.168568C3.40802 1.59213 5.58743 3.04315 7.77094 4.48633C8.36495 4.87849 8.96304 5.26281 9.54886 5.66282C10.1511 6.07068 10.1511 6.57657 9.54476 6.98442C6.77134 8.85114 3.99794 10.7179 1.21223 12.561C1.0033 12.6983 0.601836 12.7846 0.421584 12.6826C0.212656 12.565 0.0405968 12.212 0.0365001 11.961C0.0037271 10.0904 0.015997 8.22368 0.015997 6.35697Z"/></svg></span></a>',
	// });

	$('.js-press-centr_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: false,
		dots: false,
		arrows: false,
		fade: true,
	});

	$('.js-press-centr_slide').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		rows: false,
		dots: false,
		// arrows: false,
		nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.015997 6.35697C0.015997 4.63143 0.015997 2.9059 0.015997 1.18429C0.015997 1.04311 -0.0249613 0.88624 0.0241982 0.764669C0.126614 0.505839 0.212656 0.1568 0.421584 0.0430716C0.601836 -0.0588917 1.0033 0.0352312 1.21223 0.168568C3.40802 1.59213 5.58743 3.04315 7.77094 4.48633C8.36495 4.87849 8.96304 5.26281 9.54886 5.66282C10.1511 6.07068 10.1511 6.57657 9.54476 6.98442C6.77134 8.85114 3.99794 10.7179 1.21223 12.561C1.0033 12.6983 0.601836 12.7846 0.421584 12.6826C0.212656 12.565 0.0405968 12.212 0.0365001 11.961C0.0037271 10.0904 0.015997 8.22368 0.015997 6.35697Z"/></svg></span></a>',
		asNavFor: '.js-press-centr_slider',
		// centerMode: false,
		// variableWidth: true,

		responsive: [

			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
					arrows: false,
					dots: true,
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					arrows: false,
					dots: true,
				}
			},

			{
				breakpoint: 680,
				settings: {
					slidesToShow: 2.3,
					arrows: false,
					dots: true,
					infinite: false,
				}
			},

			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true,
					infinite: false,
				}
			},

			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1.3,
					arrows: false,
					dots: true,
					infinite: false,
				}
			},

			{
				breakpoint: 393,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
					infinite: false,
				}
			},

		]

	});

	$('.js-ban').each(function() {

		$(this).length;
		var banImg = $(this).find('img').attr('src');

		$(this).attr('style', 'background-image: url(../'+ banImg +')');

	});

	$('.form-select').on('click','.placeholder',function(){
		var parent = $(this).closest('.form-select');
		if ( ! parent.hasClass('is-open')){
		  parent.addClass('is-open');
		  $('.form-select.is-open').not(parent).removeClass('is-open');
		//   $('.page-overflow').addClass('is-active');
		}else{
		  parent.removeClass('is-open');
		//   $('.page-overflow').removeClass('is-active');
		}
	}).on('click','ul>li',function(){
		var parent = $(this).closest('.form-select');
		parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
		// $('.page-overflow').removeClass('is-active');
	});

	$('.js-card-banner_slider').slick({
		slidesToShow: 1,
		rows: false,
		// arrows: false,
		dots: false,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.984 6.64303C9.984 8.36857 9.984 10.0941 9.984 11.8157C9.984 11.9569 10.025 12.1138 9.9758 12.2353C9.87339 12.4942 9.78734 12.8432 9.57842 12.9569C9.39816 13.0589 8.9967 12.9648 8.78777 12.8314C6.59198 11.4079 4.41257 9.95685 2.22906 8.51367C1.63505 8.12151 1.03696 7.73718 0.451141 7.33717C-0.151063 6.92932 -0.15106 6.42343 0.455242 6.01558C3.22866 4.14886 6.00206 2.28214 8.78777 0.438956C8.9967 0.301698 9.39817 0.215422 9.57842 0.317386C9.78734 0.435036 9.9594 0.787995 9.9635 1.03898C9.99627 2.90962 9.984 4.77632 9.984 6.64303Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.015997 6.35697C0.015997 4.63143 0.015997 2.9059 0.015997 1.18429C0.015997 1.04311 -0.0249613 0.88624 0.0241982 0.764669C0.126614 0.505839 0.212656 0.1568 0.421584 0.0430716C0.601836 -0.0588917 1.0033 0.0352312 1.21223 0.168568C3.40802 1.59213 5.58743 3.04315 7.77094 4.48633C8.36495 4.87849 8.96304 5.26281 9.54886 5.66282C10.1511 6.07068 10.1511 6.57657 9.54476 6.98442C6.77134 8.85114 3.99794 10.7179 1.21223 12.561C1.0033 12.6983 0.601836 12.7846 0.421584 12.6826C0.212656 12.565 0.0405968 12.212 0.0365001 11.961C0.0037271 10.0904 0.015997 8.22368 0.015997 6.35697Z"/></svg></span></a>',
	});

	$('.js-card-banner_slide').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false, 
		rows: false,
		dots: false,
		verticalSwiping: true,
		vertical: true,
	});

	$('.js-left-box-video_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		// arrows: false,
		rows: false,
		dots: false,
		infinite: false,
		appendArrows: ".js-left-box-video_arr",
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.984 6.64303C9.984 8.36857 9.984 10.0941 9.984 11.8157C9.984 11.9569 10.025 12.1138 9.9758 12.2353C9.87339 12.4942 9.78734 12.8432 9.57842 12.9569C9.39816 13.0589 8.9967 12.9648 8.78777 12.8314C6.59198 11.4079 4.41257 9.95685 2.22906 8.51367C1.63505 8.12151 1.03696 7.73718 0.451141 7.33717C-0.151063 6.92932 -0.15106 6.42343 0.455242 6.01558C3.22866 4.14886 6.00206 2.28214 8.78777 0.438956C8.9967 0.301698 9.39817 0.215422 9.57842 0.317386C9.78734 0.435036 9.9594 0.787995 9.9635 1.03898C9.99627 2.90962 9.984 4.77632 9.984 6.64303Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.015997 6.35697C0.015997 4.63143 0.015997 2.9059 0.015997 1.18429C0.015997 1.04311 -0.0249613 0.88624 0.0241982 0.764669C0.126614 0.505839 0.212656 0.1568 0.421584 0.0430716C0.601836 -0.0588917 1.0033 0.0352312 1.21223 0.168568C3.40802 1.59213 5.58743 3.04315 7.77094 4.48633C8.36495 4.87849 8.96304 5.26281 9.54886 5.66282C10.1511 6.07068 10.1511 6.57657 9.54476 6.98442C6.77134 8.85114 3.99794 10.7179 1.21223 12.561C1.0033 12.6983 0.601836 12.7846 0.421584 12.6826C0.212656 12.565 0.0405968 12.212 0.0365001 11.961C0.0037271 10.0904 0.015997 8.22368 0.015997 6.35697Z"/></svg></span></a>',
	});

	$('.js-left-box-rev_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// arrows: false,
		rows: false,
		dots: false,
		infinite: false,
		appendArrows: ".js-left-box-rev_arr",
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.984 6.64303C9.984 8.36857 9.984 10.0941 9.984 11.8157C9.984 11.9569 10.025 12.1138 9.9758 12.2353C9.87339 12.4942 9.78734 12.8432 9.57842 12.9569C9.39816 13.0589 8.9967 12.9648 8.78777 12.8314C6.59198 11.4079 4.41257 9.95685 2.22906 8.51367C1.63505 8.12151 1.03696 7.73718 0.451141 7.33717C-0.151063 6.92932 -0.15106 6.42343 0.455242 6.01558C3.22866 4.14886 6.00206 2.28214 8.78777 0.438956C8.9967 0.301698 9.39817 0.215422 9.57842 0.317386C9.78734 0.435036 9.9594 0.787995 9.9635 1.03898C9.99627 2.90962 9.984 4.77632 9.984 6.64303Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.015997 6.35697C0.015997 4.63143 0.015997 2.9059 0.015997 1.18429C0.015997 1.04311 -0.0249613 0.88624 0.0241982 0.764669C0.126614 0.505839 0.212656 0.1568 0.421584 0.0430716C0.601836 -0.0588917 1.0033 0.0352312 1.21223 0.168568C3.40802 1.59213 5.58743 3.04315 7.77094 4.48633C8.36495 4.87849 8.96304 5.26281 9.54886 5.66282C10.1511 6.07068 10.1511 6.57657 9.54476 6.98442C6.77134 8.85114 3.99794 10.7179 1.21223 12.561C1.0033 12.6983 0.601836 12.7846 0.421584 12.6826C0.212656 12.565 0.0405968 12.212 0.0365001 11.961C0.0037271 10.0904 0.015997 8.22368 0.015997 6.35697Z"/></svg></span></a>',
	});

	$('.js-similar_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		// arrows: false,
		rows: false,
		dots: false,
		infinite: false,
		appendArrows: ".js-similar_arr",
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.984 6.64303C9.984 8.36857 9.984 10.0941 9.984 11.8157C9.984 11.9569 10.025 12.1138 9.9758 12.2353C9.87339 12.4942 9.78734 12.8432 9.57842 12.9569C9.39816 13.0589 8.9967 12.9648 8.78777 12.8314C6.59198 11.4079 4.41257 9.95685 2.22906 8.51367C1.63505 8.12151 1.03696 7.73718 0.451141 7.33717C-0.151063 6.92932 -0.15106 6.42343 0.455242 6.01558C3.22866 4.14886 6.00206 2.28214 8.78777 0.438956C8.9967 0.301698 9.39817 0.215422 9.57842 0.317386C9.78734 0.435036 9.9594 0.787995 9.9635 1.03898C9.99627 2.90962 9.984 4.77632 9.984 6.64303Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.015997 6.35697C0.015997 4.63143 0.015997 2.9059 0.015997 1.18429C0.015997 1.04311 -0.0249613 0.88624 0.0241982 0.764669C0.126614 0.505839 0.212656 0.1568 0.421584 0.0430716C0.601836 -0.0588917 1.0033 0.0352312 1.21223 0.168568C3.40802 1.59213 5.58743 3.04315 7.77094 4.48633C8.36495 4.87849 8.96304 5.26281 9.54886 5.66282C10.1511 6.07068 10.1511 6.57657 9.54476 6.98442C6.77134 8.85114 3.99794 10.7179 1.21223 12.561C1.0033 12.6983 0.601836 12.7846 0.421584 12.6826C0.212656 12.565 0.0405968 12.212 0.0365001 11.961C0.0037271 10.0904 0.015997 8.22368 0.015997 6.35697Z"/></svg></span></a>',
	});

	$('.js-modal-map_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// arrows: false,
		rows: false,
		dots: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.984 6.64303C9.984 8.36857 9.984 10.0941 9.984 11.8157C9.984 11.9569 10.025 12.1138 9.9758 12.2353C9.87339 12.4942 9.78734 12.8432 9.57842 12.9569C9.39816 13.0589 8.9967 12.9648 8.78777 12.8314C6.59198 11.4079 4.41257 9.95685 2.22906 8.51367C1.63505 8.12151 1.03696 7.73718 0.451141 7.33717C-0.151063 6.92932 -0.15106 6.42343 0.455242 6.01558C3.22866 4.14886 6.00206 2.28214 8.78777 0.438956C8.9967 0.301698 9.39817 0.215422 9.57842 0.317386C9.78734 0.435036 9.9594 0.787995 9.9635 1.03898C9.99627 2.90962 9.984 4.77632 9.984 6.64303Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.015997 6.35697C0.015997 4.63143 0.015997 2.9059 0.015997 1.18429C0.015997 1.04311 -0.0249613 0.88624 0.0241982 0.764669C0.126614 0.505839 0.212656 0.1568 0.421584 0.0430716C0.601836 -0.0588917 1.0033 0.0352312 1.21223 0.168568C3.40802 1.59213 5.58743 3.04315 7.77094 4.48633C8.36495 4.87849 8.96304 5.26281 9.54886 5.66282C10.1511 6.07068 10.1511 6.57657 9.54476 6.98442C6.77134 8.85114 3.99794 10.7179 1.21223 12.561C1.0033 12.6983 0.601836 12.7846 0.421584 12.6826C0.212656 12.565 0.0405968 12.212 0.0365001 11.961C0.0037271 10.0904 0.015997 8.22368 0.015997 6.35697Z"/></svg></span></a>',
	});

	$('.js-seminar_slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		// arrows: false,
		rows: false,
		dots: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.984 6.64303C9.984 8.36857 9.984 10.0941 9.984 11.8157C9.984 11.9569 10.025 12.1138 9.9758 12.2353C9.87339 12.4942 9.78734 12.8432 9.57842 12.9569C9.39816 13.0589 8.9967 12.9648 8.78777 12.8314C6.59198 11.4079 4.41257 9.95685 2.22906 8.51367C1.63505 8.12151 1.03696 7.73718 0.451141 7.33717C-0.151063 6.92932 -0.15106 6.42343 0.455242 6.01558C3.22866 4.14886 6.00206 2.28214 8.78777 0.438956C8.9967 0.301698 9.39817 0.215422 9.57842 0.317386C9.78734 0.435036 9.9594 0.787995 9.9635 1.03898C9.99627 2.90962 9.984 4.77632 9.984 6.64303Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.015997 6.35697C0.015997 4.63143 0.015997 2.9059 0.015997 1.18429C0.015997 1.04311 -0.0249613 0.88624 0.0241982 0.764669C0.126614 0.505839 0.212656 0.1568 0.421584 0.0430716C0.601836 -0.0588917 1.0033 0.0352312 1.21223 0.168568C3.40802 1.59213 5.58743 3.04315 7.77094 4.48633C8.36495 4.87849 8.96304 5.26281 9.54886 5.66282C10.1511 6.07068 10.1511 6.57657 9.54476 6.98442C6.77134 8.85114 3.99794 10.7179 1.21223 12.561C1.0033 12.6983 0.601836 12.7846 0.421584 12.6826C0.212656 12.565 0.0405968 12.212 0.0365001 11.961C0.0037271 10.0904 0.015997 8.22368 0.015997 6.35697Z"/></svg></span></a>',
	});

	$('.js-h-video_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		// arrows: false,
		rows: false,
		dots: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.984 6.64303C9.984 8.36857 9.984 10.0941 9.984 11.8157C9.984 11.9569 10.025 12.1138 9.9758 12.2353C9.87339 12.4942 9.78734 12.8432 9.57842 12.9569C9.39816 13.0589 8.9967 12.9648 8.78777 12.8314C6.59198 11.4079 4.41257 9.95685 2.22906 8.51367C1.63505 8.12151 1.03696 7.73718 0.451141 7.33717C-0.151063 6.92932 -0.15106 6.42343 0.455242 6.01558C3.22866 4.14886 6.00206 2.28214 8.78777 0.438956C8.9967 0.301698 9.39817 0.215422 9.57842 0.317386C9.78734 0.435036 9.9594 0.787995 9.9635 1.03898C9.99627 2.90962 9.984 4.77632 9.984 6.64303Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.015997 6.35697C0.015997 4.63143 0.015997 2.9059 0.015997 1.18429C0.015997 1.04311 -0.0249613 0.88624 0.0241982 0.764669C0.126614 0.505839 0.212656 0.1568 0.421584 0.0430716C0.601836 -0.0588917 1.0033 0.0352312 1.21223 0.168568C3.40802 1.59213 5.58743 3.04315 7.77094 4.48633C8.36495 4.87849 8.96304 5.26281 9.54886 5.66282C10.1511 6.07068 10.1511 6.57657 9.54476 6.98442C6.77134 8.85114 3.99794 10.7179 1.21223 12.561C1.0033 12.6983 0.601836 12.7846 0.421584 12.6826C0.212656 12.565 0.0405968 12.212 0.0365001 11.961C0.0037271 10.0904 0.015997 8.22368 0.015997 6.35697Z"/></svg></span></a>',
	});

	$('.js-career-mid_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		rows: false,
		dots: false,
		infinite: false,
		asNavFor: '.js-career-mid_slide',
	});

	$('.js-career-mid_slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// arrows: false,
		rows: false,
		dots: false,
		infinite: false,
		asNavFor: '.js-career-mid_slider',
		appendArrows: ".js-career-mid_arr",
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.984 6.64303C9.984 8.36857 9.984 10.0941 9.984 11.8157C9.984 11.9569 10.025 12.1138 9.9758 12.2353C9.87339 12.4942 9.78734 12.8432 9.57842 12.9569C9.39816 13.0589 8.9967 12.9648 8.78777 12.8314C6.59198 11.4079 4.41257 9.95685 2.22906 8.51367C1.63505 8.12151 1.03696 7.73718 0.451141 7.33717C-0.151063 6.92932 -0.15106 6.42343 0.455242 6.01558C3.22866 4.14886 6.00206 2.28214 8.78777 0.438956C8.9967 0.301698 9.39817 0.215422 9.57842 0.317386C9.78734 0.435036 9.9594 0.787995 9.9635 1.03898C9.99627 2.90962 9.984 4.77632 9.984 6.64303Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.015997 6.35697C0.015997 4.63143 0.015997 2.9059 0.015997 1.18429C0.015997 1.04311 -0.0249613 0.88624 0.0241982 0.764669C0.126614 0.505839 0.212656 0.1568 0.421584 0.0430716C0.601836 -0.0588917 1.0033 0.0352312 1.21223 0.168568C3.40802 1.59213 5.58743 3.04315 7.77094 4.48633C8.36495 4.87849 8.96304 5.26281 9.54886 5.66282C10.1511 6.07068 10.1511 6.57657 9.54476 6.98442C6.77134 8.85114 3.99794 10.7179 1.21223 12.561C1.0033 12.6983 0.601836 12.7846 0.421584 12.6826C0.212656 12.565 0.0405968 12.212 0.0365001 11.961C0.0037271 10.0904 0.015997 8.22368 0.015997 6.35697Z"/></svg></span></a>',
	});

	$('.js-about-make_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		rows: false,
		dots: false,
		infinite: false,
		asNavFor: '.js-about-make_slide',
	});

	$('.js-about-make_slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// arrows: false,
		rows: false,
		dots: false,
		infinite: false,
		asNavFor: '.js-about-make_slider',
		appendArrows: ".js-about-make_arr",
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.984 6.64303C9.984 8.36857 9.984 10.0941 9.984 11.8157C9.984 11.9569 10.025 12.1138 9.9758 12.2353C9.87339 12.4942 9.78734 12.8432 9.57842 12.9569C9.39816 13.0589 8.9967 12.9648 8.78777 12.8314C6.59198 11.4079 4.41257 9.95685 2.22906 8.51367C1.63505 8.12151 1.03696 7.73718 0.451141 7.33717C-0.151063 6.92932 -0.15106 6.42343 0.455242 6.01558C3.22866 4.14886 6.00206 2.28214 8.78777 0.438956C8.9967 0.301698 9.39817 0.215422 9.57842 0.317386C9.78734 0.435036 9.9594 0.787995 9.9635 1.03898C9.99627 2.90962 9.984 4.77632 9.984 6.64303Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.015997 6.35697C0.015997 4.63143 0.015997 2.9059 0.015997 1.18429C0.015997 1.04311 -0.0249613 0.88624 0.0241982 0.764669C0.126614 0.505839 0.212656 0.1568 0.421584 0.0430716C0.601836 -0.0588917 1.0033 0.0352312 1.21223 0.168568C3.40802 1.59213 5.58743 3.04315 7.77094 4.48633C8.36495 4.87849 8.96304 5.26281 9.54886 5.66282C10.1511 6.07068 10.1511 6.57657 9.54476 6.98442C6.77134 8.85114 3.99794 10.7179 1.21223 12.561C1.0033 12.6983 0.601836 12.7846 0.421584 12.6826C0.212656 12.565 0.0405968 12.212 0.0365001 11.961C0.0037271 10.0904 0.015997 8.22368 0.015997 6.35697Z"/></svg></span></a>',
	});

	$('.lang-link').on('click', function(e) {

		e.preventDefault();

        $(this).toggleClass('active');

        $('.lang-list').toggleClass('active')

    });

    $('.lang-list li a').on('click', function(e) {
		e.preventDefault();
        var t = $(this).text();
        $('.lang-list').not($(this)).removeClass('active');
        $('.lang-link').removeClass('active');
        // $(this).addClass('active');
        $('.lang-link').text(t)
    });

	$('.header-search a').on('click', function(e) {

		e.preventDefault();

		$('.header-search').toggleClass('active');

	})

});

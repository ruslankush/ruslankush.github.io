$(function() {
	
	$('.accordion-name').click(function (e) {
	
		e.preventDefault();
	
		$(".accordion-body").not($(this).next()).slideUp(400);
	
		$(this).next().slideToggle(400);
	
		$(".accordion-item").not($(this).closest(".accordion-item")).removeClass("active");
	
		$(this).closest(".accordion-item").toggleClass("active");
	
	});

	$('.js-reviews_slider').slick({
		slidesToShow: 6,
		// arrows: false,
		dots: true,
		rows: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.234396 7.49987C0.233384 7.26688 0.321331 7.03354 0.498102 6.85514L6.06353 1.24121C6.41756 0.884086 6.99406 0.881582 7.35104 1.23561C7.70802 1.5895 7.71052 2.16589 7.35663 2.52304L2.43203 7.49032L7.39943 12.4147C7.75641 12.7687 7.75891 13.345 7.40502 13.702C7.05114 14.0593 6.47464 14.0618 6.11752 13.7076L0.503521 8.14228C0.325177 7.96533 0.235408 7.73277 0.234396 7.49987Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next-icon" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41037 6.50004C7.41037 6.73302 7.32141 6.96598 7.14386 7.14361L1.5541 12.7333C1.19852 13.0889 0.62201 13.0889 0.266576 12.7333C-0.0888587 12.3779 -0.0888587 11.8015 0.266576 11.4459L5.21271 6.50004L0.266748 1.55416C-0.0886869 1.19859 -0.088687 0.622249 0.266748 0.266843C0.622182 -0.0889077 1.19869 -0.0889077 1.55427 0.266843L7.14403 5.85646C7.32161 6.03418 7.41037 6.26714 7.41037 6.50004Z"/></svg></span></a>',
	
	});

	$('.js-event_slider').slick({
		slidesToShow: 3,
		// arrows: false,
		dots: true,
		rows: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.234396 7.49987C0.233384 7.26688 0.321331 7.03354 0.498102 6.85514L6.06353 1.24121C6.41756 0.884086 6.99406 0.881582 7.35104 1.23561C7.70802 1.5895 7.71052 2.16589 7.35663 2.52304L2.43203 7.49032L7.39943 12.4147C7.75641 12.7687 7.75891 13.345 7.40502 13.702C7.05114 14.0593 6.47464 14.0618 6.11752 13.7076L0.503521 8.14228C0.325177 7.96533 0.235408 7.73277 0.234396 7.49987Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next-icon" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41037 6.50004C7.41037 6.73302 7.32141 6.96598 7.14386 7.14361L1.5541 12.7333C1.19852 13.0889 0.62201 13.0889 0.266576 12.7333C-0.0888587 12.3779 -0.0888587 11.8015 0.266576 11.4459L5.21271 6.50004L0.266748 1.55416C-0.0886869 1.19859 -0.088687 0.622249 0.266748 0.266843C0.622182 -0.0889077 1.19869 -0.0889077 1.55427 0.266843L7.14403 5.85646C7.32161 6.03418 7.41037 6.26714 7.41037 6.50004Z"/></svg></span></a>',
	
	});

	$('.js-news_slider').slick({
		slidesToShow: 3,
		// arrows: false,
		dots: true,
		rows: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.234396 7.49987C0.233384 7.26688 0.321331 7.03354 0.498102 6.85514L6.06353 1.24121C6.41756 0.884086 6.99406 0.881582 7.35104 1.23561C7.70802 1.5895 7.71052 2.16589 7.35663 2.52304L2.43203 7.49032L7.39943 12.4147C7.75641 12.7687 7.75891 13.345 7.40502 13.702C7.05114 14.0593 6.47464 14.0618 6.11752 13.7076L0.503521 8.14228C0.325177 7.96533 0.235408 7.73277 0.234396 7.49987Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next-icon" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41037 6.50004C7.41037 6.73302 7.32141 6.96598 7.14386 7.14361L1.5541 12.7333C1.19852 13.0889 0.62201 13.0889 0.266576 12.7333C-0.0888587 12.3779 -0.0888587 11.8015 0.266576 11.4459L5.21271 6.50004L0.266748 1.55416C-0.0886869 1.19859 -0.088687 0.622249 0.266748 0.266843C0.622182 -0.0889077 1.19869 -0.0889077 1.55427 0.266843L7.14403 5.85646C7.32161 6.03418 7.41037 6.26714 7.41037 6.50004Z"/></svg></span></a>',
	
	});

	$('.js-partner_slider').slick({
		slidesToShow: 6,
		arrows: false,
		dots: true,
		rows: false,
		infinite: false,
		// prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.234396 7.49987C0.233384 7.26688 0.321331 7.03354 0.498102 6.85514L6.06353 1.24121C6.41756 0.884086 6.99406 0.881582 7.35104 1.23561C7.70802 1.5895 7.71052 2.16589 7.35663 2.52304L2.43203 7.49032L7.39943 12.4147C7.75641 12.7687 7.75891 13.345 7.40502 13.702C7.05114 14.0593 6.47464 14.0618 6.11752 13.7076L0.503521 8.14228C0.325177 7.96533 0.235408 7.73277 0.234396 7.49987Z"/></svg></span></a>',
	    // nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next-icon" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41037 6.50004C7.41037 6.73302 7.32141 6.96598 7.14386 7.14361L1.5541 12.7333C1.19852 13.0889 0.62201 13.0889 0.266576 12.7333C-0.0888587 12.3779 -0.0888587 11.8015 0.266576 11.4459L5.21271 6.50004L0.266748 1.55416C-0.0886869 1.19859 -0.088687 0.622249 0.266748 0.266843C0.622182 -0.0889077 1.19869 -0.0889077 1.55427 0.266843L7.14403 5.85646C7.32161 6.03418 7.41037 6.26714 7.41037 6.50004Z"/></svg></span></a>',
	});

	$('.js-happen_slider').slick({
		slidesToShow: 1,
		// arrows: false,
		dots: true,
		rows: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg name="arrow-prev-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.234396 7.49987C0.233384 7.26688 0.321331 7.03354 0.498102 6.85514L6.06353 1.24121C6.41756 0.884086 6.99406 0.881582 7.35104 1.23561C7.70802 1.5895 7.71052 2.16589 7.35663 2.52304L2.43203 7.49032L7.39943 12.4147C7.75641 12.7687 7.75891 13.345 7.40502 13.702C7.05114 14.0593 6.47464 14.0618 6.11752 13.7076L0.503521 8.14228C0.325177 7.96533 0.235408 7.73277 0.234396 7.49987Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg name="arrow-next-icon" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41037 6.50004C7.41037 6.73302 7.32141 6.96598 7.14386 7.14361L1.5541 12.7333C1.19852 13.0889 0.62201 13.0889 0.266576 12.7333C-0.0888587 12.3779 -0.0888587 11.8015 0.266576 11.4459L5.21271 6.50004L0.266748 1.55416C-0.0886869 1.19859 -0.088687 0.622249 0.266748 0.266843C0.622182 -0.0889077 1.19869 -0.0889077 1.55427 0.266843L7.14403 5.85646C7.32161 6.03418 7.41037 6.26714 7.41037 6.50004Z"/></svg></span></a>',
	
	});

	var rev = $('.js-top_slider');
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

	rev.slick({
		speed: 1000,
		arrows: false,
		dots: false,
		focusOnSelect: true,
		infinite: true,
		centerMode: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		swipe: true,
		rows: false,
		// autoplay: true,
  		autoplaySpeed: 2000,
		customPaging: function(slider, i) {
			return '';
		},
	});

});

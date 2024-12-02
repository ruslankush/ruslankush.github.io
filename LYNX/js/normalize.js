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


});

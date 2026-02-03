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

});



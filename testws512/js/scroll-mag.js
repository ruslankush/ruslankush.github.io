$(document).ready(function() {
    // ==from scrollmagic
    var controller = new ScrollMagic.Controller();
    var $block_list = $('.block-list'),
    $block_item = $block_list.find('.block-list__item'),
    block_list_width = $block_list.outerWidth(),
    block_item_width = $block_item.outerWidth(),
    total_width = block_item_width * $block_item.length,
    travel_distance = total_width - block_list_width + 120;

    $(window).on("resize", function () {
        if ($(window).width() < 769 && controller.enabled()) {
            controller.enabled(false);
        } else if (!controller.enabled()) {
            controller.enabled(true);
        }
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: "#second", 
        duration: '100%',
        triggerHook: "onLeave",
    })
    .setPin('.block-list')
    .addTo(controller);

    scene.on('progress', function(e) {
        var progress = e.progress,
        move = -travel_distance * progress + "px";
        $block_list.css({
            transform: "translateX(" + move + ")"
        });

    });

    $(window).on('resize', function(){
        if ($('#second').width() < 769) {
            if (controller.enabled()) {
                controller.enabled(false);
            }
        } else if (!controller.enabled()) {
            controller.enabled(true);
        }
        controller.update(true);
    });

});
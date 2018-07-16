$(document).ready(function() {
    //==js-nav
    $('.js-nav__menu').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('in');
    });

    //===height
    function heightDetectet() {
        $('.js-height').css("height", $(window).height())
    }
    heightDetectet(),
    $(window).resize(function() {
        heightDetectet()
    });

    // if($('.js-uniks-section__task').length) {
    //     $('.js-uniks-section__task').theiaStickySidebar({
    //         additionalMarginTop: 30
    //     });
    // }

    // $('.js-uniks-section__task')
    //     .theiaStickySidebar({
    //         additionalMarginTop: 30
    //     });

    // var sidebar = new StickySidebar('.js-uniks-section__task', {
    //     containerSelector: '.js-uniks-section',
    //     innerWrapperSelector: '.js-uniks-section__block',
    //     topSpacing: 20,
    //     bottomSpacing: 120
    // });

    // var sidebar = new StickySidebar('.js-uniks-section__task', {topSpacing: 20});

    //==from mouse-scroll
    $(".js-mouse-scroll").click(function(e){
        e.preventDefault();
        var target = $($(this).attr("href"));
    
        if(target.length){
            $("html,body").animate({scrollTop:target.offset().top},400);
        }
    });


    //==ffrom preload
    setTimeout(function(){
        $('body').addClass('loaded');
  
    }, 4000);


    //==from header fixed
    $(window).bind('scroll', function() {
        if($(window).scrollTop() > 110){
            $('.js-header').addClass('header__fixed');
        }else{
            $('.js-header').removeClass('header__fixed');
        }
    });


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

    

    // nice = $("html").niceScroll({
    //     cursorcolor: "#c81818",
    //     bouncescroll: true,
    //     horizrailenabled: false,
    //     cursorwidth: "2px",
    //     scrollspeed: 70,
    //     mousescrollstep: 100,
    //     cursorborder: false,
    // });


    

    var selectedClass = "";
    $(".js-block-list__link").click(function(e){
        e.preventDefault();
        $(this).addClass ("active")
                .siblings()
                .removeClass('active')

        selectedClass = $(this).attr("data-rel");
        $(".js-block-list").fadeTo(100, 0.1);
        $(".js-block-list .block-list__item").not("."+selectedClass).fadeOut();
        setTimeout(function() {
            $("."+selectedClass).fadeIn();
            $(".js-block-list").fadeTo(500, 1);
        }, 500);
    });


    // ==from input
    $('.js-input').blur(function(){
        var $this = $(this);
        if($this.val())
        $this.addClass('used');
        else
        $this.removeClass('used');
    });

});


 function querySelectorArray(query, root) {
        return Array.prototype.slice.call((root || document).querySelectorAll(query));
    }

    var elements = querySelectorArray("[data-scroll]"),
    bg = document.getElementById("content"),
    container = document.querySelector(".scroll-content");

    elements.forEach(function(color) {
    var group = color.getAttribute("data-scroll"),
    sections = querySelectorArray("[data-" + group + "]");

    container.addEventListener("scroll", function() {
        var lastSection = false;
        sections.forEach(function(section) {
            var offset = section.getBoundingClientRect();
            if (
                offset.top - window.innerHeight / 2 < 0 &&
                offset.top > -offset.height
            )
                lastSection = section.getAttribute("data-" + group + "");
            });
            bg.className = lastSection || "";
        });
    });


// $( window ).ready(function() {
  
//     var wHeight = $(window).height();

//     $('#third')
//         .height(wHeight)
//         .scrollie({
//         scrollOffset : -550,
//         scrollingInView : function(elem) {
                   
//             var bgColor = elem.data('background');
          
//             $('body').addClass('bg');
          
//         }
//     });

// });
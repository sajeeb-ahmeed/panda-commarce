(function ($) {
    "use strict";


    /*************************/

    var $owl = $('.owl-carousel');

    $owl.children().each(function (index) {
        $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
        center: true,
        loop: true,
        dots: false,
        autoplay: false,
        nav: true,
        navText: [
            "<img src='assets/images/prev.png'>",
            "<img src='assets/images/next.png'>"
        ],
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        $owl.trigger('to.owl.carousel', $(this).data('position'));
    });

    /*****************/
    $(function () {

        $(window).scroll(function () {

            if ($(this).scrollTop() < 100) {
                // hide nav
                $("nav").removeClass("top-nav");
                $("#back-to-top").fadeOut();

            } else {
                // show nav
                $("nav").addClass("top-nav");
                $("#back-to-top").fadeIn();
            }
        });
    });




    /**********Bottom-to-top**********/

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#scroll').fadeIn();
            } else {
                $('#scroll').fadeOut();
            }
        });
        $('#scroll').click(function () {
            $("html, body").animate({
                scrollTop: 200
            }, 600);
            return false;
        });
    });

    /*************/

    /*Video Plugin*/


    var $iframe = $('iframe'),
        $videoLink = $('.video-link'),
        playerTemplate = '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';


    $videoLink.on('click', function (e) {
        var localTemplate = '',
            videoWidth = parseInt($(this).data('width')),
            videoHeight = parseInt($(this).data('height')),
            videoAspect = (videoHeight / videoWidth) * 100,
            // elements
            $player = null,
            $video = null,
            $close = null,
            $iframe = null;

        e.preventDefault();

        localTemplate = playerTemplate.replace('{{iframevideo}}', $(this).prop('href'));

        $player = $(localTemplate);

        $player
            .find('.video-filler')
            .css('padding-top', videoAspect + '%');

        $close = $player
            .find('.video-close')
            .on('click', function () {
                $(this).off().closest('.player').hide().remove();
            });

        $player.appendTo('body').addClass('js--show-video');
    });

    /*Video Plugin End*/

    /*----------------------------------------
              Wow.js Plugin
          ----------------------------------------*/

    new WOW().init();


})(jQuery);
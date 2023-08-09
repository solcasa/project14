
$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');

    });


    var mainViSwiper = new Swiper('.main_slide', {
        effect: "fade",
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        watchOverflow: true,
        pagination: {
            el: '.main-vi-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    $('.main-vi-autoplay button').on('click', function () {
        if ($(this).hasClass('pause')) {
            mainViSwiper.autoplay.stop();
            $(this).parent().removeClass('pause').addClass('start');
        } else {
            mainViSwiper.autoplay.start();
            $(this).parent().removeClass('start').addClass('pause');
        }
    });
});



$(function () {
    var smTodaySwiper = undefined;
    var delay = 500;
    var timer = null;

    function smTodaySlideFunc() {
        var ww = $(window).width();
        if (ww <= 1024 && smTodaySwiper == undefined) {
            smTodaySwiper = new Swiper('.sm-today-swiper', {
                loop: false,
                slidesPerView: 'auto',
                autoplay: false,
                watchOverflow: true,
            });
        } else if (ww > 1024 && smTodaySwiper != undefined) {
            smTodaySwiper.destroy();
            smTodaySwiper = undefined;
        }
    };

    smTodaySlideFunc();

    $(window).on('resize', function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            smTodaySlideFunc();
        }, delay);
    });


});
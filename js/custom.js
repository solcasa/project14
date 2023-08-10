
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


$(function () {
    var ww = $(window).width();
    var smStorySwiper = undefined;

    function smStorySlideFunc() {
        if (ww <= 1024 && smStorySwiper == undefined) {
            smStorySwiper = new Swiper('.sm-story-swiper', {
                loop: false,
                slidesPerView: '1',
                autoplay: false,
                watchOverflow: true,
            });
        } else if (ww > 1024 && smStorySwiper != undefined) {
            smStorySwiper.destroy();
            smStorySwiper = undefined;
        }
    };

    smStorySlideFunc();

    $(window).on('resize', function () {
        ww = $(window).width();
        smStorySlideFunc();
    });
});

$(function () {
    var ww = $(window).width();
    var smEventSwiper = undefined;

    function smEventSlideFunc() {
        if (ww <= 1024 && smEventSwiper == undefined) {
            smEventSwiper = new Swiper('.sm-event-swiper', {
                loop: false,
                slidesPerView: '1',
                autoplay: false,
                watchOverflow: true,
            });
        } else if (ww > 1024 && smEventSwiper != undefined) {
            smEventSwiper.destroy();
            smEventSwiper = undefined;
        }
    };

    smEventSlideFunc();

    $(window).on('resize', function () {
        ww = $(window).width();
        smEventSlideFunc();
    });


});


$(function () {
    $('.header .site_map').on('click', function (e) {
        e.preventDefault();
        $('.header .gnb').toggleClass('on');
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {

        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
        }
    });



    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.sub_box').removeAttr('style');
    });

});

$(function () {
    $('.header .sub_menu>li>a').on('click', function (e) {
        e.preventDefault();
        if ($('.header .gnb').hasClass('on')) {

            $(this).next().stop().slideToggle();
        }
    });

});

$(function () {
    $('.header').on('scroll touchmove mousewheel', function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
});


$(document).ready(function () {
    $('#features').css('visibility', 'hidden');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() + window.innerHeight > $('#features').offset().top + 100) {
            $('#features').css('visibility', 'visible');
            $('.features_group').children().addClass('fadeInUp');
        }
    });

    $('#advantages').css('visibility', 'hidden');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() + window.innerHeight > $('#advantages').offset().top + 100) {
            $('#advantages').css('visibility', 'visible');
            $('.thinking-box').children().eq(0).addClass('fadeInLeft');
            $('.thinking-box').children().eq(1).addClass('fadeInRight');
        }
    });

    $('.navbar-nav').on('click', function () {
        $('.collapse').collapse('hide');
    });

    $(window).on('scroll', function () {
        $('.collapse').collapse('hide');
    });

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    checkView('#home', '.navHome');
    checkView('#games', '.navGames');
    checkView('#features', '.navFeatures');
    checkView('#advantages', '.navAdvantages');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() == 0) {
            $('.navbar-fixed-top').css("background-color", "transparent");
        } else {
            $('.navbar-fixed-top').css("background-color", "#141319");
        }
    });
});

function checkView(idElement, classElement) {
    $(window).on('scroll', function () {
        if (isScrolledIntoView(idElement)) {
            $('.active').removeClass('active');
            $(classElement).addClass('active');
        }
    });
}

function isScrolledIntoView(element) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    return ((pageTop <= elementTop) && (pageBottom >= elementBottom));
}

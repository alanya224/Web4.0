$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() == 0) {
            $('.navbar-fixed-top').css("background-color", "transparent");
        } else {
            $('.navbar-fixed-top').css("background-color", "#141319");
        }
    });
});

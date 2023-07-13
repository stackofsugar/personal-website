/// <reference path="F:/References/jquery-3.7.0.min.js" />

$(() => {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 25) {
            $("nav").addClass("navbar-notattop");
            $("nav").removeClass("navbar-attop");
        } else if ($(window).scrollTop() < 5) {
            $("nav").addClass("navbar-attop");
            $("nav").removeClass("navbar-notattop");
        }
    });
});

$(window).on("DOMSubtreeModified", () => {
    $(".need-masonry").masonry({
        percentPosition: true,
    });
});

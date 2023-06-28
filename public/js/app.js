/// <reference path="F:/jquery-3.6.0.min.js" />

$(function () {
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

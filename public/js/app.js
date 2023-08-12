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

function reloadMasonry() {
    $(".need-masonry").masonry({
        transitionDuration: 0,
    });
}

// https://stackoverflow.com/questions/3219758/detect-changes-in-the-dom (with modifications)
var observeDOM = (() => {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    return (obj, callback) => {
        if (!obj || obj.nodeType !== 1) return;

        if (MutationObserver) {
            var mutationObserver = new MutationObserver(callback);

            mutationObserver.observe(obj, { childList: true, subtree: true });
            return mutationObserver;
        }

        // browser support fallback
        else if (window.addEventListener) {
            obj.addEventListener("DOMNodeInserted", callback, false);
            obj.addEventListener("DOMNodeRemoved", callback, false);
        }
    };
})();

observeDOM($("body")[0], (mObs) => {
    reloadMasonry();
    $("body")
        .imagesLoaded()
        .progress(function (instance, image) {
            reloadMasonry();
        });
});

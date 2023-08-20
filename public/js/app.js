function ready(readyFn) {
    if (document.readyState !== "loading") {
        readyFn();
    } else {
        document.addEventListener("DOMContentLoaded", readyFn);
    }
}

ready(() => {
    document.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 25) {
            vanillaAddClass(document.querySelector("nav"), "navbar-atbelow");
            vanillaRemoveClass(document.querySelector("nav"), "navbar-attop");
        } else if (document.documentElement.scrollTop < 5) {
            vanillaAddClass(document.querySelector("nav"), "navbar-attop");
            vanillaRemoveClass(document.querySelector("nav"), "navbar-atbelow");
        }
    });
});

// $(() => {});

function vanillaRemoveClass(elem, cls) {
    if (elem.classList.contains(cls)) {
        elem.classList.remove(cls);
    }
}

function vanillaAddClass(elem, cls) {
    if (!elem.classList.contains(cls)) {
        elem.classList.add(cls);
    }
}

function reloadMasonry() {
    if (document.querySelector(".need-masonry")) {
        new Masonry(document.querySelector(".need-masonry"), {
            transitionDuration: 0,
        });
    }
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

observeDOM(document.querySelector("body"), (mObs) => {
    reloadMasonry();

    var imgLoad = imagesLoaded(document.querySelector("body"));
    imgLoad.on("progress", (instance, image) => {
        reloadMasonry();
    });
});

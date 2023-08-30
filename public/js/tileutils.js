function reloadMasonry() {
    if (document.querySelector(".need-masonry") && "Masonry" in window) {
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

    if ("imagesLoaded" in window) {
        var imgLoad = imagesLoaded(document.querySelector("body"));
        imgLoad.on("progress", (instance, image) => {
            reloadMasonry();
        });
    }
});

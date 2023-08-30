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

// I have eliminated jQuery, you can do so too: https://youmightnotneedjquery.com/

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

// 06-dom/06-mini-carousel/script.js - 6.6: mini carousel

(() => {
    let gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let carousel = 0;
    let img = document.querySelector("figure img");
    document.getElementById("next").addEventListener("click", () => {
        img.src = gallery[carousel + 1];
        carousel++;
        if (carousel === gallery.length - 1) {
            carousel = -1;
        }
    });
})();

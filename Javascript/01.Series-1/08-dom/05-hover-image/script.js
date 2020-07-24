// 06-dom/05-hover-image/script.js - 6.5: image hover

(() => {
    // your code here
    let image = document.querySelector("figure img");
    image.addEventListener("mouseover", () => {
        let datahover = document
            .querySelector("figure img")
            .getAttribute("data-hover");
        image.src = datahover;
    });
    console.log(datahover);
})();

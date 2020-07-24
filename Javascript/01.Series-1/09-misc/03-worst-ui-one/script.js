// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider

(() => {
    // your code here
    var slider = document.getElementById("slider");
    var elem = document.getElementById("slider").value;
    document.getElementById("target").innerHTML = "0" + elem;

    slider.addEventListener("change", () => {
        elem = document.getElementById("slider").value;
        document.getElementById("target").innerHTML = "0" + elem;
    });
})();

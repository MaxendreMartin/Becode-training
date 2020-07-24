// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker

(() => {
    // your code here
    let part1 = document.getElementById("part-one");
    let part2 = document.getElementById("part-two");
    let part3 = document.getElementById("part-three");
    let part4 = document.getElementById("part-four");

    let n = 460000000;
    document.getElementById("target").innerHTML = "0" + n;

    part1.addEventListener("click", () => {
        n += 1000000;
        document.getElementById("target").innerHTML = "0" + n;
    });
    part2.addEventListener("click", () => {
        n += 10000;
        document.getElementById("target").innerHTML = "0" + n;
    });
    part3.addEventListener("click", () => {
        n += 100;
        document.getElementById("target").innerHTML = "0" + n;
    });
    part4.addEventListener("click", () => {
        n += 1;
        document.getElementById("target").innerHTML = "0" + n;
    });
})();

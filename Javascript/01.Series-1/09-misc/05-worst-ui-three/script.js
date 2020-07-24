// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {
    // your code here
    let part1 = document.getElementById("part-one");
    let part2 = document.getElementById("part-two");
    let part3 = document.getElementById("part-three");
    let part4 = document.getElementById("part-four");

    let s1 = "460";
    let s2 = "00";
    let s3 = "00";
    let s4 = "00";

    document.getElementById("target").innerHTML = "0" + s1 + s2 + s3 + s4;

    part1.addEventListener("click", () => {
        s1 = Math.floor(Math.random() * 39) + 460;
        if (s1 < 10) {
            s1 = "0" + s1;
        }
        document.getElementById("part-one").value = s1;
        document.getElementById("target").innerHTML = "0" + s1 + s2 + s3 + s4;
    });

    part2.addEventListener("click", () => {
        s2 = Math.floor(Math.random() * 99) + 1;
        if (s2 < 10) {
            s2 = "0" + s2;
        }
        document.getElementById("part-two").value = s2;
        document.getElementById("target").innerHTML = "0" + s1 + s2 + s3 + s4;
    });

    part3.addEventListener("click", () => {
        s3 = Math.floor(Math.random() * 99) + 1;
        if (s3 < 10) {
            s3 = "0" + s3;
        }
        document.getElementById("part-three").value = s3;
        document.getElementById("target").innerHTML = "0" + s1 + s2 + s3 + s4;
    });

    part4.addEventListener("click", () => {
        s4 = Math.floor(Math.random() * 99) + 1;
        if (s4 < 10) {
            s4 = "0" + s4;
        }
        document.getElementById("part-four").value = s4;
        document.getElementById("target").innerHTML = "0" + s1 + s2 + s3 + s4;
    });
})();

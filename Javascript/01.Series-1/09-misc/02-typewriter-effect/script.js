// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect

(() => {
    // your code here

    var i = 0;
    var txt = document.getElementById("target").textContent;
    var speed = 50;
    let target = document.getElementById("target");
    target.innerHTML = "";

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
})();

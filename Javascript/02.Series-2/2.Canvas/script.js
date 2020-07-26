(() => {
    let hero = {
        left: 575,
        top: 700,
    };

    var missiles = [];

    var enemies = [];

    document.onkeydown = function (e) {
        console.log(e);
        if (e.keyCode === 37) {
            //left
            console.log("LEFT");
            hero.left = hero.left - 10;
        }
        if (e.keyCode === 39) {
            //right
            console.log("RIGHT");
            hero.left = hero.left + 10;
        }
        if (e.keyCode === 32) {
            //spacebar - fire
            console.log("FIRE");
            missiles.push({
                left: hero.left - 22,
                top: hero.top,
            });
            drawMissiles();
        }
        moveHero();
    };

    function moveHero() {
        document.getElementById("hero").style.left = hero.left + "px";
        //document.getElementById("hero").style.top = hero.top + "px";
    }

    function drawMissiles() {
        //dessin du missile (pas en mouvement)
        document.getElementById("missiles").innerHTML = "";
        for (var i = 0; i < missiles.length; i++) {
            document.getElementById(
                "missiles"
            ).innerHTML += `<div class='missile1' style='left:${missiles[i].left}px; top:${missiles[i].top}px'></div>`;
        }
    }

    function moveMissiles() {
        //dessin du missile (en mouvement)
        for (var i = 0; i < missiles.length; i++) {
            missiles[i].top = missiles[i].top - 8;
        }
    }

    function game() {
        setTimeout(game, 100);
        moveMissiles();
        drawMissiles();
    }
    game();
})();

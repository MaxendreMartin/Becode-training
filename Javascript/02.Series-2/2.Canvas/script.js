(() => {
    let hero = {
        left: 800,
        top: 700,
    };

    var missiles = [];

    var enemies = [
        { left: 200, top: 100 },
        { left: 300, top: 100 },
        { left: 400, top: 100 },
        { left: 500, top: 100 },
        { left: 600, top: 100 },
        { left: 700, top: 100 },
        { left: 800, top: 100 },
        { left: 900, top: 100 },
        { left: 200, top: 175 },
        { left: 300, top: 175 },
        { left: 400, top: 175 },
        { left: 500, top: 175 },
        { left: 600, top: 175 },
        { left: 700, top: 175 },
        { left: 800, top: 175 },
        { left: 900, top: 175 },
    ];

    let score = {
        cible: 0,
    };

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
                left: hero.left - 220,
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

    function drawEnemies() {
        //dessin enemy (pas en mouvement)
        document.getElementById("enemies").innerHTML = "";

        for (var i = 0; i < enemies.length; i++) {
            document.getElementById(
                "enemies"
            ).innerHTML += `<div class='enemy' style='left:${enemies[i].left}px; top:${enemies[i].top}px'></div>`;
        }
    }

    function moveEnemies() {
        //dessin enemiy(mouvement)
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].top = enemies[i].top + 1;
        }
    }

    function collisionDetection() {
        for (var enemy = 0; enemy < enemies.length; enemy++) {
            for (var missile = 0; missile < missiles.length; missile++) {
                if (
                    missiles[missile].left >= enemies[enemy].left &&
                    missiles[missile].left <= enemies[enemy].left + 50 &&
                    missiles[missile].top <= enemies[enemy].top + 50 &&
                    missiles[missile].top >= enemies[enemy].top
                ) {
                    enemies.splice(enemy, 1);
                    missiles.splice(missile, 1);
                }
            }
        }
    }

    function game() {
        setTimeout(game, 100);
        moveHero();
        moveMissiles();
        drawMissiles();
        drawEnemies();
        moveEnemies();
        collisionDetection();
    }
    game();
})();

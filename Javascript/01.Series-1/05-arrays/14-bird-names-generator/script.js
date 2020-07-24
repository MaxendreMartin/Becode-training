// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French

(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    function randombird(set) {
        let item = Array.from(set);
        return item[Math.floor(Math.random() * item.length)];
    }

    document.getElementById("run").addEventListener("click", () => {
        let o = Math.floor(Math.random() * birds.length);
        let d;
        let a;

        if (birds[o].fem === true) {
            d = "La ";
            a = "e";
        } else {
            d = "Le ";
            a = "";
        }
        document.getElementById("target").innerHTML =
            d + birds[o].name + " " + randombird(adjectives) + a;
    });
})();

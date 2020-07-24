// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set

(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let nombre = people.size;
        let alex = people.has("Alexandre");
        alert("Le groupe contient " + nombre + " personnes.");
        alert("Alexandre est-il dans le groupe? " + alex);
    });
})();

// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 100) + 1);
        }
        alert(arr);
        Math.min.apply(null, arr);
        Math.max.apply(null, arr);
        alert(Math.min.apply(null, arr));
        alert(Math.max.apply(null, arr));

        let somme = 0;
        for (e of arr) somme += e;
        alert("La somme de ces nombres est de " + somme);

        let m = 0;
        for (e of arr) m += e;
        let moy = m / arr.length;
        alert("La moyenne de ces nombres est de " + moy);
    });
})();

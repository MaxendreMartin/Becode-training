// 09-misc/06-x-number/script.js - 9.6: x the number

(() => {
    // your code here
    let n = Math.floor(Math.random() * 100) + 1;
    console.log(n);

    let x = prompt("Devine le nombre (entre 1 & 100)");

    for (let y = 2; x !== n; y++) {
        if (n > x) {
            x = prompt("Plus haut, essayes encore (devine " + y + ")");
        } else if (n < x) {
            x = prompt("Plus bas, essayes encore (devine " + y + ")");
        } else {
            alert("C'est ça ! Tu as trouvé avec  " + (y - 1) + " essais.");
            break;
        }
    }
})();

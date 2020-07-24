const readlineSync = require("readline-sync");
let age = readlineSync.question("Quel âge as-tu? ");
let gender = readlineSync.question("Quel est ton sexe? ");
let city = readlineSync.question("D'où viens-tu? ");
console.log(
    "Tu as " + age + "ans, tu es un " + gender + " et tu viens de " + city
);
let confirm = readlineSync.question(
    "Veuillez confirmer si c'est vrai ou faux "
);
if (confirm == "vrai") {
    console.log("ok");
} else {
    let age = readlineSync.question("Quel âge as-tu? ");
    let gender = readlineSync.question("Quel est ton sexe? ");
    let city = readlineSync.question("D'où viens-tu? ");
}

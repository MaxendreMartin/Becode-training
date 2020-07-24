const readlineSync = require("readline-sync");
let name = readlineSync.question("Quel est votre nom? ");
console.log("Bonjour, " + name + "!");

const readlineSync = require("readline-sync");
let cake = readlineSync.question("Do you want some cake? ");

if (cake == "yes") {
    console.log("Congratulation");
} else {
    console.log("More cake for me then :p !");
}

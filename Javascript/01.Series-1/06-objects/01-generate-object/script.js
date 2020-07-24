// 06-objects/01-generate-object/script.js - 6.1: genererate an object

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var person = {
            firstName: "Maxendre",
            lastName: "Martin",
            age: 20,
            city: "Namur",
            country: "Belgium",
        };
        console.log(person);
    });
})();

// 06-objects/04-from-entries/script.js - 6.4: fromEntries

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let arr = [];

        for (let i = 0; i < keys.length; i++) {
            arr.push([keys[i], values[i]]);
        }
        let object = Object.fromEntries(arr);

        console.log(object);
        console.log(Object.keys(object));
        console.log(Object.values(object));
    });
})();

// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {
    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    let pomme = fruits.find((Element) => Element === "apple");

    document.getElementById("run").addEventListener("click", () => {
        if (pomme === "apple") {
            alert("yes");
        } else {
            alert("no");
        }
    });
})();

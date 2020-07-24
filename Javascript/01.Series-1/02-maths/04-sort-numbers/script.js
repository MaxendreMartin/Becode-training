// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let num = document.getElementById("numbers").value;
        let arr = num.split(",");
        let map1 = arr.map((x) => Number(x));
        map1.sort((a, b) => a - b);
        alert(map1);
    });
})();

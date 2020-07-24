// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)

(() => {
    // your code here
    function generateRandomColor() {
        var randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
        //random color will be freshly served
    }
    document.getElementById("run").addEventListener("click", () => {
        document.body.style.backgroundColor = generateRandomColor();
    }); // -> #e1ac94
})();

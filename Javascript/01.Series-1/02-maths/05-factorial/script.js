// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let num = document.getElementById("number").value;

        function fact(num) {
            var i,
                f = 1;
            for (i = 1; i <= num; i++) {
                f = f * i; // ou f *= i;
            }
            return f;
        }
        alert(fact(num));
    });
})();

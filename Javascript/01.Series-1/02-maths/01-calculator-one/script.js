// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function () {
        // perform an addition
        var num1 = document.getElementById("op-one").value;
        var num2 = document.getElementById("op-two").value;
        document.getElementById("addition").innerHTML =
            parseInt(num1) + parseInt(num2);
    });

    document
        .getElementById("substraction")
        .addEventListener("click", function () {
            // perform an substraction
            var num1 = document.getElementById("op-one").value;
            var num2 = document.getElementById("op-two").value;
            document.getElementById("substraction").innerHTML =
                parseInt(num1) - parseInt(num2);
        });

    document
        .getElementById("multiplication")
        .addEventListener("click", function () {
            // perform an multiplication
            var num1 = document.getElementById("op-one").value;
            var num2 = document.getElementById("op-two").value;
            document.getElementById("multiplication").innerHTML =
                parseInt(num1) * parseInt(num2);
        });

    document.getElementById("division").addEventListener("click", function () {
        // perform an division
        var num1 = document.getElementById("op-one").value;
        var num2 = document.getElementById("op-two").value;
        document.getElementById("division").innerHTML =
            parseInt(num1) / parseInt(num2);
    });
})();

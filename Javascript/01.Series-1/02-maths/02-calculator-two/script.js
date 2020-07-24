// 02-maths/01-calculator-one/script.js - 2.1: calculator1

// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = (operation) => {
        // perform the operation
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;

        switch (operation) {
            case "addition":
                document.getElementById("addition").innerHTML =
                    parseInt(num1) + parseInt(num2);
                break;

            case "substraction":
                document.getElementById("substraction").innerHTML =
                    parseInt(num1) - parseInt(num2);
                break;

            case "multiplication":
                document.getElementById("multiplication").innerHTML =
                    parseInt(num1) * parseInt(num2);
                break;

            case "division":
                document.getElementById("division").innerHTML =
                    parseInt(num1) / parseInt(num2);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(($btn) =>
        $btn.addEventListener("click", () => (performOperation($btn.id), false))
    );
})();

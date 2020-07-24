// 06-dom/09-match-password-one/script.js - 6.9: password verification (1)

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let passone = document.getElementById("pass-one");
        let passtwo = document.getElementById("pass-two");

        if (passone.value == passtwo.value) {
            passone.setAttribute("style", "border-color:green");
            passtwo.setAttribute("style", "border-color:green");
        } else {
            passone.setAttribute("style", "border-color:red");
            passtwo.setAttribute("style", "border-color:red");
        }
    });
})();

// 06-dom/10-match-password-two/script.js - 6.10: password verification (2)

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
            passone.classList.add("error");
            passtwo.classList.add("error");
        }
    });
})();

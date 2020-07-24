// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)

(() => {
    // your code here

    document.getElementById("pass-one").addEventListener("input", () => {
        var pass1 = document.getElementById("pass-one").value;
        var message = document.getElementById("validity");

        function number(myString) {
            return /(.*\d){2}/.test(myString);
        }

        if (pass1.length >= 8 && number(pass1) == true) {
            message.innerHTML = "ok";
        } else {
            message.innerHTML = "Not ok";
        }
    });
})();

// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)

(() => {
    // your code here
    let i = 0;
    document.getElementById("pass-one").addEventListener(
        "input",
        () => {
            i++;
            document.getElementById("counter").innerHTML = i + "/10";
            if (i >= 10) {
                document
                    .getElementById("pass-one")
                    .setAttribute("onkeydown", "return false");
            }
        },
        false
    );
})();

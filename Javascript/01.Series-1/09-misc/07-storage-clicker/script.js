// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker

(() => {
    // your code here
    if (localStorage.getItem("count") == null) {
        localStorage.getItem("count", 0);
    }
    let n = document.getElementById("target");
    n.innerText = localStorage.getItem("count");

    document.getElementById("increment").addEventListener("click", () => {
        let count = localStorage.getItem("c");
        let n = document.getElementById("target");
        n.innerText = ++count;
        localStorage.setItem("c", count);
    });
})();

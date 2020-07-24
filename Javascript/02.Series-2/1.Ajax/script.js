(() => {
    //const btnReload = document.getElementById("reload");
    function Quote(data) {
        if (data === null || data === "undefied") {
            document.getElementById("quote").innerHTML = "Reload the page";
        } else {
            document.getElementById("img").src = data.photo;
            document.getElementById("text").innerHTML = data.quote;
            document.getElementById("author").innerHTML = data.author;
        }
    }

    fetch("https://thatsthespir.it/api")
        .then((result) => result.json())
        .then((data) => Quote(data));
})();

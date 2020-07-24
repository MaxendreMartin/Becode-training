// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)

(() => {
    // your code here
    let target = document.getElementById("target");
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let th = document.createElement("th");

    document.getElementById("target").appendChild(table);
    document.querySelector("table").appendChild(tr);
    document.querySelector("tr").appendChild(th);

    function tableCreate(IdTable) {
        let tableau = document.querySelector(IdTable);
        let row = tableau.insertRow(-1);
        let cell = row.insertCell(0);
    }

    function Row(col) {
        for (let i = 0; i < col; i++) {
            tableCreate("table");
        }
    }
    Row(10);
})();

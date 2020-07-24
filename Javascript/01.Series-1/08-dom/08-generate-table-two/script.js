// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {
    // your code here
    function generateTable(col) {
        let body = document.getElementsByTagName("main")[0];
        let table = document.createElement("table");
        let tablebody = document.createElement("tablebody");

        body.appendChild(table);
        table.appendChild(tablebody);
        table.setAttribute("border", "2");

        for (let i = 0; i < col; i++) {
            let row = document.createElement("tr");
            tablebody.appendChild(row);

            for (let j = 1; j < col + 1; j++) {
                let cell = document.createElement("td");
                let nbr = document.createTextNode(`${i * j}`);
                cell.appendChild(nbr);
                row.appendChild(cell);
            }
        }
    }
    generateTable(10);
})();

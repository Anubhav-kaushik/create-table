function createTable(data, sortData="rowWise", firstRowHeader=false) {
    const table = document.createElement("table");
    table.className = "table";
    let rowNumber = 0;
    if (sortData == "rowWise") {
        for (let row of data) {
            const row = document.createElement("tr");

            for (let col of row) {
                let element;
                if (firstRowHeader && rowNumber == 0) {
                    element = document.createElement("th");
                    element.innerHTML = col;
                } else {
                    element = document.createElement("td");
                    element.innerHTML = col;
                }

                row.append(element);
            }

            table.append(row);

            rowNumber++;
        }
    } else if (sortData == "columnWise") {
        null
    }

    return table;
}
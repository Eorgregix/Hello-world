let table = document.getElementById("myTable");

function growTable() {
    let row = table.insertRow(table.rows.length);
    let sizeTable = table.rows.length
    for (i=0; i<sizeTable; i++) {
        //for (j=0; j<sizeTable; j++){
            let cell = row.insertCell(i);
            cell.innerHTML = sizeTable;
        //}
    }

}
 growTable();
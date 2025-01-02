
function generateTable() {
    const range = document.getElementById('range').value;
    const num = document.getElementById('num').value;
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = '';

    if (isNaN(num) || num < 1 || num > 100) {
        tableContainer.innerHTML = 'Invalid input! Please enter a number between 1 and 100.';
        return;
    }
    
    const table = document.createElement('table');
    for (let i = 1; i <= range; i++) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.textContent = `${num}  x  ${i}  =`;
        const cell2 = document.createElement('td');
        cell2.textContent = num * i;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }
    tableContainer.appendChild(table);
}

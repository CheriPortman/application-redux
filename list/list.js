const tableListNode = document.getElementById('table-list');

const jsonObject = window.localStorage.getItem('submissions');
const allSubmits = JSON.parse(jsonObject);


for(let i = 0; i < allSubmits.length; i++) {
    const newRow = document.createElement('tr');
    // const nameTD = document.createElement('td');
    const wishNameTD = document.createElement('td');
    
    const tr = document.createElement('tr');
    const nameCell = document.createElement('td');
    const a = document.createElement('a');

    a.href = 'review.html?name=' + decodeURIComponent(allSubmits[i].name);
    a.textContent = allSubmits[i].name;

    wishNameTD.textContent = allSubmits[i].wishName;
    
    nameCell.appendChild(a);
    tr.appendChild(nameCell);  

    tableListNode.appendChild(newRow);
    newRow.appendChild(nameCell);
    newRow.appendChild(wishNameTD);
}
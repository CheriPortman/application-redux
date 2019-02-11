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
    
    // nameTD.textContent = allSubmits[i].name;
    wishNameTD.textContent = allSubmits[i].wishName;
    
    nameCell.appendChild(a);
    tr.appendChild(nameCell);  

    tableListNode.appendChild(newRow);
    newRow.appendChild(nameCell);
    // newRow.appendChild(nameTD);
    newRow.appendChild(wishNameTD);

    console.log('index name', [i], 'a.href', a.href);
}

//Once I get a list, I need to make the name value into an anchor 
    //ultimately, I want this to be the tag:
    //   <a href='window.location=/list.html?name=' "



//send user to the user detail

//then it's done!
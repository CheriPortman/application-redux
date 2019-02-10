const tableListNode = document.getElementById('table-list');

const jsonObject = window.localStorage.getItem('submissions');
const allSubmits = JSON.parse(jsonObject);


//I'm trying to take the data and put on the list
//this is an array - need to loop and do each one individually

for(let i = 0; i < allSubmits.length; i++) {
    const newRow = document.createElement('tr');
    const nameTD = document.createElement('td');
    const wishNameTD = document.createElement('td');
    
    nameTD.textContent = allSubmits[i].name;
    wishNameTD.textContent = allSubmits[i].wishName;
    
    tableListNode.appendChild(newRow);
    newRow.appendChild(nameTD);
    newRow.appendChild(wishNameTD);
}

console.log('allSubmits', allSubmits);

//Once I get a list, I need to make the name value into an anchor 
    //send user to the user detail

//then it's done!
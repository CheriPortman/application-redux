const tableListNode = document.getElementById('table-list');

const jsonObject = window.localStorage.getItem('submissions');
const allSubmits = JSON.parse(jsonObject);


for(let i = 0; i < allSubmits.length; i++) {
    const newRow = document.createElement('tr');
    const nameTD = document.createElement('td');
    const wishNameTD = document.createElement('td');
    
    //i need to construct the link for the nameCell. 
    //make a tr element for the entire row
    const tr = document.createElement('tr');
    //make a td element to hold the nameanchor
    const nameCell = document.createElement('td');
    //make an a tag element to create the link with
    const a = document.createElement('a');

    //a.href a is the constant, href is the property
    //decodeURIComponent() converts name string to browswer-speak
    a.href = 'list.html?name=' + decodeURIComponent(allSubmits[i].name);

    console.log ('a.href', a.href);

    nameTD.textContent = allSubmits[i].name;
    wishNameTD.textContent = allSubmits[i].wishName;
    
    tableListNode.appendChild(newRow);
    newRow.appendChild(nameTD);
    newRow.appendChild(wishNameTD);




}

//Once I get a list, I need to make the name value into an anchor 
    //ultimately, I want this to be the tag:
    //   <a href='window.location=/list.html?name=' "



//send user to the user detail

//then it's done!
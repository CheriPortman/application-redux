//grab my nodes
const name = document.getElementById('name');
const wishName = document.getElementById('wish-name');

const jsonSubmission = window.localStorage.getItem('submission');
const submission = JSON.parse(jsonSubmission);


//I have the singular submission on this page. 
//I want to get the data displayed on my page. 
//I have a results box id="results-box"

//I have my nodes for my two pieces of data. I need to create an element for each 
// I need to simply indicate the textContent for each of the ids thta I created with the data from submission



    name.textContent = submission.name;
    wishName.textContent = submission.wishName;

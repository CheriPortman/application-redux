const name = document.getElementById('name');
const wishName = document.getElementById('wish-name');

//I don't want one submission. I want submissions, the array.
const jsonSubmission = window.localStorage.getItem('submission');
const submission = JSON.parse(jsonSubmission);

name.textContent = submission.name;
wishName.textContent = submission.wishName;



//I get to this page. I have clicked a name that should populate here. 
//the unique info I get from this click is the value of the key of 'name'
//this value is up in the search bar!

// i need to get this value
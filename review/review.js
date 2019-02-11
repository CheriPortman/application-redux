const name = document.getElementById('name');
const wishName = document.getElementById('wish-name');

//check to see if I have data, and if so, parse it
const jsonSubmissions = window.localStorage.getItem('submissions');
let submissions = [];
if(jsonSubmissions) {
    submissions = JSON.parse(jsonSubmissions);
}
//here put an else to redirect to an ooops page with a link to home

//i have data. 
//now I need to see find the one that matches the one I want
//i need to search the url for the query, basically.

const searchParam = new URLSearchParams(window.location.search);
const nameToFind = searchParam.get('name');

console.log('nameToFind', nameToFind);
// name.textContent = submission.name;
// wishName.textContent = submission.wishName;



//I get to this page. I have clicked a name that should populate here. 
//the unique info I get from this click is the value of the key of 'name'
//this value is up in the search bar!

// i need to get this value
const name = document.getElementById('name');
const wishName = document.getElementById('wish-name');

const jsonSubmissions = window.localStorage.getItem('submissions');
let submissions = [];
if(jsonSubmissions) {
    submissions = JSON.parse(jsonSubmissions);
} else {
    window.location = '/';
}

const searchParam = new URLSearchParams(window.location.search);
const nameToFind = searchParam.get('name');

let submission = null;
for(let i = 0; i < submissions.length; i++) {
    if(nameToFind === submissions[i].name) {
        submission = submissions[i];
        break;
    }
}
console.log('submission', submission);
name.textContent = submission.name;
wishName.textContent = submission.wishName;

//the problem: I want to have the user land here after doing the form
//right now, the submission is figured out using the searchParam so that
//the link from the list is what drives populated table

//However, I need the most recently done form to populate from the review page redirection

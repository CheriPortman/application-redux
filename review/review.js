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
name.textContent = submission.name;
wishName.textContent = submission.wishName;
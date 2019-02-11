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

console.log('nameToFind', nameToFind);

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
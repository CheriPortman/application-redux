const name = document.getElementById('name');
const wishName = document.getElementById('wish-name');

const jsonSubmission = window.localStorage.getItem('submission');
const submission = JSON.parse(jsonSubmission);

name.textContent = submission.name;
wishName.textContent = submission.wishName;

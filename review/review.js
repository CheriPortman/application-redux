//grab my nodes
const name = document.getElementById('name');
const wishName = document.getElementById('wish-name');

const jsonSubmission = window.localStorage.getItem('submission');
const submission = JSON.parse(jsonSubmission);



name.textContent = submission.name;
wishName.textContent = submission.wishName;

//at this point I have my data on the results page!

//what do I want to do...
//i have my data showing on the review page
//i want to do what?

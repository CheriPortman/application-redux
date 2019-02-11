const name = document.getElementById('name');
const wishName = document.getElementById('wish-name');

let submissions = [] ;

document.addEventListener('submit', function() {
    const submission = {
        name: name.value,
        wishName: wishName.value
    };
    
    const jsonSubmissions = window.localStorage.getItem('submissions');

    if(jsonSubmissions) {
        submissions = JSON.parse(jsonSubmissions);
    }
    submissions.push(submission);

    const strungSubmission = JSON.stringify(submission);
    window.localStorage.setItem('submission', strungSubmission);

    const strungSubmissions = JSON.stringify(submissions);
    window.localStorage.setItem('submissions', strungSubmissions);
});
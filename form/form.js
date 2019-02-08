const name = document.getElementById('name');
const wishName = document.getElementById('wish-name');

document.addEventListener('submit', function(event) {
    event.preventDefault();

    const submission = {
        name: name.value,
        wishName: wishName.value
    };

    const strungSubmission = JSON.stringify(submission);

    window.localStorage.setItem('submission', strungSubmission);

    console.log(strungSubmission);
});
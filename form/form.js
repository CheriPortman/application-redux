const name = document.getElementById('name');
const wishName = document.getElementById('wish-name');

document.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submission = {
        name: name.value,
        wishName: wishName.value
    };

    console.log('submission', submission);

    const strungSubmission = JSON.stringify(submission);
    window.localStorage.setItem('submission', strungSubmission);
    //at this point I have a single submission in local storage

    let submissions = null;





//current task: get submission pushed into an object submissions 
    //happens before any stringifying.
        //first, need to check to see if there is an object submissions. 
            //if so, grab that object and parse it.
            //then, current submission is pushed to the submissions array
    //at this point, I should be able to 
        //console.log('submissions', submissions);
        //and get the JS side of data.
    //stringify and setItem.

});
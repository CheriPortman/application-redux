const name = document.getElementById('name');
const wishName = document.getElementById('wish-name');

let submissions = [] ;

document.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submission = {
        name: name.value,
        wishName: wishName.value
    };
    console.log('submission', submission);
    
    const jsonSubmissions = window.localStorage.getItem('submissions');

//step by step get local storage parsed and console.logged appropriately




    submissions.push(submission);
    console.log('submissions', submissions);


    // console.log('jsonSubmissions', jsonSubmissions);
    // let submissions = [];

    // if(jsonSubmissions) {
    //     submissions = JSON.parse(jsonSubmissions);
    // }

    
    // const strungSubmissions = JSON.stringify(submissions);
    // window.localStorage.setItem('submissions', strungSubmissions);
    
    // const strungSubmissions = JSON.stringify(submissions);

    // console.log('strungSubmissions', strungSubmissions);

    // window.localStorage.setItem('submissions', strungSubmissions);

    // console.log('submissions', submissions);
});
const form = document.getElementById('form');
const name = document.getElementById('name');
const wishName = document.getElementById('wish-name');

document.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('clicked');
    console.log(wishName.value);
});
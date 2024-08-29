// Select the icon element by its id
const icon = document.getElementById('myIcon');

// Define a function to show an alert when the icon is clicked
function showAlert() {
    alert('Added to cart!');
}

// Add a click event listener to the icon
icon.addEventListener('click', showAlert);


document.getElementById('aboutLink').addEventListener('click', function() {
    window.location.href = 'about_us.html'; 
});
document.getElementById('mapIcon').addEventListener('click', function() {
window.location.href = 'https://www.google.com/maps/dir//200+W+57th+St,+New+York,+NY+10019,+USA/@40.7654183,-73.985837,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c258f79c6cd655:0x26b3ead510fb9baa!2m2!1d-73.9806871!2d40.7654184?entry=ttu';
});


document.getElementById("searchIcon").addEventListener("click", function () {
var searchInput = document.getElementById("searchInput").value.toLowerCase();
switch (searchInput) {
case "rolex":
    window.location.href = "brands.html";
    break;
case "omega":
    window.location.href = "brands.html";
    break;
case "audemars piguet":
    window.location.href = "brands.html";
    break;
case "diesel":
    window.location.href = "brands.html";
    break;
case "citizen":
    window.location.href = "brands.html";
    break;
case "kenneth cole":
    window.location.href = "brands.html";
    break;
case "ulysse nardin":
    window.location.href = "brands.html";
    break;
case "geneva":
    window.location.href = "brands.html";
    break;
case "goldlis":
    window.location.href = "brands.html";
    break;
    case "montblanc":
    window.location.href = "brands.html";
    break;
default:
    alert("No results found for: " + searchInput);
}
});
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('redirectButton');

// When the user clicks the button, open the modal
btn.onclick = function() {
modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
modal.style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = 'none';
}
}
//your JS code here. If required.
// Get the modal and button
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};

// Close the modal
function closeModal() {
    modal.style.display = "none";
}
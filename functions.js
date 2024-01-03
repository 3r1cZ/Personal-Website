let open = false;
// Transition for expanding text
function smoothTransition() {
  const container = document.querySelector(".expansion-container");
  const text = document.querySelector(".expanding-text");
  const mainPage = document.querySelector(".page-intro");
  const button = document.querySelector(".expanding-button");
  if (open == false) {
    container.style.display = "block";
    text.style.display = "block";
    mainPage.style.height = "470px";
    button.style.background = "antiquewhite";
    open = true;
  } else {
    container.style.display = "none";
    text.style.display = "none";
    mainPage.style.height = "400px";
    button.style.background = "cornsilk";
    open = false;
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

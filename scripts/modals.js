"use strict";

/*--MOON MODAL--*/
let moonModal = document.getElementById("moonModal");
let moonBtn = document.getElementById("moonButton");
let moonSpan = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
moonBtn.onclick = function () {
  moonModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
moonSpan.onclick = function () {
  moonModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == moonModal) {
    moonModal.style.display = "none";
  }
};

/*--EARTH MODAL--*/
let earthModal = document.getElementById("earthModal");
let earthBtn = document.getElementById("earthButton");
let earthSpan = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
earthBtn.onclick = function () {
  earthModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
earthSpan.onclick = function () {
  earthModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == earthModal) {
    earthModal.style.display = "none";
  }
};

/*--MARS MODAL--*/
let marsModal = document.getElementById("marsModal");
let marsBtn = document.getElementById("marsButton");
let marsSpan = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
marsBtn.onclick = function () {
  marsModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
marsSpan.onclick = function () {
  marsModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == marsModal) {
    marsModal.style.display = "none";
  }
};

/*--GALAXY MODAL--*/
let galaxyModal = document.getElementById("galaxyModal");
let galaxyBtn = document.getElementById("galaxyButton");
let galaxySpan = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
galaxyBtn.onclick = function () {
  galaxyModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
galaxySpan.onclick = function () {
  galaxyModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == galaxyModal) {
    galaxyModal.style.display = "none";
  }
};

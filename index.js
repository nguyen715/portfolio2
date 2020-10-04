function myFunction(x) {
  x.classList.toggle("change");
}

function slideOut(x) {
  x.classList.toggle("sliding");
}

function toggleDiv() {
  var x = document.getElementById("slide-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

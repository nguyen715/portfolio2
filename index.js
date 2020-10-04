function myFunction(y) {
  y.classList.toggle("change");
}

function slideOut(x) {
  x.classList.toggle("sliding");
}

function toggleDiv() {
  // y.classList.toggle("change");
  var x = document.getElementById("slide-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  
}

function myFunction(y) {
  y.classList.toggle("change");
}

function slideOut(x) {
  x.classList.toggle("sliding");
}

function toggleDiv() {
  // y.classList.toggle("change");
  var x = document.getElementById("slide-menu");
  var y = document.getElementById("nav-ham")
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }

  
}

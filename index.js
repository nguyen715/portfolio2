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

function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("box").style.marginLeft = "100%";
}
  
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("box").style.marginLeft= "0";
}

// $('#slide-menu').on("click", "#nav-ham", function(event) {
//   event.preventDefault();
//   console.log('clicked')

// }

// })

// $("#slide-menu").slideReveal({
//   trigger: $("#nav-ham"),
//   push: false,
//   overlay: true
// });

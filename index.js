function openNav() {
  document.getElementById("mySidebar").style.clipPath =
    "circle(80% at 40% 50%)";
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("box").style.marginLeft = "100%";
}

function closeNav() {
  document.getElementById("mySidebar").style.clipPath =
    "circle(10% at 100% 0%)";
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("box").style.marginLeft = "0";
}

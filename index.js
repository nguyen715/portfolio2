function openNav() {
  document.getElementById("mySidebar").style.clipPath = "circle(80% at 40% 50%)";
  document.getElementById("mySidebar").style.width = "80%";
  document.getElementById("box").style.marginLeft = "80%";
}
  
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("box").style.marginLeft= "0";
}

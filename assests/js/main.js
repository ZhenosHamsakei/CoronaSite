window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var home = document.getElementById("home");
var sticky = navbar.offsetTop;
var totop = document.getElementById("to-top-btn");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top")
    navbar.classList.add("nav-back")
    home.style.padding = "70px 0 0 0"
    totop.classList.add("d-block")
    totop.classList.remove("d-none")
  } 
  if (window.pageYOffset <= sticky){
    navbar.classList.remove("fixed-top")
    navbar.classList.remove("nav-back")
    home.style.padding = "0 0 0 0"
    totop.classList.add("d-none")
    totop.classList.remove("d-block")
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
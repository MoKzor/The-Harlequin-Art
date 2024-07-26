// Quand l'utilisateur scroll, j'appelle ma fonction
window.onscroll = function() {stickyNav()};

// Je récupère ma navbar dans le html
var navbar = document.getElementById("navbar");

//Obtenir la position de la navbar
var sticky = navbar.offsetTop;

// Ajout de la classe collante à la navbar lorsque la position de défilement est atteinte. J'enlève le "sticky" mode quand je quitte la position de défilement
function stickyNav() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
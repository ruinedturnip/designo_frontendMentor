const mobileNav = document.getElementById("mobileNav");
const desktopNav = document.getElementById("desktopNav");

const menuBar = document.getElementById("menu-bar");
const overlay = document.getElementById("overlay");

function toggleNav() {
  menuBar.classList.toggle("change");
  overlay.classList.toggle("hide");
}

if (screen.width <= 896) {
  desktopNav.classList.toggle("hide");
  mobileNav.classList.toggle("hide");
  menuBar.classList.toggle("hide");
  menuBar.addEventListener("click", toggleNav);
}

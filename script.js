const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const noScroll = document.querySelector(".scroll");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
    noScroll.classList.toggle("no-scroll");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
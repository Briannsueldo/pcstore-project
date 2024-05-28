const hamburger = document.querySelector(".hamburger-icon");
const mainMenu = document.querySelector(".main-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainMenu.classList.toggle("active");
})
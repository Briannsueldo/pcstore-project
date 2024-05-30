const hamburger = document.querySelector(".hamburger-icon");
const mainMenu = document.querySelector(".main-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainMenu.classList.toggle("active");
})

//

const problemContainer = document.querySelector(".problem-container");
const problemSpan = document.querySelector(".problem-container span");
const problemContainerMenu = document.querySelector(".problem-options-container");
const selectOption = document.querySelector(".select-option");
const problemOption = document.querySelectorAll(".problem-option");

selectOption.addEventListener("click", () => {
    selectOption.classList.toggle("active");
    problemContainer.classList.toggle("active");
    problemContainerMenu.classList.toggle("active");
})


document.addEventListener('DOMContentLoaded', function () {
    problemOption.forEach(option => {
        option.addEventListener("click", function () {
            
            problemContainer.textContent = this.textContent;

            problemContainer.style.fontWeight = '500';
            problemContainer.style.color = '#212121';

            selectOption.classList.remove("open");
        })
    })
})



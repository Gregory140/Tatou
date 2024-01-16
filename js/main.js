const burgerButton = document.querySelector("#burger button");
const mainMenu = document.getElementsByClassName("main-menu")[0];





burgerButton.addEventListener("click", function(){
    mainMenu.classList.toggle("active");
});
const burgerButton = document.getElementById("burger");
const mainMenu = document.getElementsByClassName("main-menu")[0];





burgerButton.addEventListener("click", function(){
    mainMenu.style.display = "block";
});
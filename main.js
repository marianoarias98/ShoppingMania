const menuButtom = document.querySelector(".nav__menu");
const menuItem = document.getElementsByClassName("nav__item");

menuButtom.addEventListener("click",showHideMenu)


for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click",showHideMenu)
}

function showHideMenu (){
    if (window.innerWidth <768){
        let menuItems = document.querySelector(".nav__items").classList.toggle("active");

        let hamburguerIcon = document.querySelector(".menu__icon").classList.toggle("hide");
    
        let arrrowIcon = document.querySelector(".back__icon").classList.toggle("show");
    }
   
}
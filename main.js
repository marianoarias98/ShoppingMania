const menuButtom = document.querySelector(".nav__menu");
const menuItem = document.querySelectorAll(".nav__item");

menuButtom.addEventListener("click",()=>{
    let menuItems = document.querySelector(".nav__items").classList.toggle("active");

    let hamburguerIcon = document.querySelector(".menu__icon").classList.toggle("hide");

    let arrrowIcon = document.querySelector(".back__icon").classList.toggle("show");
})


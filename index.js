const nav = document.querySelector("nav");

const menuOpenBtn = document.querySelector("#menu-btn");

const menuCloseBtn = document.querySelector("#menu-close");

menuOpenBtn.addEventListener("click", function(){
    nav.classList.add("open")
});

menuCloseBtn.addEventListener("click", function(){
    nav.classList.remove("open")
});
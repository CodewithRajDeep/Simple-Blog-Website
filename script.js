let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

//main header onclick
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

//searchIcon onclick toggle
searchIcon.onclick = () => {
    searchIcon.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
}
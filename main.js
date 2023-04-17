function

const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('nav ul');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

hamburgerMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show-menu');
});
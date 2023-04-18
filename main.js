
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('nav ul');
const dropdownMenu = document.querySelector('.dropdown-menu');
const hamburgerMenuIcon = document.querySelector('.hamburger-menu');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    dropdownMenu.classList.toggle('show-menu');
    hamburgerMenuIcon.classList.toggle('hide-burger');
});

document.addEventListener('click', (event) => {
    const isClickInsideNav = event.target.closest('nav') !== null;
    const isClickInsideDropdown = event.target.closest('.dropdown-menu') !== null;
    if (!isClickInsideNav && !isClickInsideDropdown) {
        navLinks.classList.toggle('active');
        dropdownMenu.classList.toggle('show-menu');
        hamburgerMenuIcon.classList.toggle('hide-burger');
    }
});
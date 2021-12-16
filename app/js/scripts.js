const btnHamburger = document.getElementById('btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const headerMenu = document.querySelector('.header__menu');

btnHamburger.addEventListener('click', function() {
    if(header.classList.contains('open')) { //close Hamburger Menu
        body.classList.remove('no-scroll')
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        headerMenu.classList.remove('fade-in');
        headerMenu.classList.add('fade-out');
    } else{ // open Hamburger Menu
        body.classList.add('no-scroll')
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        headerMenu.classList.remove('fade-out');
        headerMenu.classList.add('fade-in');
    }
})
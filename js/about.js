const crossMenu = document.querySelector('.cross--menu');
const menu = document.querySelector('.menu');
const wrapper = document.querySelector('.wrapper-content');

menu.addEventListener('click', openMenu);
crossMenu.addEventListener('click', closeMenu);

function openMenu() {
    let openMenu = document.querySelector('.open-menu');
    openMenu.classList.remove('closed-menu');
    wrapper.style.display = 'none'; 
}

function closeMenu() {
    let openMenu = document.querySelector('.open-menu');
    openMenu.classList.add('closed-menu');
    wrapper.style.display = 'flex';
}
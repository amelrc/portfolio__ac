
let cross = document.querySelector('.cross');
let myPicture = document.querySelector('.picture');
const crossMenu = document.querySelector('.cross--menu');
const menu = document.querySelector('.menu');
const wrapper = document.querySelector('.wrapper__left-side--full');

menu.addEventListener('click', openMenu);
crossMenu.addEventListener('click', closeMenu);

function openMenu() {

    let openMenu = document.querySelector('.open-menu');

    openMenu.classList.remove('hidden-test');
    wrapper.style.display = 'none';
  
}

function closeMenu() {

    let openMenu = document.querySelector('.open-menu');

    openMenu.classList.add('hidden-test');
    wrapper.style.display = 'flex';

}










setTimeout(function(){
  let header = document.querySelector('.about__header');
  let subHeader = document.querySelector('.about__sub-header');
  let content = document.querySelector('.about__content');
  
  // header.style.marginTop = '70px';
  header.style.visibility = 'visible';

  // subHeader.style.marginTop = '-30px';
  subHeader.style.visibility = 'visible';

  // content.style.marginTop = '-150px';
  content.style.visibility = 'visible';
}, 0);

setTimeout(function(){
  
  // myPicture.style.marginBottom = '10px';
  myPicture.style.visibility = 'visible';
}, 0)

setTimeout(function(){ 
  let aboutBig = document.querySelector('.bg-about');
  aboutBig.classList.remove('hidden');
  aboutBig.style.opacity = '0.06';
}, 0);
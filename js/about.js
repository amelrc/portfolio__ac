
let cross = document.querySelector('.cross');

setTimeout(function(){
  let header = document.querySelector('.about__header');
  let subHeader = document.querySelector('.about__sub-header');
  let content = document.querySelector('.about__content');
  
  header.style.marginTop = '140px';
  header.style.visibility = 'visible';

  subHeader.style.marginTop = '0';
  subHeader.style.visibility = 'visible';

  content.style.marginTop = '-170px';
  content.style.visibility = 'visible';
}, 0);

setTimeout(function(){
  let myPicture = document.querySelector('.picture');
  myPicture.style.marginBottom = '10px';
  myPicture.style.visibility = 'visible';
}, 0)

setTimeout(function(){ 
  let aboutBig = document.querySelector('.bg-about');
  aboutBig.classList.remove('hidden');
  aboutBig.style.opacity = '0.06';
}, 0);

document.querySelector('.container__body').addEventListener("scroll", myFunction);

function myFunction() {
  
  if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
    console.log('hello')
  }
}
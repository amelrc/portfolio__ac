
let cross = document.querySelector('.cross');
let myPicture = document.querySelector('.picture');

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
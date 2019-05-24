// import leftSide from "./left__side.js";

let arrow = document.querySelector('.arrow__image');
let leftSide = document.querySelector('.wrapper__left-side');
let transition = document.querySelectorAll('.transition-left');
let projects = document.querySelector('.wrapper__projects');

arrow.addEventListener('click', arrowClick);

function arrowClick() {
    arrow.style.display = 'none';
    leftSide.style.width = '100%';
    leftSide.style.backgroundColor = '#32820A';
    projects.classList.remove('wrapper__projects')
    for (let i = 0; i < transition.length; i++) {
        transition[i].style.left = '334px';
    }
    setTimeout(function(){
        window.location.replace('./about.html')
    }, 800); 
}

///////////////////////

const arr = ['../img/p3.jpg','../img/cat.png','../img/moon.png', '../img/butterflies.jpg', '../img/me.png'];
let index = 0;
const container = document.querySelector('.container__body');
let savedNum;
const images = document.querySelector('#images');

const up = () => {
    console.log(arr[index])
    images.setAttribute('src', arr[index--])
    
    if(index < 0){
        console.log("what is this")
        index = 4
    }
}
    
const down = () => {
    console.log(arr[index])
  
    
    images.setAttribute('src', arr[index++])
    if(index > 4){index = 0}
      
}

container.addEventListener('wheel', (e) => {
    console.log(savedNum, "hereeeeee")
      savedNum = e.deltaY;
      savedNum < 0 ? up() : down()
});







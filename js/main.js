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
    }, 1000); 
}








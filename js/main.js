const image = document.getElementById('image');
const btnLeft = document.querySelector('.project-btn--left');
const btnRight = document.querySelector('.project-btn--right');
let index = 1;
let array = [
    "../img/rubric-slider1.png",
    "../img/rubric-slider2.png", 
    "../img/rubric-slider3.png",
    "../img/rubric-slider4.png",
    "../img/rubric-slider5.png",
];
 
const crossMenu = document.querySelector('.cross--menu');
const menu = document.querySelector('.menu');
const modifiers = [
    'background--1',
    'background--2',
    'background--3',
    'background--4',
    'background--5'
];

let bg1 = document.querySelector('.container__body');
let headerBody = document.querySelector('.header-body');
let projects = document.querySelectorAll('.project');
let wrapperProjects = document.querySelector('.wrapper__projects');

menu.addEventListener('click', openMenu);

function openMenu() {
    let openMenu = document.querySelector('.open-menu');
    openMenu.classList.remove('closed-menu');
    headerBody.classList.add('closed-menu');
    wrapperProjects.classList.add('closed-menu');
}

// Projects Nav
projects.forEach(project => {
    project.addEventListener('click', (el) => navClick(el))
});

if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    projects.forEach(project => {
        project.addEventListener('mouseover', (el) => navHover(el))
    });

    projects.forEach(project => {
        project.addEventListener('mouseout', (el) => navOutHover(el))
    });
}
    
function navOutHover(el) {
    headerBody.classList.remove('hidden');
    modifiers.forEach(bgClass => {
        const projectNumber = el.currentTarget.classList[1].charAt(9);
        const classNumber = bgClass.charAt(12);
        (projectNumber === classNumber) ? bg1.classList.remove(bgClass) : bg1.classList.add('container__body');
    });
}

function navHover(el) {
    const showLink = el.currentTarget.children[0];
    headerBody.classList.add('hidden');
    setTimeout(function() {
        showLink.classList.remove('hidden');
    }, 10);
    modifiers.forEach(bgClass => {
        const projectNumber = el.currentTarget.classList[1].charAt(9);
        const classNumber = bgClass.charAt(12);
        (projectNumber === classNumber) ? bg1.classList.add(bgClass) : bg1.classList.remove(bgClass);
    });
}

function navClick(el) {
    headerBody.classList.add('hidden');
    projects.forEach(project => {
        if (project === el.currentTarget) {
            project.children[0].classList.remove('hidden');
        } else {
            project.children[0].classList.add('hidden');
        }
    })

    modifiers.forEach(bgClass => {
        const projectNumber = el.currentTarget.classList[1].charAt(9);
        const classNumber = bgClass.charAt(12);
        
       (projectNumber === classNumber) ? bg1.classList.add(bgClass) : bg1.classList.remove(bgClass);
       
    }); 
}

bg1.addEventListener('click', (e) => {
    let projectBG = bg1.classList[1];
   
    if (e.target === e.currentTarget || e.target === bg1.children[2]) {
        bg1.classList.remove(projectBG);
        headerBody.classList.remove('hidden');  
    }   
});


// Slider
function previous(){
    image.setAttribute('src', array[index--])
    if(index < 0){
        index = 4
    }
}

function next() {
    image.setAttribute('src', array[index++])
    if(index > 4){index = 0}
} 

document.addEventListener('keydown', (event) => {
    const key = event.keyCode;
    const left = key == '37';
    const right = key == '39';
    return left ? previous() 
         : right ? next()
         : '';
});

btnLeft.addEventListener('click', previous);
btnRight.addEventListener('click', next);


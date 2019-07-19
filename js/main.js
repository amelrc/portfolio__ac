// import {Project} from './project.js';

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
crossMenu.addEventListener('click', closeMenu);

function openMenu() {
    console.log('menu')
    let openMenu = document.querySelector('.open-menu');
    openMenu.classList.remove('closed-menu');
    headerBody.classList.add('closed-menu');
    wrapperProjects.classList.add('closed-menu');
}

function closeMenu() {
    let openMenu = document.querySelector('.open-menu');
    openMenu.classList.add('closed-menu');
    headerBody.classList.remove('closed-menu');
    wrapperProjects.classList.remove('closed-menu');
}

// Projects Nav

projects.forEach(project => {
    project.addEventListener('click', (el) => navClick(el))
});

projects.forEach(project => {
    project.addEventListener('mouseover', (el) => navHover(el))
});

projects.forEach(project => {
    project.addEventListener('mouseout', (el) => navOutHover(el))
});

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
        } else if (project.children.length > 0) {
            project.children[0].classList.add('hidden');
        }
    })

    modifiers.forEach(bgClass => {
        const projectNumber = el.currentTarget.classList[1].charAt(9);
        const classNumber = bgClass.charAt(12);
        
       (projectNumber === classNumber) ? bg1.classList.add(bgClass) : bg1.classList.remove(bgClass);
       
    }); 
}

function hideLink() {
    projects.forEach(project => {
        if(project.children.length > 0) {
            if(!project.children[0].classList.contains('hidden')) {
                project.children[0].classList.add('hidden');
            }
        }
    })
}

bg1.addEventListener('click', (e) => {

    let projectBG = bg1.classList[1];
    hideLink()

    if (e.target === e.currentTarget || e.target === bg1.children[2]) {
        
        hideLink()
        bg1.classList.remove(projectBG);
        headerBody.classList.remove('hidden');  
    }   
});

// const project = new Project();


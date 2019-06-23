
let bg1 = document.querySelector('.container__body');
let headerBody = document.querySelector('.header-body');
let projects = document.querySelectorAll('.project');
let projectLink = document.querySelectorAll('.p-link');
let wrapperProjects = document.querySelector('.wrapper__projects')

const crossMenu = document.querySelector('.cross--menu');
const menu = document.querySelector('.menu');
const modifiers = [
    'background--1',
    'background--2',
    'background--3',
    'background--4',
    'background--5'
];

menu.addEventListener('click', openMenu);
crossMenu.addEventListener('click', closeMenu);

function openMenu() {

    let openMenu = document.querySelector('.open-menu');

    openMenu.classList.remove('hidden-test');
    headerBody.classList.add('hidden-test');
    wrapperProjects.classList.add('hidden-test');
}

function closeMenu() {

    let openMenu = document.querySelector('.open-menu');

    openMenu.classList.add('hidden-test');
    headerBody.classList.remove('hidden-test');
    wrapperProjects.classList.remove('hidden-test');

}

projects.forEach(project => {
    project.addEventListener('click', (el) => navClick(el))
});

projects.forEach(project => {
    project.addEventListener('mouseenter', (el) => navHover(el))
});

projects.forEach(project => {
    project.addEventListener("mouseleave", (el) => navOutHover(el))
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
 
    setTimeout(function() {
        headerBody.classList.add('hidden');
        showLink.classList.remove('hidden');
    }, 10);

    modifiers.forEach(bgClass => {

        const projectNumber = el.currentTarget.classList[1].charAt(9);
        const classNumber = bgClass.charAt(12);
        
        (projectNumber === classNumber) ? bg1.classList.add(bgClass) : bg1.classList.remove(bgClass);
        
    });
}

function navClick(el) {

    const showLink = el.currentTarget.children[0];
    
    headerBody.classList.add('hidden');
    showLink.classList.remove('hidden');
    
    modifiers.forEach(bgClass => {
        
        const projectNumber = el.currentTarget.classList[1].charAt(9);
        const classNumber = bgClass.charAt(12);
    
        (projectNumber === classNumber) ? bg1.classList.add(bgClass) : bg1.classList.remove(bgClass);
        
    });
}



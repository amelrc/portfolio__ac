
let bg1 = document.querySelector('.container__body');
let headerBody = document.querySelector('.header-body');
let projects = document.querySelectorAll('.project');
let projectLink = document.querySelectorAll('.p-link');
const modifiers = ['background--1','background--2','background--3','background--4','background--5']


projects.forEach(project => {
    project.addEventListener('click', (el) => navClick(el))
});

projects.forEach(project => {
    project.addEventListener('mouseover', (el) => navHover(el))
});

function navHover(el) {
    const showLink = el.path[0].children[0];
    console.log(showLink);
   
    headerBody.classList.add('hidden');
    showLink.classList.remove('hidden');

    modifiers.forEach(bgClass => {
        const projectNumber = el.path[0].classList[1].charAt(9);
        const classNumber = bgClass.charAt(12);
        
        console.log('entered the zone', projectNumber);
        
        (projectNumber === classNumber) ? bg1.classList.add(bgClass) : bg1.classList.remove(bgClass);
        
    });
}

function navClick(el) {
    const showLink = el.path[0].children[0];

    headerBody.classList.add('hidden');
    showLink.classList.remove('hidden');
    
    modifiers.forEach(bgClass => {

        const projectNumber = el.path[0].classList[1].charAt(9);
        const classNumber = bgClass.charAt(12);

        (projectNumber === classNumber) ? bg1.classList.add(bgClass) : bg1.classList.remove(bgClass);
        
    });
}



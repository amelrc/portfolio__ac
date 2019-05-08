
export default class Cat {
    constructor(){


        this.arrow = document.querySelector('.arrow__image');
        // arrow.onclick = function() {arrowClick()};
        this.leftSide = document.querySelector('.wrapper__left-side');
        this.leftSideFull = document.querySelector('.wrapper__left-side--full');
        this.leftSideOpen = document.querySelector('.wrapper__left-side--open');
        this.cross = document.querySelector('.cross');
        this.test = document.querySelector('.test');
        this.projects = document.querySelector('.wrapper__projects');
        this.introFive = document.querySelector('.intro__five');
        this.introAnimation = document.querySelector('.intro__five--animation');
        
        // this.leftSideFull.style.display = "none";
        this.test.classList.remove('test');
        // introAnimation.classList.remove('intro__three--animation');
        // leftSideOpen.classList.remove('wrapper__left-side--open');
        // arrow.addEventListener('click', hello => leftSide.classList.toggle('test'));
        this.arrow.addEventListener("click", () => {this.open()});
        // this.cross.addEventListener("click", () => {this.crossClick()});

        // function arrowClick() {
        //     console.log("arrow clicked");
        //     const leftSide = document.querySelector('.wrapper__left-side');
        //     const projects = document.querySelector('.wrapper__projects');
        //     leftSide.style.display = "none";
        //     projects.style.display = "none";

        //     leftSide.classList.toggle('test')
        //     console.log(leftSide.classList.toggle('test'));
        //     leftSideFull.style.display = "none";
        // }
    }
    
    crossClick() {
        // console.log("cross clicked");
        // this.projects.classList.add('wrapper__projects');
        // this.leftSide.classList.add('test');
        // this.leftSide.style.display = 'flex';
        // this.leftSideFull.style.display = 'none';
        // this.test.classList.remove('test');
    }
    about() {
        // this.leftSide.classList.remove('test');
        // this.leftSide.style.display = 'none';
        // this.leftSideFull.style.display = 'flex';
    }
    open() {
        console.log("hello");
        // this.leftSide.classList.add('test');
        // this.projects.classList.remove('wrapper__projects');

        // setTimeout(about, 500)

        // const intro = document.querySelector('.intro');
        // intro.style.display = 'none';
        // arrow.style.display = 'none';
        // leftSide.style.display = 'none';
        // leftSideFull.style.display = 'flex';
        // leftSide.classList.remove('wrapper__left-side')
        // leftSideFull.classList.remove('wrapper__left-side--full');
    }
}
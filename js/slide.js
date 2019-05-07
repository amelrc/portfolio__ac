

// Start Slide
// let arr = ['0.png','1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png'];
// let index = 0;
// let image = document.getElementById('image');

// setInterval(function(){
//     console.log(image.setAttribute('src', arr[index++]));
//     if(index === arr.length){
//             index = 0
//     }
// }, 2000)

// function previous(){
//     image.setAttribute('src', arr[index--])
//     if(index < 0){index = 12}
// }

// function next(){
//     image.setAttribute('src', arr[index++])
//     if(index > 12){index = 0}
// }

// next = () => {
//     image.setAttribute('src', arr[index++])
//     return (index > 4) ? 0 : ''
// }

// document.addEventListener('keydown', (event) => {
//     const key = event.keyCode;
//     const left = key == '37';
//     const right = key == '39';
//     return left ? previous() 
//          : right ? next()
//          : '';
//   });
//End Slide

//Start Arrow
const arrow = document.querySelector('.arrow__image');
// arrow.onclick = function() {arrowClick()};
const leftSide = document.querySelector('.wrapper__left-side');
const leftSideFull = document.querySelector('.wrapper__left-side--full');
const leftSideOpen = document.querySelector('.wrapper__left-side--open');
const cross = document.querySelector('.cross').onclick = function() {crossClick()};
const test = document.querySelector('.test')
const projects = document.querySelector('.wrapper__projects');

const introFive = document.querySelector('.intro__five');
const introAnimation = document.querySelector('.intro__five--animation');

leftSideFull.style.display = "none";
test.classList.remove('test');

// introAnimation.classList.remove('intro__three--animation');


// leftSideOpen.classList.remove('wrapper__left-side--open');

// arrow.addEventListener('click', hello => leftSide.classList.toggle('test'));

arrow.addEventListener("click", open)
function open() {
   
    leftSide.classList.add('test');
    projects.classList.remove('wrapper__projects');
    
    setTimeout(about, 500)
    function about() {
        leftSide.classList.remove('test');
        leftSide.style.display = 'none';
        leftSideFull.style.display = 'flex';
    }


   
    
    // const intro = document.querySelector('.intro');
    // intro.style.display = 'none';
    // arrow.style.display = 'none';
    // leftSide.style.display = 'none';
    // leftSideFull.style.display = 'flex';
    // leftSide.classList.remove('wrapper__left-side')
    // leftSideFull.classList.remove('wrapper__left-side--full');
    
    
   
}


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

function crossClick() {
    console.log("cross clicked");
    projects.classList.add('wrapper__projects');
    leftSide.classList.add('test');
    leftSide.style.display = 'flex';
    leftSideFull.style.display = 'none';
    test.classList.remove('test');
}











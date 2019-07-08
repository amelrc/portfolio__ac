let image = document.getElementById('image');
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

btnLeft.addEventListener('click', previous);
btnRight.addEventListener('click', next);

function previous(){
    image.setAttribute('src', array[index--])
    if(index < 0){index = 4}
}

function next(){
    console.log('clicked')
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
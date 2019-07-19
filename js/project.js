export class Project {
    constructor() {
        this.image = document.getElementById('image');
        this.btnLeft = document.querySelector('.project-btn--left');
        this.btnRight = document.querySelector('.project-btn--right');
        this.index = 1;
        this.array = [
            "../img/rubric-slider1.png",
             "../img/rubric-slider2.png", 
             "../img/rubric-slider3.png",
             "../img/rubric-slider4.png",
             "../img/rubric-slider5.png",
            ];
        this.btnLeft.addEventListener('click', this.previous);
        this.btnRight.addEventListener('click', this.next);

        document.addEventListener('keydown', (event) => {
            const key = event.keyCode;
            const left = key == '37';
            const right = key == '39';
            return left ? this.previous() 
                 : right ? this.next()
                 : '';
          });
        }

    previous = () => {
        this.image.setAttribute('src', this.array[this.index--])
        if(this.index < 0){this.index = 4}
    }

    next = () => {
        this.image.setAttribute('src', this.array[this.index++])
        if(this.index > 4){this.index = 0}
    }
}
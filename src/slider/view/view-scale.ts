export default class ViewScale {
  constructor(root, direction) {
    this.root = root;
    this.direction = direction;
  }

  init(min max) {
    this.template = this.direction === 'horizontal' ? `<div class='fsd-slider__scale'></div>` : `<div class='fsd-slider__scale fsd-slider__scale_vertical'></div>`;
    this.root.insertAdjacentHTML('beforeend', this.template);
    this.element = this.root.querySelector('.fsd-slider__scale');

    let step = (max - min) / 4;
    
    if (this.direction === 'horizontal') {
      for (let i = 0; i<=100; i+=5) {
        if (i % 25 === 0) {
          this.element.insertAdjacentHTML('beforeend', `<div class='fsd-slider__stroke' style='left: ${i}%;'></div><div class='fsd-slider__scale-number' style='left: ${i}%;'></div>`);
          let numbers =this.element.querySelectorAll('.fsd-slider__scale-number');
          let number = numbers.[numbers.length - 1];
  
          i == 0 
            ? number.innerHTML = min
            : number.innerHTML = min + i / 25 * step;
        } else {
          this.element.insertAdjacentHTML('beforeend', `<div class='fsd-slider__stroke fsd-slider__stroke_small' style='left: ${i}%;'></div>`);
          
        }
      }
    } else {
      for (let i = 0; i<=100; i+=5) {
        if (i % 25 === 0) {
          this.element.insertAdjacentHTML('beforeend', `<div class='fsd-slider__stroke fsd-slider__stroke_vertical' style='top: ${i}%;'></div><div class='fsd-slider__scale-number fsd-slider__scale-number_vertical' style='top: ${i}%;'></div>`);
          let numbers =this.element.querySelectorAll('.fsd-slider__scale-number');
          let number = numbers.[numbers.length - 1];
  
          i == 0 
            ? number.innerHTML = min
            : number.innerHTML = min + i / 25 * step;
        } else {
          this.element.insertAdjacentHTML('beforeend', `<div class='fsd-slider__stroke fsd-slider__stroke_small-vertical' style='top: ${i}%;'></div>`);
          
        }
      }
    }

  }

  update(min, max) {
    let step = (max - min) / 4;
    let numbers = this.element.querySelectorAll('.fsd-slider__scale-number');
    
    for (let i = 0; i<=4; i+=1) {
      
        i == 0 
          ? numbers[i].innerHTML = min
          : numbers[i].innerHTML = min + i * step;
      }
    
  }

  getWidth() {
    return this.element.getBoundingClientRect().width;
  }

  getLeftCoordinate() {
    return this.element.getBoundingClientRect().left;
  }

  getHeight() {
    return this.element.getBoundingClientRect().height;
  }

  getTopCoordinate() {
    return this.element.getBoundingClientRect().top;
  }
}
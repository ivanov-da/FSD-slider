export default class ViewHandle {
  constructor(root, direction) {
    this.root = root;
    this.direction = direction;
    
  }

  init() {
    this.template = this.direction === 'horizontal' ? `<div class='fsd-slider__handle'></div>` : `<div class='fsd-slider__handle fsd-slider__handle_vertical'></div>`;
    this.root.insertAdjacentHTML('beforeend', this.template);
    this.element = this.root.querySelector('.fsd-slider__handle');
  }

  getWidth() {
    return this.element.getBoundingClientRect().width;
  }

  getLeftCoordinate() {
    return this.element.getBoundingClientRect().left;
  }

  getTopCoordinate() {
    return this.element.getBoundingClientRect().top;
  }
  
  setPosition(position) {
    if (this.direction === 'horizontal') {
      this.element.style.left = position * 100 + '%';
    } else {
      this.element.style.top = position * 100 + '%';
    }
  }
}
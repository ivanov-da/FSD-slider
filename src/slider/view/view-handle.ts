export default class ViewHandle {
  constructor(root, direction) {
    this.root = root;
    this.direction = direction;
    
  }

  init(position, lineWidth) {
    this.template = this.direction === 'horizontal' ? `<div class='fsd-slider__handle'></div>` : `<div class='fsd-slider__handle fsd-slider__handle_vertical'></div>`;
    this.root.insertAdjacentHTML('beforeend', this.template);
    let elements = this.root.querySelectorAll('.fsd-slider__handle');
    this.element = elements.[elements.length - 1];

    let startPosition = position - this.getWidth() / 2 / lineWidth;
    this.setPosition(startPosition);
    console.log("🚀 ~ file: view-handle.ts ~ line 29 ~ ViewHandle ~ init ~ startPosition", startPosition)
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
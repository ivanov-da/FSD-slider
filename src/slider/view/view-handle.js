export default class ViewHandle {
  constructor(root) {
    this.root = root;
    this.template = `<div class='fsd-slider__handle'></div>`;
  }

  init() {
    this.root.insertAdjacentHTML('beforeend', this.template);
    this.element = this.root.querySelector('.fsd-slider__handle');
  }

  getWidth() {
    return this.element.getBoundingClientRect().width;
  }
  
  setPosition(position) {
    this.element.style.left = position + '%';
  }
}
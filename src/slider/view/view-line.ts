export default class ViewLine {
  constructor(root, direction) {
    this.root = root;
    this.direction = direction;
  }

  init() {
    this.template = this.direction === 'horizontal' ? `<div class='fsd-slider__line'></div>` : `<div class='fsd-slider__line fsd-slider__line_vertical'></div>`;
    this.root.insertAdjacentHTML('beforeend', this.template);
    this.element = this.root.querySelector('.fsd-slider__line');
  }

  getWidth() {
    return this.element.getBoundingClientRect().width;
  }

  getLeftCoordinate() {
    return this.element.getBoundingClientRect().left;
  }
}
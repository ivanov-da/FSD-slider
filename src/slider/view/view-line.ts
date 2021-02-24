export default class ViewLine {
  constructor(root) {
    this.root = root;
    this.template = `<div class='fsd-slider__line'></div>`;
  }

  init() {
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
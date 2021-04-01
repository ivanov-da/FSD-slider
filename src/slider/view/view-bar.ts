export default class ViewBar {
  constructor(root,direction, type) {
    this.root = root;
    this.direction = direction;
    this.type = type;
    this.template = `<div class='fsd-slider__bar'></div>`;
    this.template = this.direction === 'horizontal' ? `<div class='fsd-slider__bar'></div>` : `<div class='fsd-slider__bar fsd-slider__bar_vertical'></div>`;
  }

  init(elementFrom, elementTo) {
    this.root.insertAdjacentHTML("beforeend", this.template);
    this.element = this.root.querySelector('.fsd-slider__bar');
    this.update(elementFrom, elementTo);

  }

  update(elementFrom, elementTo) {
    if (this.direction === 'horizontal') {

      if (this.type === 'single') {
        this.element.style.width = elementTo.style.left;
        this.element.style.top = 0;

      } else {
        this.element.style.width = parseInt(elementTo.style.left) - parseInt(elementFrom.style.left) + '%';
        this.element.style.left = elementFrom.style.left;
        this.element.style.top = 0;
      }

    } else {

      if (this.type === 'single') {
        this.element.style.height = elementTo.style.top;
        this.element.style.left = 0;
        this.element.style.top = 0;

      } else {
        this.element.style.height = parseInt(elementTo.style.top) - parseInt(elementFrom.style.top) + '%';
        this.element.style.top = elementFrom.style.top;
        this.element.style.left = 0;

      }
    }
  }
}
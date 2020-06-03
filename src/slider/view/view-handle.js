export default class ViewHandle {
  constructor(routObj) {
    this.$slider = routObj;
    this.template = `<div class='fsd-slider__handle'></div>`;
  }

  init() {
    this.$slider.append(this.template);
  }
}
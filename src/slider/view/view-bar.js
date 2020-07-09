export default class ViewBar {
  constructor(routObj) {
    this.$slider = routObj;
    this.template = `<div class='fsd-slider__bar'></div>`;
  }

  init() {
    this.$slider.append(this.template);
  }
}
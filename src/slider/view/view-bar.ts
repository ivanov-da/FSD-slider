export default class ViewBar {
  constructor(root) {
    this.root = root;
    this.template = `<div class='fsd-slider__bar'></div>`;
  }

  init() {
    this.root.insertAdjacentHTML("beforeend", this.template);
  }
}
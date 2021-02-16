export default class ViewLine {
  constructor(root) {
    this.root = root;
    this.template = `<div class='fsd-slider__line'></div>`;
  }

  init() {
    this.root.insertAdjacentHTML("beforeend", this.template);
  }
}
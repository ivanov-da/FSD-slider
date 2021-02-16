export default class ViewHandle {
  constructor(root) {
    this.root = root;
    this.template = `<div class='fsd-slider__handle'></div>`;
  }

  init() {
    this.root.insertAdjacentHTML('beforeend', this.template);
    
  }
}
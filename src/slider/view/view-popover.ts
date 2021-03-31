export default class ViewPopover {
  constructor(root, direction) {
    this.root = root;
    this.direction = direction;
    
  }

  init(position, value) {
    this.template = this.direction === 'horizontal' ? `<div class='fsd-slider__popover'>10</div>` : `<div class='fsd-slider__popover fsd-slider__popover_vertical'>10</div>`;
    this.root.insertAdjacentHTML('beforeend', this.template);
    let elements = this.root.querySelectorAll('.fsd-slider__popover');
    this.element = elements.[elements.length - 1];

    
    this.update(position, value);
    
  }

  getWidth() {
    return this.element.getBoundingClientRect().width;
  }

  setPosition(position) {
    if (this.direction === 'horizontal') {
    
      this.element.style.left = position * 100 + '%';
    } else {
      this.element.style.top = position * 100 + '%';
    }
  }

  update(position, value) {
    this.setPosition(position);
    this.element.innerHTML = value;
  }

}
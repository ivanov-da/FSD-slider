export default class ViewPopover {
  constructor(root, direction, type) {
    this.root = root;
    this.direction = direction;
    this.type = type;
    
  }

  init(position, value) {
    this.template = this.direction === 'horizontal' ? `<div class='fsd-slider__popover'></div>` : `<div class='fsd-slider__popover fsd-slider__popover_vertical'></div>`;
    this.root.insertAdjacentHTML('beforeend', this.template);
    let elements = this.root.querySelectorAll('.fsd-slider__popover');
    this.element = elements.[elements.length - 1];
    this.update(position, value)
  }

  initCommon (position, valueFrom, valueTo) {
    this.template = this.direction === 'horizontal' ? `<div class='fsd-slider__popover'></div>` : `<div class='fsd-slider__popover fsd-slider__popover_vertical'></div>`;
    this.root.insertAdjacentHTML('beforeend', this.template);
    let elements = this.root.querySelectorAll('.fsd-slider__popover');
    this.element = elements.[elements.length - 1];
    this.updateCommon(position, valueFrom, valueTo);
  }

  getLeftCoordinate() {
    return this.element.getBoundingClientRect().left;
  }

  getRightCoordinate() {
    return this.element.getBoundingClientRect().right;
  }

  getTopCoordinate() {
    return this.element.getBoundingClientRect().top;
  }

  getBottomCoordinate() {
    return this.element.getBoundingClientRect().bottom;
  }

  setPosition(position) {
    if (this.direction === 'horizontal') {
    
      this.element.style.left = position * 100 + '%';
    } else {
      this.element.style.top = position * 100 + '%';
    }
  }

  setCommonPosition(position) {
    
    
    if (this.direction === 'horizontal') {
      this.element.style.left = position + '%';
    } else {
      this.element.style.top = position + '%';
    }
  }

  update(position, value) {
    this.setPosition(position);
    this.element.innerHTML = value;
  }

  updateCommon(position, valueFrom, valueTo) {
    this.setCommonPosition(position);
    this.element.innerHTML = `${valueFrom} - ${valueTo}`;
  }

}
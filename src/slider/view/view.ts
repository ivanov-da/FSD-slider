import Observer from "../observer/observer";
import ViewBar from "./view-bar";
import ViewHandle from "./view-handle";
import ViewLine from "./view-line";
import ViewPopover from "./view-popover";
import ViewScale from "./view-scale";

export default class View extends Observer {
  line: any;

  constructor(root) {
    super();
    this.state = {};
    this.root = root;
  }

  init(options) {
    Object.assign(this.state, options);
    

    this.sliderClass = this.state.direction === 'horizontal' ? 'fsd-slider' : 'fsd-slider fsd-slider__vertical';
    this.template = '<div class=' + `'${this.sliderClass}'` + '></div>';
    this.root.innerHTML = this.template;
    this.container = this.root.querySelector('.fsd-slider');

    // инициализация линии
    this.line = new ViewLine(this.container, this.state.direction);
    this.line.init();

    this.scale = new ViewScale(this.container, this.state.direction);
    this.scale.init(this.state.valueFrom, this.state.valueTo);

    this.handle = new ViewHandle(this.container, this.state.direction);
    let handleStartPosition = this.calcHandleStartPosition(this.state.valueTo);
    this.handle.init(handleStartPosition);

    this.handle.element.onmousedown = this.onHandleMouseDown.bind(this);
    this.handle.ondragstart = () => false;


    if (this.state.popover) {
      this.handlePopover = new ViewPopover(this.container, this.state.direction, 'single');
      this.handlePopover.init(handleStartPosition, this.state.valueTo);
    }
    


    if (this.state.type === 'double') {
      this.handleFrom = new ViewHandle(this.container, this.state.direction);
      let handleFromStartPosition = this.calcHandleStartPosition(this.state.valueFrom);
      this.handleFrom.init(handleFromStartPosition);

      this.handleFrom.element.setAttribute('data-handle-from', true);

      if (this.state.popover) {
        this.handleFromPopover = new ViewPopover(this.container, this.state.direction, 'single');
        this.handleFromPopover.init(handleFromStartPosition, this.state.valueFrom);

        this.handlesCommonPopover = new ViewPopover(this.container, this.state.direction, 'common');
        
        this.handlesCommonPopover.initCommon(this.calcPositionCommonPopover(), this.state.valueFrom, this.state.valueTo);

        this.setPopoversVisibility()
      }

      this.handleFrom.element.onmousedown = this.onHandleMouseDown.bind(this);
      this.handleFrom.ondragstart = () => false;
    }

    this.bar = new ViewBar(this.container, this.state.direction);
    this.bar.init();


    this.line.element.onclick = this.onLineClick.bind(this);
  }

  calcHandleStartPosition(value: number): number {
    return (value - this.state.min) / (this.state.max - this.state.min);
  }

  onLineClick (event) {
    let newPositionRelative = this.calcLineClickPositionRelative(event);

    this.notifyObservers({
      name: 'value',
      value: newPositionRelative,
    });
    
  }

  onHandleMouseDown(event) {
    
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)
    const halfHandleWidth = this.handle.getWidth() / 2;

    let updatedHandle = event.target.hasAttribute('data-handle-from') ? 'valueFrom' : 'valueTo';
    




    if (this.state.direction === 'horizontal') {
    
      
      const lineWidth = this.line.getWidth();
      const lineLeftCoordinate = this.line.getLeftCoordinate();
      const handleLeftCoordinate = event.target.getBoundingClientRect().left;
      const shift = event.clientX - handleLeftCoordinate;
      
    } else {

      const lineHeight = this.line.getHeight();
      const lineTopCoordinate = this.line.getTopCoordinate();
      const handleTopCoordinate = event.target.getBoundingClientRect().top;
      const shift = event.clientY - handleTopCoordinate;
      
    }

    let onMouseMove = onHandleMouseMove.bind(this);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onHandleMouseUp);
    
    function onHandleMouseMove(event) {
      let newPosition;

      if (this.state.direction === 'horizontal') {
        newPosition = (event.clientX - shift - lineLeftCoordinate + halfHandleWidth ) / lineWidth;
      } else {
        newPosition = (event.clientY - shift - lineTopCoordinate + halfHandleWidth ) / lineHeight;
      }

      newPosition = newPosition > 1 ?  1 : newPosition;
      newPosition = newPosition < 0 ?  0 : newPosition;

      this.notifyObservers({
        name: updatedHandle,
        value: newPosition,
      });
    }

    function onHandleMouseUp() {
      document.removeEventListener('mouseup', onHandleMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }

  calcLineClickPositionRelative(event) {
    const handleWidth = this.handle.getWidth();
    

    if (this.state.direction === 'horizontal') {
      
      const lineWidth = this.line.getWidth();
      const lineLeftCoordinate = this.line.getLeftCoordinate();
      const newPositionRelative = (event.clientX - lineLeftCoordinate) / lineWidth;
    } else {

      const lineHeight = this.line.getHeight();
      const lineTopCoordinate = this.line.getTopCoordinate();
      const newPositionRelative = (event.clientY - lineTopCoordinate) / lineHeight;
    }

    newPositionRelative = newPositionRelative > 1 ?  1 : newPositionRelative;
    newPositionRelative = newPositionRelative < 0 ?  0 : newPositionRelative;

    return newPositionRelative;
  }

  update(data) {

    
    
    switch (data.name) {
      case 'valueTo':
        
        let position = this.getValueRelative(data.state.valueTo, data.state.min, data.state.max);

        if (position < 0) {
          position = 0;
        }
        if (position > 1) {
          position = 1;
        }
        
        this.handle.setPosition(position);

        if (this.handlePopover) {
          this.handlePopover.update(position, data.state.valueTo);

          if (this.handlesCommonPopover) {
            this.handlesCommonPopover.updateCommon(this.calcPositionCommonPopover(), data.state.valueFrom,data.state.valueTo);
          }

          this.setPopoversVisibility()
        }
        
        break;

      case 'valueFrom':

        let position = this.getValueRelative(data.state.valueFrom, data.state.min, data.state.max);

        if (position < 0) {
          position = 0;
        }
        if (position > 1) {
          position = 1;
        }
        
        this.handleFrom.setPosition(position);

        if (this.handleFromPopover) {
          this.handleFromPopover.update(position, data.state.valueFrom);
          this.handlesCommonPopover.updateCommon(this.calcPositionCommonPopover(), data.state.valueFrom,data.state.valueTo);
          this.setPopoversVisibility()
        }

        break;
    }
  }

  getValueRelative(value, min, max) {
    return (value - min) / (max - min);
  }

  calcPositionCommonPopover() {
    let position;
    if (this.state.direction === 'horizontal') {
      position = (parseInt(this.handle.element.style.left) + parseInt(this.handleFrom.element.style.left)) / 2;
    } else {
      position = (parseInt(this.handle.element.style.top) + parseInt(this.handleFrom.element.style.top)) / 2;
      
    }
    return position;
  }

  setPopoversVisibility() {
    
    if (this.state.direction === 'horizontal') {
      let handleFromPopoverRightCoordinate = this.handleFromPopover.getRightCoordinate();
      
      let handleToPopoverLeftCoordinate = this.handlePopover.getLeftCoordinate();
      
      
      if (handleFromPopoverRightCoordinate >= handleToPopoverLeftCoordinate) {
        this.handlePopover.element.classList.add('fsd-slider__popover_hidden');
        this.handleFromPopover.element.classList.add('fsd-slider__popover_hidden');
        this.handlesCommonPopover.element.classList.remove('fsd-slider__popover_hidden');
      } else {
        this.handlePopover.element.classList.remove('fsd-slider__popover_hidden');
        this.handleFromPopover.element.classList.remove('fsd-slider__popover_hidden');
        this.handlesCommonPopover.element.classList.add('fsd-slider__popover_hidden');
      }

    } else {
      let handleFromPopoverBottomCoordinate = this.handleFromPopover.getBottomCoordinate();
      let handleToPopoverTopCoordinate = this.handlePopover.getTopCoordinate();
      
      if (handleFromPopoverBottomCoordinate >= handleToPopoverTopCoordinate) {
        this.handlePopover.element.classList.add('fsd-slider__popover_hidden');
        this.handleFromPopover.element.classList.add('fsd-slider__popover_hidden');
        this.handlesCommonPopover.element.classList.remove('fsd-slider__popover_hidden');
      } else {
        this.handlePopover.element.classList.remove('fsd-slider__popover_hidden');
        this.handleFromPopover.element.classList.remove('fsd-slider__popover_hidden');
        this.handlesCommonPopover.element.classList.add('fsd-slider__popover_hidden');
      }
    }
  }
}
import Observer from "../observer/observer";
import ViewBar from "./view-bar";
import ViewHandle from "./view-handle";
import ViewLine from "./view-line";
import ViewPopover from "./view-popover";

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

    const lineLength;
    if (this.state.direction === 'horizontal') {
      lineLength = this.line.getWidth();
    } else {
      lineLength = this.line.getHeight();
    }

    this.handle = new ViewHandle(this.container, this.state.direction);
    let handleStartPosition = this.calcHandleStartPosition(this.state.valueTo);
    this.handle.init(handleStartPosition, lineLength);

    this.handlePopover = new ViewPopover(this.container, this.state.direction);
    this.handlePopover.init(handleStartPosition);

    if (this.state.type === 'double') {
      this.handleFrom = new ViewHandle(this.container, this.state.direction);
      let handleFromStartPosition = this.calcHandleStartPosition(this.state.valueFrom);
      this.handleFrom.init(handleFromStartPosition, lineLength);

      this.handleFrom.element.setAttribute('data-handle-from', true);

      this.handleFrom.element.onmousedown = this.onHandleMouseDown.bind(this);
      this.handleFrom.ondragstart = () => false;
    }

    this.bar = new ViewBar(this.container, this.state.direction);
    this.bar.init();

    this.line.element.onclick = this.onLineClick.bind(this);
    this.handle.element.onmousedown = this.onHandleMouseDown.bind(this);
    this.handle.ondragstart = () => false;
    
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
      
      const halfHandleWidthRelative = handleWidth / 2 / lineWidth;
      const newPositionRelative = (event.clientX - lineLeftCoordinate) / lineWidth;
    } else {
      const lineHeight = this.line.getHeight();
      const lineTopCoordinate = this.line.getTopCoordinate();
      const halfHandleWidthRelative = handleWidth / 2 / lineHeight;
      const newPositionRelative = (event.clientY - lineTopCoordinate) / lineHeight;
    }

    newPositionRelative = newPositionRelative > 1 ?  1 : newPositionRelative;
    newPositionRelative = newPositionRelative < 0 ?  0 : newPositionRelative;

    return newPositionRelative;
  }

  update(data) {
    
    switch (data.name) {
      case 'valueTo':
        if (this.state.direction === 'horizontal') {
          let halfHandleWidthRelative = this.handle.getWidth() / 2 / this.line.getWidth();
        } else {
          let halfHandleWidthRelative = this.handle.getWidth() / 2 / this.line.getHeight();
        }
        
        let position = this.getValueRelative(data.state.valueTo, data.state.min, data.state.max);

        this.handlePopover.setPosition(position);

        position -= halfHandleWidthRelative;
    
        if (position < 0 - halfHandleWidthRelative) {
          position = -halfHandleWidthRelative;
        }
        if (position > 1 - halfHandleWidthRelative) {
          position = 1 - halfHandleWidthRelative;
        }
        
        
        this.handle.setPosition(position);
        

        break;

      case 'valueFrom':
        if (this.state.direction === 'horizontal') {
          let halfHandleWidthRelative = this.handleFrom.getWidth() / 2 / this.line.getWidth();
        } else {
          let halfHandleWidthRelative = this.handleFrom.getWidth() / 2 / this.line.getHeight();
        }
        
        let position = this.getValueRelative(data.state.valueFrom, data.state.min, data.state.max);
        position -= halfHandleWidthRelative;
    
        if (position < 0 - halfHandleWidthRelative) {
          position = -halfHandleWidthRelative;
        }
        if (position > 1 - halfHandleWidthRelative) {
          position = 1 - halfHandleWidthRelative;
        }
        
        this.handleFrom.setPosition(position);

        break;
    }
  }

  getValueRelative(value, min, max) {
    return (value - min) / (max - min);
  }

 
}
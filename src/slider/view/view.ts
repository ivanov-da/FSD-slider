import Observer from "../observer/observer";
import ViewBar from "./view-bar";
import ViewHandle from "./view-handle";
import ViewLine from "./view-line";

export default class View extends Observer {
  line: any;

  constructor(root) {
    super();
    this.state = {};
    this.root = root;
  }

  init(options) {
    Object.assign(this.state, options);
    console.log(this)

    this.sliderClass = this.state.direction === 'horizontal' ? 'fsd-slider' : 'fsd-slider fsd-slider__vertical';


    this.template = '<div class=' + `'${this.sliderClass}'` + '></div>';


    this.root.innerHTML = this.template;
    this.container = this.root.querySelector('.fsd-slider');

    this.line = new ViewLine(this.container, this.state.direction);
    this.line.init();

    this.handle = new ViewHandle(this.container, this.state.direction);
    let handleStartPosition = this.calcHandleStartPosition(this.state.valueTo);
    this.handle.init(handleStartPosition, this.line.getWidth());

    if (this.state.type === 'double') {
      this.handleFrom = new ViewHandle(this.container, this.state.direction);
      let handleFromStartPosition = this.calcHandleStartPosition(this.state.valueFrom);
      this.handleFrom.init(handleFromStartPosition, this.line.getWidth());
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
    console.log("🚀 ~ file: view.ts ~ line 57 ~ View ~ onLineClick ~ newPositionRelative", newPositionRelative)
    

    this.notifyObservers({
      name: 'value',
      value: newPositionRelative,
    });
    
  }

  onHandleMouseDown(event) {
    
    console.log("🚀 ~ file: view.ts ~ line 73 ~ View ~ onHandleMouseDown ~ event", event)
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)
    const halfHandleWidth = this.handle.getWidth() / 2;

    if (this.state.direction === 'horizontal') {
    
      
      const lineWidth = this.line.getWidth();
      const lineLeftCoordinate = this.line.getLeftCoordinate();
      const handleLeftCoordinate = this.handle.getLeftCoordinate();
      const shift = event.clientX - handleLeftCoordinate;
      
    } else {

      const lineHeight = this.line.getHeight();
      const lineTopCoordinate = this.line.getTopCoordinate();
      const handleTopCoordinate = this.handle.getTopCoordinate();
      const shift = event.clientY - handleTopCoordinate;
      
    }

    let onMouseUp = onHandleMouseMove.bind(this);

    document.addEventListener('mousemove', onMouseUp);
    document.addEventListener('mouseup', onHandleMouseUp);
    
    function onHandleMouseMove(event) {
      let newPosition;

      if (this.state.direction === 'horizontal') {
      
        newPosition = (event.clientX - shift - lineLeftCoordinate + halfHandleWidth ) / lineWidth;
        
        
      } else {
  
        newPosition = (event.clientY - shift - lineTopCoordinate + halfHandleWidth ) / lineHeight;
        
      }

      if (this.state.direction === 'horizontal') {
        let halfHandleWidthRelative = this.handle.getWidth() / 2 / this.line.getWidth();
      } else {
        let halfHandleWidthRelative = this.handle.getWidth() / 2 / this.line.getHeight();
      }
      
      newPosition = newPosition > 1 ?  1 : newPosition;
      newPosition = newPosition < 0 ?  0 : newPosition;
      
  

      
      console.log("🚀 ~ file: view.ts ~ line 99 ~ View ~ onHandleMouseMove ~ newPosition", newPosition)
      
      this.notifyObservers({
        name: 'valueTo',
        value: newPosition,
      });
    }

    function onHandleMouseUp() {
      document.removeEventListener('mouseup', onHandleMouseUp);
      document.removeEventListener('mousemove', onMouseUp);
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
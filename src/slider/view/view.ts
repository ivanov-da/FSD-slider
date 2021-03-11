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

    this.sliderClass = this.state.direction === 'horizontal' ? 'fsd-slider' : 'fsd-slider fsd-slider__vertical';


    this.template = '<div class=' + `'${this.sliderClass}'` + '></div>';


    this.root.innerHTML = this.template;
    this.container = this.root.querySelector('.fsd-slider');

    this.line = new ViewLine(this.container, this.state.direction);
    this.handle = new ViewHandle(this.container, this.state.direction);
    this.bar = new ViewBar(this.container, this.state.direction);
    
    this.line.init();
    this.handle.init();
    this.bar.init();

    this.line.element.onclick = this.onLineClick.bind(this);
    this.handle.element.onmousedown = this.onHandleMouseDown.bind(this);
    this.handle.ondragstart = () => false;
    
  }

  onLineClick (event) {
    const handleWidth = this.handle.getWidth();
    

    if (this.state.direction === 'horizontal') {
      
      const lineWidth = this.line.getWidth();
      const lineLeftCoordinate = this.line.getLeftCoordinate();
      
      const halfHandleWidthRelative = handleWidth / 2 / lineWidth;
      const newPosition = (event.clientX - lineLeftCoordinate) / lineWidth;
    } else {
      const lineHeight = this.line.getHeight();
      const lineTopCoordinate = this.line.getTopCoordinate();
      const halfHandleWidthRelative = handleWidth / 2 / lineHeight;
      const newPosition = (event.clientY - lineTopCoordinate) / lineHeight;
      
    }
    
    
    this.notifyObservers({
      name: 'valueTo',
      value: newPosition,
    });
    
  }

  onHandleMouseDown(event) {
    
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    const lineWidth = this.line.getWidth();
    const lineLeftCoordinate = this.line.getLeftCoordinate();
    const handleLeftCoordinate = this.handle.getLeftCoordinate();
    const halfHandleWidth = this.handle.getWidth() / 2;
    const shift = event.clientX - handleLeftCoordinate;

    let onMouseUp = onHandleMouseMove.bind(this);

    document.addEventListener('mousemove', onMouseUp);
    document.addEventListener('mouseup', onHandleMouseUp);
    
    function onHandleMouseMove(event) {
      let newPosition = (event.clientX - shift - lineLeftCoordinate + halfHandleWidth ) / lineWidth;
      
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

  setHandlePosition(position) {

    if (this.state.direction === 'horizontal') {
      let halfHandleWidthRelative = this.handle.getWidth() / 2 / this.line.getWidth();
    } else {
      let halfHandleWidthRelative = this.handle.getWidth() / 2 / this.line.getHeight();
    }
    
    position = position - halfHandleWidthRelative;

    if (position < 0 - halfHandleWidthRelative) {
      position = -halfHandleWidthRelative;
    }
    if (position > 1 - halfHandleWidthRelative) {
      position = 1 - halfHandleWidthRelative;
    }
    
    this.handle.setPosition(position);
  }
}
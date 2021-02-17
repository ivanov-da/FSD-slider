import Observer from "../observer/observer";
import ViewBar from "./view-bar";
import ViewHandle from "./view-handle";
import ViewLine from "./view-line";

export default class View extends Observer {

  constructor(root) {
    super();
    this.template = `<div class='fsd-slider'></div>`;
    this.root = root;
    this.line = new ViewLine(this.root);
  }

  init() {
    this.root.innerHTML = this.template;
    this.container = this.root.querySelector('.fsd-slider');

    this.line = new ViewLine(this.container);
    this.handle = new ViewHandle(this.container);
    this.bar = new ViewBar(this.container);
    
    this.line.init();
    this.handle.init();
    this.bar.init();

    this.line.element.onclick = this.onLineClick.bind(this);
    this.handle.element.onmousedown = this.onHandleMouseDown.bind(this);
    this.handle.ondragstart = () => false;
    
  }

  onLineClick (event) {
    const lineWidth = this.line.getWidth();
    const lineLeftCoordinate = this.line.getLeftCoordinate();
    const handleWidth = this.handle.getWidth();
    const halfHandleWidthPercentage = handleWidth / 2 / lineWidth * 100;
    const newPosition = (event.clientX - lineLeftCoordinate) / lineWidth * 100 - halfHandleWidthPercentage;
  
    this.handle.setPosition(newPosition);
  }

  onHandleMouseDown(event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    const lineWidth = this.line.getWidth();
    const lineLeftCoordinate = this.line.getLeftCoordinate();
    const handleWidth = this.handle.getWidth();
    const handleLeftCoordinate = this.handle.getLeftCoordinate();
    const halfHandleWidth = handleWidth / 2 / lineWidth;
    const shift = event.clientX - handleLeftCoordinate;

    let onMouseUp = onHandleMouseMove.bind(this);

    document.addEventListener('mousemove', onMouseUp);
    document.addEventListener('mouseup', onHandleMouseUp);

    function onHandleMouseMove(event) {
      console.log(this)
    
      let newPosition = (event.clientX - shift - lineLeftCoordinate ) / lineWidth;
      
      if (newPosition < 0 - halfHandleWidth) {
        newPosition = -halfHandleWidth;
      }
  
      if (newPosition > 1 - halfHandleWidth) {
        newPosition = 1 - halfHandleWidth;
      }
  
      this.handle.setPosition(newPosition * 100);

    }

    function onHandleMouseUp() {
      document.removeEventListener('mouseup', onHandleMouseUp);
      document.removeEventListener('mousemove', onMouseUp);
    }

  }



/*   init() {
    this.container.html(this.template);
    console.log("🚀 ~ file: view.js ~ line 20 ~ View ~ /*init ~ this.container", this.container)

    this.$slider = this.container.find('.fsd-slider');
    console.log("🚀 ~ file: view.js ~ line 23 ~ View ~ /*init ~ this.container", this.container)

    this.line = new ViewLine(this.$slider);
    this.handle = new ViewHandle(this.$slider);
    this.bar = new ViewBar(this.$slider);

    this.line.init();
    this.handle.init();
    this.bar.init();

    this.$line = this.$slider.find('.fsd-slider__line');
    this.$bar = this.$slider.find('.fsd-slider__bar');
    this.$handle = this.$slider.find('.fsd-slider__handle');

  }

  updateSettings(settings) {
    this.settings = settings;
  }

  updateView(state) {
    this.state = state;
    this.renderHandle();
    console.log("View -> updateView -> this", this)
    console.log("View -> updateView -> this.$handle", this.$handle)
  }

  getState() {
    return this.state;
  }

  renderHandle() {
    this.Handleposition = "left: " + (this.state.valueTo / 300 * 100) + "%";
    this.$handle.attr("style", this.Handleposition);


  }

  bindEventListeners() {
    this.lineClick = this.lineClick.bind(this);
    this.$slider.click(this.lineClick);
  }

  lineClick() {
    console.log('позиция мыши по клику', event.layerX);
    this.state.valueTo = event.layerX;
    console.log("View -> lineClick -> this.state.valueTo", this.state.valueTo)
    this.observerView.notifyObservers();
  } */


}
import ViewLine from "./view-line";
import ViewBar from "./view-bar";
import ViewHandle from "./view-handle";
import Observer from "../observer/observer";

export default class View {

  constructor($routObj) {
    this.state = {};
    this.settings = {};
    this.template = `<div class='fsd-slider'></div>`;
    this.container = $routObj;
    this.observerView = new Observer();

  }

  init() {
    this.container.html(this.template);
    this.$slider = this.container.find('.fsd-slider');

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

  updateState(state) {
    this.state = state;
    console.log("View -> updateState -> this.state", this.state)

  }

  bindEventListeners() {
    this.$slider.click(this.lineClick);
  }

  lineClick() {
    console.log('позиция мыши по клику', event.layerX);
  }

}
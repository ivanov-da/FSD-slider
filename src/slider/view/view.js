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
    this.renderHandle();
    console.log("View -> init -> this.renderHandle", this.renderHandle)



  }

  updateSettings(settings) {
    this.settings = settings;
  }

  updateView(state) {
    this.state = state;
    console.log("View -> updateView -> this.state", this.state)

  }

  renderHandle() {
    this.Handleposition = "left: " + this.state.valueTo + "%";
    console.log("View -> renderHandle -> this.Handleposition", this.Handleposition)
    console.log("View -> renderHandle -> this.$handle", this.$handle)
    this.$handle.attr("style", this.Handleposition);


  }

  bindEventListeners() {
    this.$slider.click(this.lineClick);
  }

  lineClick() {
    console.log('позиция мыши по клику', event.layerX);
  }

}
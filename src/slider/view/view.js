import ViewLine from "./view-line";
import ViewBar from "./view-bar";
import ViewHandle from "./view-handle";

export default class View {

  constructor($routObj) {
    this.template = `<div class='fsd-slider'></div>`;
    this.container = $routObj;
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
  }

}
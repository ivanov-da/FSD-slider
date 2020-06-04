export default class Presenter {

  constructor(model, view, options) {
    this.model = model;
    this.view = view;

    this.settings = {};
    ({ direction: this.settings.direction, ...this.state } = options);
  }

  initSlider() {
    this.model.updateState(this.state);
    this.view.updateSettings(this.settings);
    this.view.init();
  }

  subsrcibeToModel() {
    this.updateView = this.updateView.bind(this);
    this.model.observerModel.addObserver(this.updateView);
  }

  updateView(model) {
    this.view.updateView(model.getState());
  }

}
export default class Presenter {

  constructor(model, view, options) {
    this.model = model;
    this.view = view;

    this.settings = {};
    ({ direction: this.settings.direction, ...this.state } = options);
  }

  initSlider() {
    this.view.init();
    this.model.updateState(this.state);
    this.view.updateSettings(this.settings);

  }

  subsrcibeToModel() {
    this.updateView = this.updateView.bind(this);
    this.model.observerModel.addObserver(this.updateView);
  }

  subscribeToView() {
    this.updateModel = this.updateModel.bind(this);
    this.view.observerView.addObserver(this.updateModel);

  }

  updateView(model) {
    this.view.updateView(model.getState());
  }

  updateModel() {
    this.model.updateState(this.view.getState());
  }

}
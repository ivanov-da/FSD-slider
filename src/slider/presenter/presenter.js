export default class Presenter {

  constructor(model, view, options) {
    this.model = model;
    this.view = view;

    this.settings = {};
    ({ direction: this.settings.direction, ...this.state } = options);

    this.model.observerModel.addObserver(function () {
      view.updateState(model.getState());
      console.log('presenter func this', this);
    });



  }

  initSlider() {
    this.model.updateState(this.state);
    this.view.init();
    this.view.updateSettings(this.settings)

  }

  /* updateView(model) {
    console.log("Presenter -> updateView -> model", model);
  } */

}
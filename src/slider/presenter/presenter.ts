export default class Presenter {

  constructor(model, view) {
    this.model = model;
    this.view = view;

  }

  init() {
    this.view.addObserver(this.updateModel.bind(this.model));
    this.model.addObserver(this.updateView.bind(this.view));
  }





  updateModel(property) {
    this.updateProperty(property);
  }

  updateView(data) {
    this.update(data);
  }

}
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
    this.changeProperty(property);
  }

  updateView(data) {
    //this.setHandlePosition(property.value);
    this.update(data);
  }

}
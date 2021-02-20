export default class Presenter {

  constructor(model, view, options) {
    this.model = model;
    this.view = view;

  }






  updateView(model) {
    /* this.view.updateView(model.getState()); */
  }

  updateModel(property) {
    this.changeProperty(property);
    
  }

}
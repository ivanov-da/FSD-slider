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

  updateView(property) {
    this.setHandlePosition(property.value);
    console.log("🚀 ~ file: presenter.ts ~ line 24 ~ Presenter ~ updateView ~ property.value", property.value)
    
  }

}
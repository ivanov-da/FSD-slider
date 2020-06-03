export default class Presenter {

  constructor(model, view) {
    //this.state = {};
    //model.getState()
    //console.log('test', model.getState());
    //console.log(model.observer.observers[0]);
    //console.log('ne tam')
    model.observerModel.addObserver(function () {
      model.state.value = +prompt('значение', 50);
      console.log('value в модели', model.state.value)
      view.setState();
      console.log('view', view);
      console.log('model', model)
    });

    view.observerView.addObserver(function () {
      model.state.value = +prompt('значение', 50);
    });

  }

  /* getState() {
    return this.state;
  } */

}
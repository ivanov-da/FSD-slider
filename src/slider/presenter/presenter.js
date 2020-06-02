export default class Presenter {

  constructor(model, view) {
    this.state = {};
    //model.getState()
    //console.log('test', model.getState());
    //console.log(model.observer.observers[0]);
    //console.log('ne tam')
    model.observerModel.addObserver(function () {
      console.log(model.getState());
      //this.state = model.getState();
      //console.log(this.state);
    });

  }

  /* getState() {
    return this.state;
  } */

}
import Observer from "../observer/observer";

export default class Model {

  constructor() {
    this.observerModel = new Observer();
    this.state = {
      min: 0,
      max: 100,
      value: 35,
    };


  }

  getState() {
    return this.state;
  }

  updateState(state) {
    this.state = state;
  }

  testMethod() {
    this.observerModel.notifyObservers();
  }

}
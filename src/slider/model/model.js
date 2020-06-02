import Observer from "../observer/observer";

export default class Model {

  constructor() {
    this.observerModel = new Observer();
    this.state = {
      min: 0,
      max: 100,
      value: 33,
    };


  }

  getState() {
    return this.state;
  }

  testMethod() {
    this.observerModel.notifyObservers();
  }

}
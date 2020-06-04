import Observer from "../observer/observer";

export default class Model {

  constructor() {
    this.state = {};
    this.observerModel = new Observer();
  }

  getState() {
    return this.state;
  }

  updateState(state) {
    this.state = state;
    console.log("Model -> updateState -> this.state", this.state)

    this.observerModel.notifyObservers(this);
  }

}
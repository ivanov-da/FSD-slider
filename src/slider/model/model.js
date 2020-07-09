import Observer from "../observer/observer";

export default class Model {

  constructor() {
    this.data = {
      min: 0,
      max: 100,
      step: 1,
      type: 'single',
      valueFrom: null,
      valueTo: 50,
    };
    this.observerModel = new Observer();
  }

  getData() {
    return this.data;
  }

  updateData(data) {
    this.validMin(data);
    this.validMax(data);
    this.data.min = data.min;
    this.data.max = data.max;

    this.validType(data);
    this.data.type = data.type;




    notifyObservers(this);
  }

  validMin(data) {
    if (data.min === undefined || data.min >= this.data.max) {
      data.min = this.data.min;
    }
  }

  validMax(data) {
    if (data.max === undefined || data.max <= this.data.min) {
      data.max = this.data;
    }
  }

  validType(data) {
    if (data.type !== 'single' || data.type !== 'double') {
      data.type = 'single';
    }
  }

  validStep(data) {
    
  }
}

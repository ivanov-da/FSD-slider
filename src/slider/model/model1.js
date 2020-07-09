class Model {

  constructor() {
    this.data = {
      min: 0,
      max: 100,
      step: 1,
      type: 'single',
      valueFrom: null,
      valueTo: 50,
    };

    console.log("Model -> constructor -> this.data", this.data)
  }

  init(config) {
    this.data = config;
    console.log("Model -> init -> this.data", this.data)
  }

  update(updateParam) {
    this.data[updateParam.parameter] = updateParam.value;
    console.log("Model -> update -> this.data", this.data)
  }

  // Перенести в контроллер пересчет из процентов в абсолютное значение
  //
  /* calcValueFromPercantage(value) {
    return this.data.min + value / 100 * (this.data.max - this.data.min);
  } */

  validValue(value) {
    //value = this.calcValueFromPercantage(value);

    let stepsInValue = value / this.data.step;
    console.log("Model -> validValue -> stepsInValue", stepsInValue)

    if (stepsInValue % 1 >= 0.5) {
      value = this.data.step * Math.ceil(stepsInValue);
    } else {
      value = this.data.step * Math.floor(stepsInValue);
    }

    if (Number.isInteger(value)) {
      return value;
    } else {
      return value.toFixed(1);
    }
  }

  validType(type) {
    if (type === 'single' || type === 'double') {
      return type;
    } else {
      return 'single';
    }

    console.log("Model -> validType -> this.data.type", this.data.type)
  }

  validMin(min) {
    if (typeof min === 'number') {
      if (min < this.data.max) {
        if (this.data.max - min < 2 * this.data.step) {
          return this.data.max - 2 * this.data.step;
        }

        return min;
      }
    } else {
      return this.data.min;
    }
  }

  validMax(max) {
    if (typeof max === 'number') {
      if (max > this.data.min) {
        if (max - this.data.min < 2 * this.data.step) {
          return this.data.min + 2 * this.data.step;
        }

        return max;
      }
    } else {
      return this.data.max;
    }
  }

  validValueTo(valueTo) {
    if (typeof valueTo === 'number') {
      valueTo = this.validValue(valueTo);
    } else {
      valueTo = this.data.valueTo;
    }

    if (this.data.type === 'single') {

      if (valueTo > this.data.max) {
        valueTo = this.data.max;
      } else if (valueTo < this.data.min) {
        valueTo = this.data.min;
      }

    } else if (this.data.type === 'double') {
      if (valueTo > this.data.max) {
        valueTo = this.data.max;
      } else if (valueTo <= this.data.valueFrom) {
        valueTo = this.data.valueFrom + this.data.step;
      }
    }

    console.log("Model -> validValueTo -> valueTo", valueTo)
    return valueTo;
  }
}



let config = {
  min: 0,
  max: 100,
  step: 1,
  type: 'double',
  valueFrom: 40,
  valueTo: 80,
};

let updateParam = {
  parameter: 'max',
  value: 10.2,
};



let model = new Model();
model.init(config);
model.validValueTo(40.1)
//model.update(updateParam);

//console.log(model.validValue('eou'))

//model.validType('double&')
//console.log("model.validMin(7);", model.validMin(9500))

import Observer from "../observer/observer";

export default class Model extends Observer{

  constructor() {
    super();
    this.state = {};
  }

  init(options) {
    Object.assign(this.state, options);
  }

  getState() {
    return this.state;
  }

  changeProperty(property) {
    this.state[property.name] = this.calcValue(property.value);
    
    let valueRelative = this.getValueRelative(this.state[property.name]);

    console.log (this.state.valueTo);

    this.notifyObservers({
      name: [property.name],
      value: valueRelative,
    })
  }

  calcValue(value) {
    return this.state.min + (this.state.max - this.state.min) * value;
  }

  getValueRelative(value) {
    return (value - this.state.min) / (this.state.max - this.state.min);
  }

  validType(type) {
    if (type === 'single' || type === 'double') {
      return type;
    } else {
      return 'single';
    }
  }

  validDirection(direction) {
    if (direction === 'horizontal' || direction === 'vertical') {
      return direction;
    } else {
      return 'horizontal';
    }
  }

  validMin(min) {
    if (typeof min === 'number' || min >= this.state.max) {
      return min;
    } else {
      return this.state.min;
    }
  }

  validMax(max) {
    if (typeof max === 'number' || max <= this.state.min) {
      return max;;
    } else {
      return this.state.max;
    }
  }

  validValue(value) {
    let stepsInValue = value / this.state.step;


    if (stepsInValue % 1 >= 0.5) {
      value = this.state.step * Math.ceil(stepsInValue);

    } else {
      value = this.state.step * Math.floor(stepsInValue);

    }

    if (Number.isInteger(value)) {

      return value;
    } else {

      return value.toFixed(1);

    }
  }

  validValueTo(valueTo) {
    if (typeof valueTo === 'number') {
      valueTo = this.validValue(valueTo);
    } else {
      valueTo = this.state.valueTo;
    }

    if (this.state.type === 'single') {

      if (valueTo > this.state.max) {
        valueTo = this.state.max;
      } else if (valueTo < this.state.min) {
        valueTo = this.state.min;
      }

    } else if (this.state.type === 'double') {
      if (valueTo > this.state.max) {
        valueTo = this.state.max;
      } else if (valueTo <= this.state.valueFrom) {
        valueTo = this.state.valueFrom + this.state.step;
      }
    }
    return valueTo;
  }

  validValueFrom(valueFrom) {
    if (typeof valueFrom === 'number') {
      valueFrom = this.validValue(valueFrom);
    } else {
      valueFrom = this.state.valueFrom;
    }

    if (this.state.type === 'single') {
      valueFrom = null;

    } else if (this.state.type === 'double') {
      if (valueFrom < this.state.min) {
        valueFrom = this.state.min;
      } else if (valueFrom >= this.state.valueTo) {
        valueFrom = this.state.valueTo - this.state.step;
      }
    }

    return valueFrom;
  }

  validStep(step) {
    if (typeof step === 'number') {
      if (step > 0) {
        return step;
      } else {
        return this.state.step;
      }
    } else {
      return this.state.step;
    }
  }



/*   update(updateParameter) {
    switch (updateParameter.key) {
      case 'type':
        if (updateParameter.key === 'double' && this.state.type === 'single') {
          this.state.valueFrom = this.state.min;
        }

        this.state.type = this.validType(updateParameter.value);
        this.state.valueFrom = this.validValueFrom(this.state.valueFrom);
        break;
      case 'step':
        this.state.step = this.validStep(updateParameter.value);
        this.state.valueFrom = this.validValueFrom(this.state.valueFrom);
        this.state.valueTo = this.validValueTo(this.state.valueTo);
        break;
      case 'min':
        this.state.min = this.validMin(updateParameter.value);
        this.state.valueFrom = this.validValueFrom(this.state.valueFrom);
        this.state.valueTo = this.validValueTo(this.state.valueTo);
        break;
      case 'max':
        this.state.max = this.validMax(updateParameter.value);
        this.state.valueFrom = this.validValueFrom(this.state.valueFrom);
        this.state.valueTo = this.validValueTo(this.state.valueTo);
        break;
      case 'valueFrom':
        this.state.valueFrom = this.validValueFrom(updateParameter.value);
        break;
      case 'valueTo':
        this.state.valueTo = this.validValueTo(updateParameter.value);
        break;
    }
  } */
}
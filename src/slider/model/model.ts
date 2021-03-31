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

  updateProperty(property) {

    
    let updatedProperty;
    let updatedValue

    switch (property.name) {
      case 'value':
        updatedValue = this.calcValue(property.value);
        

        if (this.state.type === 'single') {
          updatedProperty = 'valueTo';
        } else {
          let isValueTo = () => {
            return (updatedValue - this.state.valueFrom) / (this.state.valueTo - this.state.valueFrom) >= 0.5;
          }
          updatedProperty = isValueTo() ? 'valueTo' : 'valueFrom';
        }

        this.state[updatedProperty] = updatedValue;
        
        
        break;
      
      case 'valueFrom':
        updatedProperty = 'valueFrom';
        updatedValue = this.calcValue(property.value);
        updatedValue = this.validValueFrom(updatedValue);

        this.state[property.name] = updatedValue;

        break;

      case 'valueTo':
        updatedProperty = 'valueTo';
        updatedValue = this.calcValue(property.value);
        updatedValue = this.validValueTo(updatedValue);

        this.state[property.name] = updatedValue;  
        break;

      default:
        /* this.state[property.name] = this.calcValue(property.value); */
        break;
    }
    
    this.notifyObservers({
      name: updatedProperty,
      state: this.state,
    })
  }

  calcValue(value) {
    value *= (this.state.max - this.state.min);

    return this.state.min + +this.calcValueByStep(value);
  }

  calcValueByStep(value) {
    let stepsInValue = value / this.state.step;

    if (stepsInValue % 1 >= 0.5) {
      value = this.state.step * Math.ceil(stepsInValue);
    } else {
      value = this.state.step * Math.floor(stepsInValue);
    }

    // количество знаков после запятой
    let accuracy = this.state.step.toString().includes('.') ? (this.state.step.toString().split('.').pop().length) : 0;

    return value.toFixed(accuracy);
  }

  getValueRelative(value) {
    return (value - this.state.min) / (this.state.max - this.state.min);
  }

/*   validType(type) {
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
  } */


  validValueTo(valueTo) {
    let value = valueTo;

    if (this.state.type === 'single') {

      if (value > this.state.max) {
        value = this.state.max;
      } else if (value < this.state.min) {
        value = this.state.min;
      }

    } else if (this.state.type === 'double') {
      if (value > this.state.max) {
        value = this.state.max;
      } else if (value <= this.state.valueFrom) {
        value = this.state.valueFrom + this.state.step;
      }
    }
    return value;
  }

  validValueFrom(valueFrom) {
    let value = valueFrom;

    if (this.state.type === 'single') {
      value = null;

    } else if (this.state.type === 'double') {
      if (value < this.state.min) {
        value = this.state.min;
      } else if (value >= this.state.valueTo) {
        value = this.state.valueTo - this.state.step;
      }
    }

    return value;
  }

/*   validStep(step) {
    if (typeof step === 'number') {
      if (step > 0) {
        return step;
      } else {
        return this.state.step;
      }
    } else {
      return this.state.step;
    }
  } */
}

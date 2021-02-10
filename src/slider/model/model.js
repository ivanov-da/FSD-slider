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
  }

  validType(type) {
    if (type === 'single' || type === 'double') {
      return type;
    } else {
      return 'single';
    }

  }

  validMin(min) {
    if (typeof min === 'number') {
      if (min < this.data.max) {
        if (this.data.max - min < 2 * this.data.step) {
          return this.data.max - 2 * this.data.step;
        }

        return min;
      } else {
        return this.data.min;
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
      } else {
        return this.data.max;
      }
    } else {
      return this.data.max;
    }
  }

  validValue(value) {
    let stepsInValue = value / this.data.step;


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
      } else if (valueTo < this.data.min) {
        valueTo = this.data.min;
      }
    }
    return valueTo;
  }

  validValueFrom(valueFrom) {
    if (typeof valueFrom === 'number') {
      valueFrom = this.validValue(valueFrom);
    } else {
      valueFrom = this.data.valueFrom;
    }

    if (this.data.type === 'single') {
      valueFrom = null;

    } else if (this.data.type === 'double') {
      if (valueFrom < this.data.min) {
        valueFrom = this.data.min;
      } else if (valueFrom >= this.data.valueTo) {
        valueFrom = this.data.valueTo - this.data.step;
      }
    }

    return valueFrom;
  }

  validStep(step) {
    if (typeof step === 'number') {
      if (step > 0) {
        return step;
      } else {
        return this.data.step;
      }
    } else {
      return this.data.step;
    }
  }

  init(config) {
    this.data.type = this.validType(config.type);
    this.data.step = this.validStep(config.step);
    this.data.min = config.min;
    this.data.max = config.max;
    this.data.min = this.validMin(config.min);
    this.data.max = this.validMax(config.max);
    this.data.valueTo = this.validValueTo(config.valueTo);
    this.data.valueFrom = this.validValueFrom(config.valueFrom);
  }

  update(updateParameter) {
    switch (updateParameter.key) {
      case 'type':
        if (updateParameter.key === 'double' && this.data.type === 'single') {
          this.data.valueFrom = this.data.min;
        }

        this.data.type = this.validType(updateParameter.value);
        this.data.valueFrom = this.validValueFrom(this.data.valueFrom);
        break;
      case 'step':
        this.data.step = this.validStep(updateParameter.value);
        this.data.valueFrom = this.validValueFrom(this.data.valueFrom);
        this.data.valueTo = this.validValueTo(this.data.valueTo);
        break;
      case 'min':
        this.data.min = this.validMin(updateParameter.value);
        this.data.valueFrom = this.validValueFrom(this.data.valueFrom);
        this.data.valueTo = this.validValueTo(this.data.valueTo);
        break;
      case 'max':
        this.data.max = this.validMax(updateParameter.value);
        this.data.valueFrom = this.validValueFrom(this.data.valueFrom);
        this.data.valueTo = this.validValueTo(this.data.valueTo);
        break;
      case 'valueFrom':
        this.data.valueFrom = this.validValueFrom(updateParameter.value);
        break;
      case 'valueTo':
        this.data.valueTo = this.validValueTo(updateParameter.value);
        break;
    }
  }
}
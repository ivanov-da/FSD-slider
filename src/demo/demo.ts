import '../slider/slider.ts';
import {MDCTextField} from '@material/textfield';
import {MDCSwitch} from '@material/switch';



$(document).ready(function () {

  // обработчики событий на инпуты
  function getSwitchValue() {
    return this.getAttribute('aria-checked');
  }

  function getMinValue() {
    const property = {
      name: 'min',
      value: this.value
    };
    return property;
  }

  function getMaxValue() {
    const property = {
      name: 'max',
      value: this.value
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function getStepValue() {
    const property = {
      name: 'step',
      value: this.value
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function getFromValue() {
    const property = {
      name: 'valueFrom',
      value: this.value
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function getToValue() {
    const property = {
      name: 'valueTo',
      value: this.value
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function getDirectionValue() {
    const property = {
      name: 'direction',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function getIntervalValue() {
    const property = {
      name: 'type',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-one').fsdSlider('update', property);
  }

  
  //элементы материал инпутов
  let sliderOneInputs = {
    inputs: [],
    switches: [],
  };

  let sliderTwoInputs = {
    inputs: [],
    switches: [],
  };

  let sliderThreeInputs = {
    inputs: [],
    switches: [],
  };

  let sliderFourInputs = {
    inputs: [],
    switches: [],
  };

  
  $('#first-panel .mdc-text-field').each(function (i, obj) {
    sliderOneInputs.inputs[i] = new MDCTextField(obj);
  });

  $('#second-panel .mdc-text-field').each(function (i, obj) {
    sliderTwoInputs.inputs[i] = new MDCTextField(obj);
  });

  $('#third-panel .mdc-text-field').each(function (i, obj) {
    sliderThreeInputs.inputs[i] = new MDCTextField(obj);
  });

  $('#fourth-panel .mdc-text-field').each(function (i, obj) {
    sliderFourInputs.inputs[i] = new MDCTextField(obj);
  });

  sliderOneInputs.inputs.forEach((element, i) => {
    let property;
    switch (i) {
      case 0:
        property = element.root.querySelector('.mdc-text-field__input').addEventListener('input', getMinValue);
        break;
      case 1:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getMaxValue);
        break;
      case 2:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getStepValue);
        break;
      case 3:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getFromValue);
        break;
      case 4:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getToValue);
        break;
    }

    console.log("🚀 ~ file: demo.ts ~ line 129 ~ sliderOneInputs.inputs.forEach ~ property;", property;)
  });
    

  sliderTwoInputs.inputs.forEach((element, i) => {
    switch (i) {
      case 0:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getMinValue);
        break;
      case 1:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getMaxValue);
        break;
      case 2:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getStepValue);
        break;
      case 3:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getFromValue);
        break;
      case 4:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getToValue);
        break;
    }
  });

  sliderThreeInputs.inputs.forEach((element, i) => {
    switch (i) {
      case 0:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getMinValue);
        break;
      case 1:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getMaxValue);
        break;
      case 2:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getStepValue);
        break;
      case 3:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getFromValue);
        break;
      case 4:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getToValue);
        break;
    }
  });

  sliderFourInputs.inputs.forEach((element, i) => {
    switch (i) {
      case 0:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getMinValue);
        break;
      case 1:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getMaxValue);
        break;
      case 2:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getStepValue);
        break;
      case 3:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getFromValue);
        break;
      case 4:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', getToValue);
        break;
    }
  });

  $('#first-panel .mdc-switch').each(function (i, obj) {
    sliderOneInputs.switches[i] = new MDCSwitch(obj);
    sliderOneInputs.switches[i].root.querySelector('.mdc-switch__native-control').addEventListener('change', getSwitchValue);
  });

  $('#second-panel .mdc-switch').each(function (i, obj) {
    sliderTwoInputs.switches[i] = new MDCSwitch(obj);
    sliderTwoInputs.switches[i].root.querySelector('.mdc-switch__native-control').addEventListener('change', getSwitchValue);
  });

  $('#third-panel .mdc-switch').each(function (i, obj) {
    sliderThreeInputs.switches[i] = new MDCSwitch(obj);
    sliderThreeInputs.switches[i].root.querySelector('.mdc-switch__native-control').addEventListener('change', getSwitchValue);
  });

  $('#fourth-panel .mdc-switch').each(function (i, obj) {
    sliderFourInputs.switches[i] = new MDCSwitch(obj);
    sliderFourInputs.switches[i].root.querySelector('.mdc-switch__native-control').addEventListener('change', getSwitchValue);
  });
  
  sliderOneInputs.switches.forEach((element, i) => {
    switch (i) {
      case 0:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('input', getDirectionValue);
        break;
      case 1:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('input', getIntervalValue);
        break;
      case 2:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('input', getScaleValue);
        break;
      case 3:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('input', getPopoverValue);
        break;
    }
  });
  
  
  //экземпляры слайдеров
  $('.slider-one').fsdSlider();
  $('.slider-two').fsdSlider({
        direction: 'vertical', // horizontal or vertical
        type: 'single', // single or double
        popover: true,
        scale: true,
        min: 0,
        max: 1000,
        valueFrom: 50,
        valueTo: 500,
        step: 50,
  });
  $('.slider-three').fsdSlider({
        direction: 'vertical', // horizontal or vertical
        type: 'single', // single or double
        popover: true,
        scale: false,
        min: 0,
        max: 10,
        valueFrom: 1,
        valueTo: 9,
        step: 1,
  });
  $('.slider-four').fsdSlider({
        direction: 'horizontal', // horizontal or vertical
        type: 'single', // single or double
        popover: false,
        scale: true,
        min: -1,
        max: 1,
        valueFrom: -1,
        valueTo: 0,
        step: 0.1,
  });



  let sliderOneType = document.getElementsByName('sliderOneType');

  //тест передачи данных в слайдер
  for (let radio of sliderOneType) {
    radio.addEventListener('click', (event) => {
      const property= {
        name: 'type',
        value: event.target.value,
      }
      
      $('.slider-one').fsdSlider('update', property);
    });
  }



  }
});
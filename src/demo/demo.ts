import '../slider/slider.ts';
import {MDCTextField} from '@material/textfield';
import {MDCSwitch} from '@material/switch';



$(document).ready(function () {

  // обработчики событий на инпуты
  function getSwitchValue() {
    return this.getAttribute('aria-checked');
  }

  function getInputValue() {
    return this.value;
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
    sliderOneInputs.inputs[i].root.querySelector('.mdc-text-field__input').addEventListener('input', getInputValue);
  });

  $('#second-panel .mdc-text-field').each(function (i, obj) {
    sliderTwoInputs.inputs[i] = new MDCTextField(obj);
    sliderTwoInputs.inputs[i].root.querySelector('.mdc-text-field__input').addEventListener('input', getInputValue);
  });

  $('#third-panel .mdc-text-field').each(function (i, obj) {
    sliderThreeInputs.inputs[i] = new MDCTextField(obj);
    sliderThreeInputs.inputs[i].root.querySelector('.mdc-text-field__input').addEventListener('input', getInputValue);
  });

  $('#fourth-panel .mdc-text-field').each(function (i, obj) {
    sliderFourInputs.inputs[i] = new MDCTextField(obj);
    sliderFourInputs.inputs[i].root.querySelector('.mdc-text-field__input').addEventListener('input', getInputValue);
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
  console.log(sliderOneInputs, sliderTwoInputs, sliderThreeInputs, sliderFourInputs)

  
  
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
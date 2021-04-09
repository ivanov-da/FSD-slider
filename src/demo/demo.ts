import '../slider/slider.ts';
import {MDCTextField} from '@material/textfield';
import {MDCSwitch} from '@material/switch';



$(document).ready(function () {

  // обработчики событий на инпуты
  function getSwitchValue() {
    return this.getAttribute('aria-checked');
  }

  function updateSliderOneMinValue() {
    const property = {
      name: 'min',
      value: this.value
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function updateSliderTwoMinValue() {
    const property = {
      name: 'min',
      value: this.value
    };
    $('.slider-two').fsdSlider('update', property);
  }

  function updateSliderThreeMinValue() {
    const property = {
      name: 'min',
      value: this.value
    };
    $('.slider-three').fsdSlider('update', property);
  }

  function updateSliderFourMinValue() {
    const property = {
      name: 'min',
      value: this.value
    };
    $('.slider-four').fsdSlider('update', property);
  }

  function updateSliderOneMaxValue() {
    const property = {
      name: 'max',
      value: this.value
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function updateSliderTwoMaxValue() {
    const property = {
      name: 'max',
      value: this.value
    };
    $('.slider-two').fsdSlider('update', property);
  }

  function updateSliderThreeMaxValue() {
    const property = {
      name: 'max',
      value: this.value
    };
    $('.slider-three').fsdSlider('update', property);
  }

  function updateSliderFourMaxValue() {
    const property = {
      name: 'max',
      value: this.value
    };
    $('.slider-four').fsdSlider('update', property);
  }

  function updateSliderOneStepValue() {
    const property = {
      name: 'step',
      value: this.value
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function updateSliderTwoStepValue() {
    const property = {
      name: 'step',
      value: this.value
    };
    $('.slider-two').fsdSlider('update', property);
  }

  function updateSliderThreeStepValue() {
    const property = {
      name: 'step',
      value: this.value
    };
    $('.slider-three').fsdSlider('update', property);
  }

  function updateSliderFourStepValue() {
    const property = {
      name: 'step',
      value: this.value
    };
    $('.slider-four').fsdSlider('update', property);
  }

  function updateSliderOneFromValue() {
    const property = {
      name: 'valueFrom',
      value: this.value
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function updateSliderTwoFromValue() {
    const property = {
      name: 'valueFrom',
      value: this.value
    };
    $('.slider-two').fsdSlider('update', property);
  }

  function updateSliderThreeFromValue() {
    const property = {
      name: 'valueFrom',
      value: this.value
    };
    $('.slider-three').fsdSlider('update', property);
  }

  function updateSliderFourFromValue() {
    const property = {
      name: 'valueFrom',
      value: this.value
    };
    $('.slider-four').fsdSlider('update', property);
  }

  function updateSliderOneToValue() {
    const property = {
      name: 'valueTo',
      value: this.value
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function updateSliderTwoToValue() {
    const property = {
      name: 'valueTo',
      value: this.value
    };
    $('.slider-two').fsdSlider('update', property);
  }

  function updateSliderThreeToValue() {
    const property = {
      name: 'valueTo',
      value: this.value
    };
    $('.slider-three').fsdSlider('update', property);
  }

  function updateSliderFourToValue() {
    const property = {
      name: 'valueTo',
      value: this.value
    };
    $('.slider-four').fsdSlider('update', property);
  }

  function updateSliderOneDirectionValue() {
    const property = {
      name: 'direction',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function updateSliderTwoDirectionValue() {
    const property = {
      name: 'direction',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-two').fsdSlider('update', property);
  }

  function updateSliderThreeDirectionValue() {
    const property = {
      name: 'direction',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-three').fsdSlider('update', property);
  }

  function updateSliderFourDirectionValue() {
    const property = {
      name: 'direction',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-four').fsdSlider('update', property);
  }

  function updateSliderOneIntervalValue() {
    const property = {
      name: 'type',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function updateSliderTwoIntervalValue() {
    const property = {
      name: 'type',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-two').fsdSlider('update', property);
  }

  function updateSliderThreeIntervalValue() {
    const property = {
      name: 'type',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-three').fsdSlider('update', property);
  }

  function updateSliderFourIntervalValue() {
    const property = {
      name: 'type',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-four').fsdSlider('update', property);
  }

  function updateSliderOneScaleValue() {
    const property = {
      name: 'scale',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function updateSliderTwoScaleValue() {
    const property = {
      name: 'scale',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-two').fsdSlider('update', property);
  }

  function updateSliderThreeScaleValue() {
    const property = {
      name: 'scale',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-three').fsdSlider('update', property);
  }

  function updateSliderFourScaleValue() {
    const property = {
      name: 'scale',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-four').fsdSlider('update', property);
  }

  function updateSliderOnePopoverValue() {
    const property = {
      name: 'popover',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-one').fsdSlider('update', property);
  }

  function updateSliderTwoPopoverValue() {
    const property = {
      name: 'popover',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-two').fsdSlider('update', property);
  }

  function updateSliderThreePopoverValue() {
    const property = {
      name: 'popover',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-three').fsdSlider('update', property);
  }

  function updateSliderFourPopoverValue() {
    const property = {
      name: 'popover',
      value: this.getAttribute('aria-checked')
    };
    $('.slider-four').fsdSlider('update', property);
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
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderOneMinValue);
        break;
      case 1:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderOneMaxValue);
        break;
      case 2:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderOneStepValue);
        break;
      case 3:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderOneFromValue);
        break;
      case 4:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderOneToValue);
        break;
    }

    
  });
    

  sliderTwoInputs.inputs.forEach((element, i) => {
    switch (i) {
      case 0:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderTwoMinValue);
        break;
      case 1:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderTwoMaxValue);
        break;
      case 2:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderTwoStepValue);
        break;
      case 3:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderTwoFromValue);
        break;
      case 4:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderTwoToValue);
        break;
    }
  });

  sliderThreeInputs.inputs.forEach((element, i) => {
    switch (i) {
      case 0:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderThreeMinValue);
        break;
      case 1:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderThreeMaxValue);
        break;
      case 2:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderThreeStepValue);
        break;
      case 3:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderThreeFromValue);
        break;
      case 4:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderThreeToValue);
        break;
    }
  });

  sliderFourInputs.inputs.forEach((element, i) => {
    switch (i) {
      case 0:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderFourMinValue);
        break;
      case 1:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderFourMaxValue);
        break;
      case 2:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderFourStepValue);
        break;
      case 3:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderFourFromValue);
        break;
      case 4:
        element.root.querySelector('.mdc-text-field__input').addEventListener('input', updateSliderFourToValue);
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
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderOneDirectionValue);
        break;
      case 1:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderOneIntervalValue);
        break;
      case 2:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderOneScaleValue);
        break;
      case 3:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderOnePopoverValue);
        break;
    }
  });

  sliderTwoInputs.switches.forEach((element, i) => {
    switch (i) {
      case 0:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderTwoDirectionValue);
        break;
      case 1:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderTwoIntervalValue);
        break;
      case 2:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderTwoScaleValue);
        break;
      case 3:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderTwoPopoverValue);
        break;
    }
  });

  sliderThreeInputs.switches.forEach((element, i) => {
    switch (i) {
      case 0:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderThreeDirectionValue);
        break;
      case 1:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderThreeIntervalValue);
        break;
      case 2:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderThreeScaleValue);
        break;
      case 3:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderThreePopoverValue);
        break;
    }
  });

  sliderFourInputs.switches.forEach((element, i) => {
    switch (i) {
      case 0:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderFourDirectionValue);
        break;
      case 1:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderFourIntervalValue);
        break;
      case 2:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderFourScaleValue);
        break;
      case 3:
        element.root.querySelector('.mdc-switch__native-control').addEventListener('change', updateSliderFourPopoverValue);
        break;
    }
  });
  
  function syncSliderOne(data) {
    console.log(data);
    sliderOneInputs.inputs[0].value = data.state.min;
    sliderOneInputs.inputs[1].value = data.state.max;
    sliderOneInputs.inputs[2].value = data.state.step;
    sliderOneInputs.inputs[3].value = +data.state.valueFrom;
    sliderOneInputs.inputs[4].value = data.state.valueTo;
    sliderOneInputs.switches[0].checked = data.state.direction === 'vertical';
    sliderOneInputs.switches[1].checked = data.state.type;
    sliderOneInputs.switches[2].checked = data.state.scale;
    sliderOneInputs.switches[3].checked = data.state.popover;
    
  }

  function syncSliderTwo(data) {
    console.log(data);
    sliderTwoInputs.inputs[0].value = data.state.min;
    sliderTwoInputs.inputs[1].value = data.state.max;
    sliderTwoInputs.inputs[2].value = data.state.step;
    sliderTwoInputs.inputs[3].value = +data.state.valueFrom;
    sliderTwoInputs.inputs[4].value = data.state.valueTo;
    sliderTwoInputs.switches[0].checked = data.state.direction === 'vertical';
    sliderTwoInputs.switches[1].checked = data.state.type;
    sliderTwoInputs.switches[2].checked = data.state.scale;
    sliderTwoInputs.switches[3].checked = data.state.popover;
  }

  function syncSliderThree(data) {
    console.log(data);
    sliderThreeInputs.inputs[0].value = data.state.min;
    sliderThreeInputs.inputs[1].value = data.state.max;
    sliderThreeInputs.inputs[2].value = data.state.step;
    sliderThreeInputs.inputs[3].value = +data.state.valueFrom;
    sliderThreeInputs.inputs[4].value = data.state.valueTo;
    sliderThreeInputs.switches[0].checked = data.state.direction === 'vertical';
    sliderThreeInputs.switches[1].checked = data.state.type;
    sliderThreeInputs.switches[2].checked = data.state.scale;
    sliderThreeInputs.switches[3].checked = data.state.popover;
  }

  function syncSliderFour(data) {
    console.log(data);
    sliderFourInputs.inputs[0].value = data.state.min;
    sliderFourInputs.inputs[1].value = data.state.max;
    sliderFourInputs.inputs[2].value = data.state.step;
    sliderFourInputs.inputs[3].value = +data.state.valueFrom;
    sliderFourInputs.inputs[4].value = data.state.valueTo;
    sliderFourInputs.switches[0].checked = data.state.direction === 'vertical';
    sliderFourInputs.switches[1].checked = data.state.type;
    sliderFourInputs.switches[2].checked = data.state.scale;
    sliderFourInputs.switches[3].checked = data.state.popover;
  }
  
  //экземпляры слайдеров
  $('.slider-one').fsdSlider();
  $('.slider-one').fsdSlider('sync', syncSliderOne);

  $('.slider-two').fsdSlider({
        direction: 'vertical', // horizontal or vertical
        type: 'single', // single or double
        popover: true,
        scale: true,
        min: 0,
        max: 1000,
        valueFrom: null,
        valueTo: 500,
        step: 50,
  });
  $('.slider-two').fsdSlider('sync', syncSliderTwo);

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
  $('.slider-three').fsdSlider('sync', syncSliderThree);

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
  $('.slider-four').fsdSlider('sync', syncSliderFour);



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
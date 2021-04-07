import '../slider/slider.ts';
import {MDCTextField} from '@material/textfield';
import {MDCSwitch} from '@material/switch';



$(document).ready(function () {

  function getSwitchValue() {
    console.log(this.getAttribute('aria-checked'));
  }
  
  $('.mdc-text-field').each(function (i, obj) {
    MDCTextField.attachTo(obj);
  });

  const switches = [];
  
  /* let switch; */

  $('.mdc-switch').each(function (i, obj) {
    
    switches[i] = new MDCSwitch(obj);

    switches[i].root.querySelector('.mdc-switch__native-control').addEventListener('change', getSwitchValue);
    
    console.log("🚀 ~ file: demo.ts ~ line 14 ~ switches", switches[i])
  });

  

  
  

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
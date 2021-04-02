import '../slider/slider.ts';
import {MDCTextField} from '@material/textfield';
import {MDCSwitch} from '@material/switch';



$(document).ready(function () {

  $('.mdc-text-field').each(function (i, obj) {
    MDCTextField.attachTo(obj);
  });

  $('.mdc-switch').each(function (i, obj) {
    MDCSwitch.attachTo(obj);
  });


  
  

  $('.slider-one').fsdSlider();
/*   $('.fsd-slider2').fsdSlider();
  $('#test-slider').fsdSlider(); */

  let sliderOneType = document.getElementsByName('sliderOneType');
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
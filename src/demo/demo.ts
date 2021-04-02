import '../slider/slider.ts';
import {MDCTextField} from '@material/textfield';




$(document).ready(function () {
  const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

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
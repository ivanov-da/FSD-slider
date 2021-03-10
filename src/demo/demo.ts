import '../slider/slider.ts';

$(document).ready(function () {
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
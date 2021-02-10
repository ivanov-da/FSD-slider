import Model from './model/model';
/* import View from './view/view.js';
import Presenter from './presenter/presenter.js';
import Observer from './observer/observer.js'; */

(function ($) {
  jQuery.fn.fsdSlider = function (options) {
    options = $.extend({
      direction: 'horizontal',
      type: 'single',
      min: 0,
      max: 10,
      valueFrom: null,
      valueTo: 75,
      step: 2,
    }, options);

    let make = function () {
      const line = document.querySelector('.fsd-slider__line');
      const coordinates = line.getBoundingClientRect();

      const handle = document.querySelector('.fsd-slider__handle');
      let handleWidth = handle.getBoundingClientRect().width / 2 / coordinates.width * 100;
      console.log("🚀 ~ file: slider.js ~ line 24 ~ make ~ handleWidthPercentage", handleWidth)
      


      line.addEventListener('click', event => {

        
        
        
        let newPosition = (event.clientX - coordinates.x) / coordinates.width;
        console.log("🚀 ~ file: slider.js ~ line 34 ~ make ~ newPosition", newPosition)
        

        let newPositionStyle = newPosition * 100 - handleWidth;
        console.log("🚀 ~ file: slider.js ~ line 33 ~ make ~ newPositionStyle", newPositionStyle)
        handle.style.left = newPositionStyle + '%';

        


      })
      
    };

    return this.each(make);
  };
})(jQuery);
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
      const handle = document.querySelector('.fsd-slider__handle');
      
      line.addEventListener('click', event => {
        const coordinates = line.getBoundingClientRect();
        let halfHandleWidthPercent = handle.getBoundingClientRect().width / 2 / coordinates.width * 100;
        let newPosition = (event.clientX - coordinates.x) / coordinates.width;
        let newPositionStyle = newPosition * 100 - halfHandleWidthPercent;
        handle.style.left = newPositionStyle + '%';
      });

      handle.onmousedown = function (event) {
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)

        const coordinates = line.getBoundingClientRect();
        let halfHandleCorrection = handle.getBoundingClientRect().width / 2 / coordinates.width;
        console.log("🚀 ~ file: slider.js ~ line 38 ~ make ~ halfHandleCorrection", halfHandleCorrection)
        
        let shift = event.clientX  - handle.getBoundingClientRect().left;
        

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        

        function onMouseMove(event) {
          let newPosition = (event.clientX - shift - coordinates.left) / coordinates.width;
          
  
          // курсор вышел из слайдера => оставить бегунок в его границах.
          if (newPosition < 0 - halfHandleCorrection) {
            newPosition = -halfHandleCorrection;
          }

          if (newPosition > 1 - halfHandleCorrection) {
            newPosition = 1 - halfHandleCorrection;
          }
  
          handle.style.left = newPosition * 100+ '%';
          console.log("🚀 ~ file: slider.js ~ line 61 ~ onMouseMove ~ handle.style.left", handle.style.left)

          
          
        }

        function onMouseUp() {
          document.removeEventListener('mouseup', onMouseUp);
          document.removeEventListener('mousemove', onMouseMove);
        }

      };

      handle.ondragstart = function() {
        return false;
      };






    };


    return this.each(make);
  };
})(jQuery);
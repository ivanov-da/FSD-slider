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
        let handleWidth = handle.getBoundingClientRect().width / 2 / coordinates.width * 100;
        let newPosition = (event.clientX - coordinates.x) / coordinates.width;
        let newPositionStyle = newPosition * 100 - handleWidth;
        handle.style.left = newPositionStyle + '%';
      });

      handle.onmousdown = function (event) {
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)

        const coordinates = line.getBoundingClientRect();
        let shiftX = (event.clientX - coordinates.x) - handle.getBoundingClientRect().left;
        

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        

        function onMouseMove(event) {
          let newPosition = event.clientX - shiftX - coordinates.left;
  
          // курсор вышел из слайдера => оставить бегунок в его границах.
          if (newPosition < 0) {
            newPosition = 0;
          }

          let rightEdge = coordinates.offsetWidth - handle.offsetWidth;
          if (newPosition > rightEdge) {
            newPosition = rightEdge;
          }
  
          handle.style.left = newPosition + 'px';
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
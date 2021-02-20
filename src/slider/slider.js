import Model from './model/model';
import View from './view/view.js';
import Presenter from './presenter/presenter.js';
/* import Observer from './observer/observer.js'; */

(function ($) {
  jQuery.fn.fsdSlider = function (options) {
    options = $.extend({
      direction: 'horizontal',
      type: 'single',
      min: -100,
      max: 100,
      valueFrom: null,
      valueTo: 50,
      step: 1,
    }, options);




    let make = function () {


      let model = new Model();
      let view = new View(this);
      let presenter = new Presenter(model, view);
      
      model.init(options);
      view.init();
      presenter.init();

      
      
      

      // привязка вида
      const line = document.querySelector('.fsd-slider__line');
      const handle = document.querySelector('.fsd-slider__handle');

      // drug'n'drop
      handle.onmousedown = function (event) {
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)

        const coordinates = line.getBoundingClientRect();
        let halfHandleCorrection = handle.getBoundingClientRect().width / 2 / coordinates.width;        
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
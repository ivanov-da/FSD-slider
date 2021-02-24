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
    };


    return this.each(make);
  };
})(jQuery);
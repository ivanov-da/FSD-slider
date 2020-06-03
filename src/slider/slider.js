import Model from './model/model.js';
import View from './view/view.js';
import Presenter from './presenter/presenter.js';
import Observer from './observer/observer.js';



(function ($) {
  jQuery.fn.fsdSlider = function (options) {
    options = $.extend({
      direction: 'horizontal',
      type: 'single',
      min: 10,
      max: 100,
      valueFrom: null,
      valueTo: 50,
      step: 1,
    }, options);

    let make = function () {
      const $this = $(this);
      let view = new View($this);
      let model = new Model();
      let presenter = new Presenter(model, view, options);

      view.init();
    };

    return this.each(make);
  };
})(jQuery);
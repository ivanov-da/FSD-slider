import Model from './model/model';
import View from './view/view';
import Presenter from './presenter/presenter';

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

    };


    return this.each(make);
  };
})(jQuery);
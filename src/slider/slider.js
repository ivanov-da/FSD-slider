import Model from './model/model.js';
import View from './view/view.js';
import Presenter from './presenter/presenter.js';
import Observer from './observer/observer.js';



(function ($) {
  jQuery.fn.fsdSlider = function (options) {
    options = $.extend({}, options);

    let make = function () {
      const $this = $(this);
      let view = new View($this);
      view.init();
      console.log(options);
    };

    return this.each(make);
  };
})(jQuery);
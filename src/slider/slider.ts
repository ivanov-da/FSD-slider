import Model from './model/model';
import View from './view/view';
import Presenter from './presenter/presenter';
import presenter from './presenter/presenter';

(function ($) {

  let methods = {
    init : function( options ) {
      let settings = $.extend({
        direction: 'horizontal',
        type: 'double',
        popover: true,
        min: 0,
        max: 1,
        valueFrom: 0,
        valueTo: 1,
        step: 0.05,
      }, options);

      let model = new Model();
      let view = new View(this[0]);
      let presenter = new Presenter(model, view);
      
      model.init(settings);
      view.init(model.state);
      presenter.init();
    },

    update : function( content ) {
      console.log(content);

    }
  };

  $.fn.tooltip = function( method ) {
    
    // логика вызова метода

  };

  $.fn.fsdSlider = function (method) {
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
    } 

    return this.each(make);
  };
})(jQuery);
import Model from './model/model';
import View from './view/view';
import Presenter from './presenter/presenter';
import presenter from './presenter/presenter';

(function ($) {

  let model;
  let view;
  let presenter;

  let methods = {
    init : function( options ) {
      let settings = $.extend({
        direction: 'horizontal', // horizontal or vertical
        type: 'double', // single or double
        popover: true,
        scale: false,
        min: -100,
        max: 100,
        valueFrom: -100,
        valueTo: 100,
        step: 1,
      }, options);

      model = new Model();
      view = new View(this[0]);
      presenter = new Presenter(model, view);
      
      model.init(settings);
      view.init(model.state);
      presenter.init();
    },

    update : function( content ) {
      console.log(content);

    }

    sync: function(syncFunction) {
      model.addObserver(syncFunction);
      console.log(model)
    }
  };


  $.fn.fsdSlider = function (method) {
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.fsdSlider' );
    } 
  };
})(jQuery);
import Model from './model/model.js';
import View from './view/view.js';
import Presenter from './presenter/presenter.js';
import Observer from './observer/observer.js';

$(document).ready(function () {
  //let observer = new Observer();

  let model = new Model();
  let view = new View(model);
  let presenter = new Presenter(model, view);



});
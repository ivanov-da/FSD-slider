import Observer from "../observer/observer";

export default class View {

  constructor(model, routJQobj) {
    let $slider = $(".slider");

    this.model = model;

    this.observerView = new Observer();

    // Аналог view в процедурном типе
    let template =
      `<div class='fsd-slider'>` +
      `<div class='fsd-slider__line'></div>` +
      `<div class='fsd-slider__bar'></div>` +
      `<div class='fsd-slider__handle'></div>` +
      `</div>`;

    $slider.html(template);

    $(".fsd-slider__line").click(function () {
      let positionX = model.value;
      //let positionX = ((event.layerX - 8) / 500) * 100;
      let out = "left: " + positionX + "%";
      let outAnimate = positionX + "%";
      //$(".fsd-slider__handle").attr("style", out);
      $(".fsd-slider__handle").animate({
        left: outAnimate
      }, 500);
    });


    $(".fsd-slider__handle").click(function () {

      model.testMethod();


    });

  }

  setState() {
    this.state = this.model.getState();
    console.log('value в view', this.state.value)
  }

}
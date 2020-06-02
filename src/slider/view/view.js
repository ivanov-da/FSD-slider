export default class View {

  constructor(model, presenter) {
    let $slider = $(".slider");



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
      //console.log(presenter.state);
    });

  }

  /* reCalculateValue() {
    let pos = presenter.state.value + '%';
    $(".fsd-slider__handle").animate({
      left: outAnimate
    }, 500);
  } */
}
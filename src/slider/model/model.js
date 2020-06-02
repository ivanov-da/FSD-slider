$(document).ready(function () {
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
    positionX = ((event.layerX - 8) / 500) * 100;
    out = "left: " + positionX + "%";
    outAnimate = positionX + "%";
    //$(".fsd-slider__handle").attr("style", out);
    $(".fsd-slider__handle").animate({ left: outAnimate }, 500);
  });
});

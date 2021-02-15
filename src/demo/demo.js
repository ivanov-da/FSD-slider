import '../slider/slider.js';

$(document).ready(function () {
  $(".test-slider").fsdSlider({
    direction: "horizontal",
    type: "single",
    min: 10,
    max: 500,
    valueFrom: null,
    valueTo: 100,
    step: 1,
  });

  

});
define(["jquery", "marquee"], function(jQuery3_2_1, marquee) {
  var jQueryNoConflict = jQuery3_2_1.noConflict(true);
  jQueryNoConflict.marquee = jQuery3_2_1.marquee;

  return jQueryNoConflict;
});
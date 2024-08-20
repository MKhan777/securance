/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {
  "use strict";

  Drupal.behaviors.securance = {
    attach: function (context, settings) {
      var flkty = new Flickity(".view-our-services .flickity", {
        cellAlign: "left", // Align cells to the left
        contain: true, // Contain cells within the carousel
        groupCells: 1, // Scroll one slide at a time
        wrapAround: true, // Optional: allow infinite scrolling
        pageDots: false,
      });
      var flkty = new Flickity(".our-partners-block .flickity", {
        cellAlign: "left", // Align cells to the left
        contain: true, // Contain cells within the carousel
        groupCells: 4, // Scroll one slide at a time
        wrapAround: true, // Optional: allow infinite scrolling
        pageDots: true,
      });
    },
  };
})(jQuery, Drupal);

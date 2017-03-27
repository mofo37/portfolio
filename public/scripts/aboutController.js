'use strict';

(function(module) {
  console.log('aboutController');
  const aboutController = {};

  aboutController.render = function() {
    $('#articles').hide();
    $('#about').fadeIn();
  }

  module.aboutController = aboutController;
})(window);
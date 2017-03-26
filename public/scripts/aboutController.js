'use strict';

(function(module) {
  const aboutController = {};

  aboutController.render = function() {
    $('#articles').hide();
    $('#about').fadeIn();
    console.log('I\'m about');
  }

  module.aboutController = aboutController;
})(window);
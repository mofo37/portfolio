'use strict';

(function(module) {
  const aboutController = {};

  aboutController.logview = function() {
    console.log('From aboutController');
  }

  aboutController.render = function() {
    $('#articles').hide();
    $('#about').fadeIn();
  }

  module.aboutController = aboutController;
})(window);
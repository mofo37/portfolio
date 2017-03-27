'use strict';

Project.fetchAll();

(function(module) {
  console.log('homeController');
  const homeController = {};

  homeController.render = function() {
    $('#about').hide();
    $('#articles').fadeIn();
  }

  module.homeController = homeController;
})(window);
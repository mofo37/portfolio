'use strict';

Project.fetchAll();

(function(module) {
  const homeController = {};

  homeController.logview = function() {
    console.log('From homeController');
  }

  homeController.render = function() {
    $('#about').hide();
    $('#articles').fadeIn();
  }

  module.homeController = homeController;
})(window);
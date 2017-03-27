'use strict';

(function(module) {
  console.log('reposController');
  const reposController = {};

  reposController.render = function() {
    $('#articles, #about').hide();
    $('#repos').fadeIn();
    repos.requestRepos(repoView.index);
  }
    

  module.reposController = reposController;
})(window);
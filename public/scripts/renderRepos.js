'use strict';

(function(module) {
  console.log('renderRepos1');
  const repoView = {};
  const ui = function() {
    let $repos = $('#repos'); 
    $repos.show().siblings().hide();
  };

  function render(repo) {
    console.log('renderRepos2');
    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);
    return template(repo);
  }

  repoView.index = function() {
    ui();

    $('#repos').append(
      repos.with('name').map(render) 
    );
  };

  module.repoView = repoView;
})(window);


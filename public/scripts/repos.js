'use strict';

(function(module) {
  console.log('repos');
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax('https://api.github.com/users/mofo37/repos', {
      method:'GET',
    }).then((res) => {
      var filteredRepos = res.filter(r => r.fork === false);
      repos.all = filteredRepos;
      callback();
    }) .catch((err) => {console.error})
  };
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);

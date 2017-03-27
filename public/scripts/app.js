'use strict';

function Project (input) {
  this.title = input.title;
  this.homePage = input.homePage;
  this.author = input.author;
  this.projectLink = input.projectLink;
  this.description = input.description;
}

Project.prototype.toHtml = function() {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

Project.loadAll = function(data) {
  console.log('app1');
  Project.prototype.render = function() {
    $('#articles').append(this.toHtml());
  };
  data.forEach(function(ele) {
    new Project(ele).render();
  });
};

Project.fetchAll = function() {
  if (localStorage.data){
    console.log('app2')
    var storedData = localStorage.getItem('data');
    var parsedData = JSON.parse(storedData);
    Project.loadAll(parsedData);
  } else {
    $.ajax({
      url:'scripts/projects.json',
      method:'GET',
      success: function(data) {
        var stringData = JSON.stringify(data);
        localStorage.setItem('data', stringData);
        Project.loadAll(data);
      },
      error: function(err) {
        console.log('in error handler', err);
      }
    });
  }
};
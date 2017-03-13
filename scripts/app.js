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

Project.prototype.render = function() {
  $('main').append(this.toHtml());
};

sourceData.forEach(function(ele) {
  new Project(ele).render();
});

Project.fetchAll = function() {
  if (localStorage.rawData){
    var storedData = localStorage.getItem(Data);
    Project.loadAll(storedData);

  } else {
    $.ajax({
      url:'projects.json',
      method:'GET',
      success: function(data) {
        localStorage.setItem('data', data);
        Project.loadAll(data);
        
      },
      error: function(err) {
        console.log('in error handler', err);
      }
    });
  }
};

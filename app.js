'use strict';

function Project (input) {
  this.title = input.title;
  this.homePage = input.homePage;
  this.author = input.author;
  this.projectLink = input.projectLink;
  this.description = input.description;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone().removeClass('template');
  $newProject.find('h1:first').text(this.title);
  $newProject.find('.project-image', this.homePage);
  $newProject.find('.author').text(this.author);
  $newProject.find('.project-link a').attr('href', this.projectLink);
  $newProject.find('.description').html(this.description);
  return $newProject;
};

Project.prototype.render = function() {
  $('main').append(this.toHtml());
};

sourceData.forEach(function(ele) {
  new Project(ele).render();
});

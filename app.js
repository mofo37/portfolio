'use strict';

var projects = [];

function Project (input) {
  this.name = input.name;
  this.homePage = input.homePage;
  this.author = input.author;
  this.projectLink = input.projectLink;
  this.description = input.description;
};

Projects.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.find('name').text(this.name);
  $newProject.find('project-image', this.homePage);
  $newProject.attr('author', this.author);
  $newProject.attr('project-link', this.projectLink);
  $newProject.find('description').toHtml(this.description);
  return $newProject;
};
$newProject.removeClass();

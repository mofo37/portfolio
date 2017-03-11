'use strict';

var projects = [];

function Project (input) {
  this.title = input.title;
  this.homePage = input.homePage;
  this.author = input.author;
  this.projectLink = input.projectLink;
  this.description = input.description;
};

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.find('h1:first').text(this.title);
  $newProject.find('project-image', this.homePage);
  $newProject.attr('author', this.author);
  $newProject.find('project-link a').attr('href', this.projectLink);
  $newProject.find('description').text(this.description);
  console.log('Hi');
  return $newProject;
};

sourceData.forEach(function(ele) {
  projects.push(new Project(ele));
});


projects.forEach(function(Project){
  $('#articles').append(Project.toHtml());
});


var x = new Project(projects);
x.toHtml();

'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('ArticleCtrl', function ($routeParams, $location, $firebaseObject) {

    var ref = new Firebase('https://abdulahed-alansari.firebaseio.com/articles/' + $routeParams.id);
    var article = $firebaseObject(ref);
    var scope = this;

    article.$loaded().then(function () { scope.article = article; });

    this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];

    this.isEditing = function () { return $routeParams.action === 'edit'; };

    this.save = function () {
      var cb = function () { $location.path('/article/' + $routeParams.id); };
      article.$save().then(cb, cb);
    };

    this.destroy = function () {
      var cb = function () { $location.path('/articles'); };
      article.$remove().then(cb, cb);
    };
  });

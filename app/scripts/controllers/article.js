'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('ArticleCtrl', function ($routeParams, $location, $firebaseObject, FIREBASE_REF) {

    var article = $firebaseObject(FIREBASE_REF.child('articles/' + $routeParams.id));
    var scope = this;

    article.$loaded().then(function () { scope.article = article; });

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

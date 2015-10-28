'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('ArticleCtrl', function ($routeParams, $location, $document, $firebaseObject, FIREBASE_REF) {

    var article = $firebaseObject(FIREBASE_REF.child('articles/' + $routeParams.id));
    var scope = this;
    var articleTextElement = $document[0].getElementById('articleText');

    function changeFont (increment) {
      var currentSize = parseInt(articleTextElement.style.fontSize) || 12;
      articleTextElement.style.fontSize = (currentSize + increment + 'px');
    }

    this.decreaseFont = function () { changeFont(-2); };
    this.increaseFont = function () { changeFont(2); };

    this.resetFont = function () { articleTextElement.style.fontSize = '12px'; };

    article.$loaded()
      .then(function () { scope.article = article; })
      .then(null, function () { $location.path('/articles'); });

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

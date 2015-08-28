'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:ArticlesNewCtrl
 * @description
 * # ArticlesNewCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('ArticlesNewCtrl', function ($location, FIREBASE_REF) {

    var ref = FIREBASE_REF.child('articles');

    this.create = function (article) {
      ref.push(article);
      $location.path('/articles');
    };
  });

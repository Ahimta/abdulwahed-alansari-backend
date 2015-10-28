'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('ArticlesCtrl', function ($firebaseArray, FIREBASE_REF) {

    this.articles = $firebaseArray(FIREBASE_REF.child('articles'));
  });

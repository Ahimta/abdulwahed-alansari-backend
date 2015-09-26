'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:HomepageCtrl
 * @description
 * # HomepageCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('HomepageCtrl', function ($firebaseArray, FIREBASE_REF, UserService) {

    this.articles = $firebaseArray(FIREBASE_REF.child('articles'));

    this.isVisitor = UserService.isVisitor;
    this.isAdmin   = UserService.isAdmin;
  });

'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:QuotesCtrl
 * @description
 * # QuotesCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('QuotesCtrl', function ($firebaseArray, FIREBASE_REF, UserService) {

    this.quotes = $firebaseArray(FIREBASE_REF.child('quotes'));

    this.isVisitor = UserService.isVisitor;
    this.isAdmin   = UserService.isAdmin;
  });

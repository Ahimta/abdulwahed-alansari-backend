'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:PoemsCtrl
 * @description
 * # PoemsCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('PoemsCtrl', function ($firebaseArray, FIREBASE_REF) {

    this.poems = $firebaseArray(FIREBASE_REF.child('poems'));
  });

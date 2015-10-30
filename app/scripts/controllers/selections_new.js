'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:SelectionsNewCtrl
 * @description
 * # SelectionsNewCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('SelectionsNewCtrl', function ($location, FIREBASE_REF) {

    var ref = FIREBASE_REF.child('selections');

    this.create = function (selection)
    {
      ref.push(selection);
      $location.path('/selections');
    };
  });

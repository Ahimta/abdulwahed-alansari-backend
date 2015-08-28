'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:QuotesNewCtrl
 * @description
 * # QuotesNewCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('QuotesNewCtrl', function ($location, FIREBASE_REF) {

    var ref = FIREBASE_REF.child('quotes');

    this.create = function (quote) {
      ref.push(quote);
      $location.path('/quotes');
    };
  });


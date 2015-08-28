'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:BooksNewCtrl
 * @description
 * # BooksNewCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('BooksNewCtrl', function ($location, FIREBASE_REF) {

    var ref = FIREBASE_REF.child('books');

    this.create = function (book) {
      ref.push(book);
      $location.path('/books');
    };
  });

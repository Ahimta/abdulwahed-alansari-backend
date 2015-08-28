'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:BooksNewCtrl
 * @description
 * # BooksNewCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('BooksNewCtrl', function ($location) {

    var ref = new Firebase('https://abdulahed-alansari.firebaseio.com/books');

    this.create = function (book) {
      ref.push(book);
      $location.path('/books');
    };
  });

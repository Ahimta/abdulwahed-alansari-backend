'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:QuotesCtrl
 * @description
 * # QuotesCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('QuotesCtrl', function ($routeParams, $location, $firebaseArray) {

    var ref = new Firebase("https://abdulahed-alansari.firebaseio.com/quotes");
    var quotes = this.quotes = $firebaseArray(ref);

    if ($routeParams.action === 'new') { $location.hash('newQuoteButton'); }

    angular.element('#newQuoteModal').on('shown.bs.modal', function () { angular.element('#quoteText').focus(); });

    this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];

    var editing = null;

    this.isEditing = function (quoteId) { return editing === quoteId; };

    this.edit = function (quoteId) { editing = quoteId; };

    var cancel = this.cancel = function () { editing = null; };

    this.create = function (quote) {
      quotes.$add(quote);
      quote.text = '';
      angular.element('#newQuoteModal').modal('hide');
    };

    this.update = function (quote) {
      cancel();
      quotes.$save(quote);
    };
  });

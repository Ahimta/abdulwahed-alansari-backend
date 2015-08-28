'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:QuotesCtrl
 * @description
 * # QuotesCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('QuotesCtrl', function ($routeParams, $location, $firebaseArray, FIREBASE_REF) {

    var quotes = this.quotes = $firebaseArray(FIREBASE_REF.child('quotes'));

    if ($routeParams.action === 'new') { $location.hash('newQuoteButton'); }

    angular.element('#newQuoteModal').on('shown.bs.modal', function () { angular.element('#quoteText').focus(); });

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

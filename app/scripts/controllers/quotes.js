'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:QuotesCtrl
 * @description
 * # QuotesCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('QuotesCtrl', function ($routeParams, $location) {

    if ($routeParams.action === 'new') {
      $location.hash('newQuoteButton');
    }

    angular.element('#newQuoteModal').on('shown.bs.modal', function () {
      angular.element('#quoteText').focus();
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.quotes = [
      {id: 1, text: 'من جد و جد و من زرع حصد'},
      {id: 2, text: 'سبق السيف العذل'},
      {id: 3, text: 'أكلت يوم أكل الثور الأبيض'}
    ];

    this.create = function (quote) {
      console.log(quote);
      quote.text = '';
      angular.element('#newQuoteModal').modal('hide');
    };

    this.edit = function (quoteId) {
      console.log(quoteId);
    };

    this.destroy = function (quoteId) {
      console.log(quoteId);
    };
  });

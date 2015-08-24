'use strict';

/**
 * @ngdoc overview
 * @name abdulwahedAlansariFrontendApp
 * @description
 * # abdulwahedAlansariFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('abdulwahedAlansariFrontendApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'HomepageCtrl',
        controllerAs: 'homepageCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'aboutCtrl'
      })
      .when('/quotes/:action?', {
        templateUrl: 'views/quotes.html',
        controller: 'QuotesCtrl',
        controllerAs: 'quotesCtrl'
      })
      .when('/articles/:action?', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'articlesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

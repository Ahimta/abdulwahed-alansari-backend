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
    'angular-loading-bar',
    'monospaced.elastic',
    'imgurUpload',
    'ui.bootstrap'
  ])
  .config(function (msdElasticConfig) {
    msdElasticConfig.append = '\n';
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'HomepageCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/quotes', {
        templateUrl: 'views/quotes.html',
        controller: 'QuotesCtrl',
        controllerAs: 'vm'
      })
      .when('/quotes/new', {
        templateUrl: 'views/quotes_new.html',
        controller: 'QuotesNewCtrl',
        controllerAs: 'vm'
      })
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'vm'
      })
      .when('/articles/new', {
        templateUrl: 'views/articles_new.html',
        controller: 'ArticlesNewCtrl',
        controllerAs: 'vm'
      })
      .when('/article/:id/:action?', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl',
        controllerAs: 'vm'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'BooksCtrl',
        controllerAs: 'vm'
      })
      .when('/books/new', {
        templateUrl: 'views/books_new.html',
        controller: 'BooksNewCtrl',
        controllerAs: 'vm'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'vm'
      })
      .when('/poems/new', {
        templateUrl: 'views/poems_new.html',
        controller: 'PoemsNewCtrl',
        controllerAs: 'vm'
      })
      .when('/poems', {
        templateUrl: 'views/poems.html',
        controller: 'PoemsCtrl',
        controllerAs: 'vm'
      })
      .when('/poem/:id/:action?', {
        templateUrl: 'views/poem.html',
        controller: 'PoemCtrl',
        controllerAs: 'vm'
      })
      .when('/selections/new', {
        templateUrl: 'views/selections_new.html',
        controller: 'SelectionsNewCtrl',
        controllerAs: 'vm'
      })
      .when('/selections', {
        templateUrl: 'views/selections.html',
        controller: 'SelectionsCtrl',
        controllerAs: 'vm'
      })
      .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'MediaCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

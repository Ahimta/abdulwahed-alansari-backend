'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('ArticlesCtrl', function ($routeParams, $location, $firebaseArray, CKEDITOR_OPTIONS) {

    if ($routeParams.action === 'new') { $location.hash('newArticleButton'); }

    var ref = new Firebase('https://abdulahed-alansari.firebaseio.com/articles');
    var articles = this.articles = $firebaseArray(ref);

    this.CKEDITOR_OPTIONS = CKEDITOR_OPTIONS;

    angular.element('#newArticleModal').on('shown.bs.modal', function () { angular.element('#articleTitle').focus(); });

    this.create = function (article) {
      articles.$add(article);
      article.title = '';
      article.body = '';
      angular.element('#newArticleModal').modal('hide');
    };
  });

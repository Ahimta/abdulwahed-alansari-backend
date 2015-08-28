'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('ArticlesCtrl', function ($routeParams, $location, $firebaseArray, FIREBASE_REF) {

    if ($routeParams.action === 'new') { $location.hash('newArticleButton'); }

    var articles = this.articles = $firebaseArray(FIREBASE_REF.child('articles'));

    angular.element('#newArticleModal').on('shown.bs.modal', function () { angular.element('#articleTitle').focus(); });

    this.create = function (article) {
      articles.$add(article);
      article.title = '';
      article.body = '';
      angular.element('#newArticleModal').modal('hide');
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:ArticlesNewCtrl
 * @description
 * # ArticlesNewCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('ArticlesNewCtrl', function ($location, $document, ImageService, FIREBASE_REF) {

    var ref = FIREBASE_REF.child('articles');
    var scope = this;

    function createHelper (article) {

      ref.push(article);
      $location.path('/articles');
    }

    this.create = function (article) {

      var element = $document[0].getElementById('articleImage');
      var file = element.files.item(0);

      if (file) {
        scope.uploading = true;

        ImageService.upload(file).then(function (image) {

          scope.uploading = false;
          article.image = image;
          createHelper(article);
        });
      }
      else {
        createHelper(article);
      }
    };
  });

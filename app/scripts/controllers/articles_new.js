'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:ArticlesNewCtrl
 * @description
 * # ArticlesNewCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('ArticlesNewCtrl', function ($location, $document, imgurUpload, FIREBASE_REF) {

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
        imgurUpload.setClientId('4c46e8ba7a36fc6');
        imgurUpload.upload(file).then(
          function (json) {
            scope.uploading = false;
            article.image = {name: file.name, url: json.data.link};
            createHelper(article);
          },
          function (err) { console.err(err); });
      }
      else {
        createHelper(article);
      }
    };
  });

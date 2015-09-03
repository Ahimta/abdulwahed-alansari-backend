'use strict';

/**
 * @ngdoc service
 * @name abdulwahedAlansariFrontendApp.ImageService
 * @description
 * # ImageService
 * Service in the abdulwahedAlansariFrontendApp.
 */
angular.module('abdulwahedAlansariFrontendApp')
  .service('ImageService', function (imgurUpload) {

    imgurUpload.setClientId('4c46e8ba7a36fc6');

    this.upload = function (file) {

      return imgurUpload.upload(file).then(function (json) {

        return {name: file.name, url: json.data.link.replace(/^http:/, 'https:')};
      });
    };
  });

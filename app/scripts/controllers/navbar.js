'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('NavbarCtrl', function ($location) {

    function isActive (urlOrUrls) {
      var path = $location.path();
      return Array.isArray(urlOrUrls) ? (urlOrUrls.indexOf(path) >= 0) : (path === urlOrUrls);
    }

    this.getClass = function (urlOrUrls) { return isActive(urlOrUrls) ? 'active' : null; };
  });

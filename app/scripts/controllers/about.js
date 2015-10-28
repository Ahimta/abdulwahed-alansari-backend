'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('AboutCtrl', function ($window, $firebaseObject, FIREBASE_REF, UserService) {

    var aboutHTMLObject = $firebaseObject(FIREBASE_REF.child('about'));
    var scope = this;

    aboutHTMLObject.$loaded().then(function () { scope.aboutHTML = aboutHTMLObject.$value; });

    this.isEnabled = $window.CKEDITOR && $window.CKEDITOR.env.isCompatible;

    this.save = function () {

      var cb = function () { UserService.setVisitor(); };
      aboutHTMLObject.$value = this.aboutHTML;
      aboutHTMLObject.$save().then(cb, cb);
    };
  });

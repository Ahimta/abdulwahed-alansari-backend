'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('ContactCtrl', function ($location, $firebaseArray, FIREBASE_REF, UserService) {

    var ref = FIREBASE_REF.child('contacts');

    this.articles = $firebaseArray(ref);

    this.isVisitor = UserService.isVisitor;
    this.isAdmin   = UserService.isAdmin;

    this.create = function (contact) {
      ref.push(contact);
      $location.path('/');
    };
  });

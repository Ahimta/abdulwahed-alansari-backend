'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('ContactCtrl', function ($location, $firebaseArray, FIREBASE_REF) {

    var ref = FIREBASE_REF.child('contacts');

    this.contacts = $firebaseArray(ref);

    this.create = function (contact) {
      ref.push(contact);
      $location.path('/');
    };
  });

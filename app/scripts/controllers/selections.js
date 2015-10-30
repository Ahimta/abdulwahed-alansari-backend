'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:SelectionsCtrl
 * @description
 * # SelectionsCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('SelectionsCtrl', function ($firebaseArray, FIREBASE_REF) {

    var selections = this.selections = $firebaseArray(FIREBASE_REF.child('selections'));
    var editing = null;

    this.isEditing = function (selectionId) { return editing === selectionId; };

    this.edit = function (selectionId) { editing = selectionId; };

    var cancel = this.cancel = function () { editing = null; };

    this.update = function (selection) {
      cancel();
      selections.$save(selection);
    };
  });

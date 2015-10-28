'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('MainCtrl', function (UserService) {

    this.isVisitor = UserService.isVisitor;
    this.isAdmin   = UserService.isAdmin;
  });

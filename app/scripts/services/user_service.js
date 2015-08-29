'use strict';

/**
 * @ngdoc service
 * @name abdulwahedAlansariFrontendApp.UserService
 * @description
 * # UserService
 * Service in the abdulwahedAlansariFrontendApp.
 */
angular.module('abdulwahedAlansariFrontendApp')
  .service('UserService', function ($window) {

    function userRole (role) {

      if (role) { return $window.localStorage.setItem('userRole', role); }
      else      { return $window.localStorage.getItem('userRole');       }
    }

    this.isVisitor = function () { return userRole() === 'visitor'; };
    this.isAdmin = function () { return userRole() === 'admin'; };

    this.setVisitor = function () { return userRole('visitor'); };
    this.setAdmin = function () { return userRole('admin'); };
  });

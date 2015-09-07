'use strict';

/**
 * @ngdoc filter
 * @name abdulwahedAlansariFrontendApp.filter:truncate
 * @function
 * @description
 * # truncate
 * Filter in the abdulwahedAlansariFrontendApp.
 */
angular.module('abdulwahedAlansariFrontendApp')
  .filter('truncate', function () {
    return function (input, limit) {

      limit = limit || 100;

      if (!input || typeof (input) !== 'string' || typeof (limit) !== 'number' || limit <= 0) { return ''; }
      else {
        var words = input.split(' ');

        if (words.length <= limit) { return input; }
        else {
          var limitedWords = words.slice(0, limit);
          var string = limitedWords.join(' ');
          return (string + '...');
        }
      }
    };
  });

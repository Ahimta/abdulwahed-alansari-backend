'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:PoemsNewCtrl
 * @description
 * # PoemsNewCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('PoemsNewCtrl', function ($location, FIREBASE_REF) {

    var ref = FIREBASE_REF.child('poems');

    this.poem = {
      lines: [{first: '', second: ''}]
    };

    this.append = function (poem)
    {
      poem.lines.push({first: '', second: ''});
    };

    this.remove = function (poem, index)
    {
      var oldLines = poem.lines;
      var left = oldLines.slice(0, index);
      var right = oldLines.slice(index + 1);

      poem.lines = left.concat(right);
    };

    this.create = function (poem)
    {
      poem.lines = poem.lines.map(function (line) {
        return {
          first: line.first,
          second: line.second
        };
      });

      ref.push(poem);
      $location.path('/poems');
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name abdulwahedAlansariFrontendApp.controller:PoemCtrl
 * @description
 * # PoemCtrl
 * Controller of the abdulwahedAlansariFrontendApp
 */
angular.module('abdulwahedAlansariFrontendApp')
  .controller('PoemCtrl', function ($routeParams, $location, $firebaseObject, FIREBASE_REF) {

    var poem = $firebaseObject(FIREBASE_REF.child('poems/' + $routeParams.id));
    var scope = this;

    poem.$loaded()
      .then(function () { scope.poem = poem; })
      .then(null, function () { $location.path('/poems'); });

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

    this.isEditing = function () { return $routeParams.action === 'edit'; };

    this.save = function ()
    {
      var cb = function () { $location.path('/poem/' + $routeParams.id); };
      poem.$save().then(cb, cb);
    };

    this.destroy = function ()
    {
      var cb = function () { $location.path('/poems'); };
      poem.$remove().then(cb, cb);
    };
  });

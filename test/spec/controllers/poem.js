'use strict';

describe('Controller: PoemCtrl', function () {

  // load the controller's module
  beforeEach(module('abdulwahedAlansariFrontendApp'));

  var PoemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PoemCtrl = $controller('PoemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(!!PoemCtrl).toBe(true);
  });
});

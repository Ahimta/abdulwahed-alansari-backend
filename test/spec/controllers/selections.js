'use strict';

describe('Controller: SelectionsCtrl', function () {

  // load the controller's module
  beforeEach(module('abdulwahedAlansariFrontendApp'));

  var SelectionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelectionsCtrl = $controller('SelectionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(!!SelectionsCtrl).toBe(true);
  });
});

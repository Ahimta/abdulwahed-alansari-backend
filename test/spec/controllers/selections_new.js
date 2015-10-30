'use strict';

describe('Controller: SelectionsNewCtrl', function () {

  // load the controller's module
  beforeEach(module('abdulwahedAlansariFrontendApp'));

  var SelectionsNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelectionsNewCtrl = $controller('SelectionsNewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(!!SelectionsNewCtrl).toBe(true);
  });
});

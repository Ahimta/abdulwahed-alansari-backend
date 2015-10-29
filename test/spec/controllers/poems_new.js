'use strict';

describe('Controller: PoemsNewCtrl', function () {

  // load the controller's module
  beforeEach(module('abdulwahedAlansariFrontendApp'));

  var PoemsNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PoemsNewCtrl = $controller('PoemsNewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(!!PoemsNewCtrl).toBe(true);
  });
});

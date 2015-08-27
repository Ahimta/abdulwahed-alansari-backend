'use strict';

describe('Controller: ArticlesNewCtrl', function () {

  // load the controller's module
  beforeEach(module('abdulwahedAlansariFrontendApp'));

  var ArticlesNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticlesNewCtrl = $controller('ArticlesNewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(!!ArticlesNewCtrl).toBe(true);
  });
});

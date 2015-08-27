'use strict';

describe('Service: CKEDITOR_OPTIONS', function () {

  // load the service's module
  beforeEach(module('abdulwahedAlansariFrontendApp'));

  // instantiate service
  var CKEDITOR_OPTIONS;
  beforeEach(inject(function (_CKEDITOR_OPTIONS_) {
    CKEDITOR_OPTIONS = _CKEDITOR_OPTIONS_;
  }));

  it('should do something', function () {
    expect(!!CKEDITOR_OPTIONS).toBe(true);
  });

});

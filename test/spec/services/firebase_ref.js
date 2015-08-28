'use strict';

describe('Service: FIREBASE_REF', function () {

  // load the service's module
  beforeEach(module('abdulwahedAlansariFrontendApp'));

  // instantiate service
  var FIREBASE_REF;
  beforeEach(inject(function (_FIREBASE_REF_) {
    FIREBASE_REF = _FIREBASE_REF_;
  }));

  it('should do something', function () {
    expect(!!FIREBASE_REF).toBe(true);
  });

});

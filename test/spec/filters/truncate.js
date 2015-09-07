'use strict';

describe('Filter: truncate', function () {

  // load the filter's module
  beforeEach(module('abdulwahedAlansariFrontendApp'));

  // initialize a new instance of the filter before each test
  var truncate;
  beforeEach(inject(function ($filter) {
    truncate = $filter('truncate');
  }));

  it('should return the input prefixed with "truncate filter:"', function () {
    expect(truncate('angularjs')).toEqual('angularjs');
    expect(truncate('angularjs', -1)).toEqual('');
    expect(truncate('')).toEqual('');
    expect(truncate(1)).toEqual('');
    expect(truncate(null)).toEqual('');
    expect(truncate(undefined)).toEqual('');
  });

});

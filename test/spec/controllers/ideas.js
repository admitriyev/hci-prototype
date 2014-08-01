'use strict';

describe('Controller: IdeasCtrl', function () {

  // load the controller's module
  beforeEach(module('hciApp'));

  var IdeasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdeasCtrl = $controller('IdeasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

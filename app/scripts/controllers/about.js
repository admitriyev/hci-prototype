'use strict';

/**
 * @ngdoc function
 * @name hciApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hciApp
 */
angular.module('hciApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name hciApp.controller:IdeasCtrl
 * @description
 * # IdeasCtrl
 * Controller of the hciApp
 */
angular.module('hciApp')
  .controller('IdeasCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name hciApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hciApp
 */
angular.module('hciApp')

    .controller('MainCtrl', ['$scope','$http','$location', function ($scope,$http,$location) {

		$scope.ideaDetails = function() {
			$location.path('/details')
		};
  
  	}]);


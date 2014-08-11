'use strict';

/**
 * @ngdoc function
 * @name hciApp.controller:IdeasCtrl
 * @description
 * # IdeasCtrl
 * Controller of the hciApp
 */
angular.module('hciApp')
  .controller('IdeasCtrl', ['$scope','$http','$location', function ($scope,$http,$location) {

    	$scope.showAlert = true

		$scope.startOver = function() {
			$location.path('/')
		};

		$scope.closeAlert = function() {
    		$scope.showAlert = false
		};
		
  }]);

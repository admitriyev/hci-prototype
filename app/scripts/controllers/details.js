'use strict';

/**
 * @ngdoc function
 * @name hciApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the hciApp
 */
angular.module('hciApp')
  .controller('DetailsCtrl', ['$scope','$http','$location', function ($scope,$http,$location) {

    	$scope.showAlert = true;
    	
		$scope.closeAlert = function() {
    		$scope.showAlert = false;
		};

		$scope.startOver = function() {
			$location.path('/');
		};
  }]);

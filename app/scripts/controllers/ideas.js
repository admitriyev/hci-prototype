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

    	$scope.showAlert = true;

		$scope.startEdit = function() {
			$location.path('/main/edit');
		};

		$scope.startOver = function() {
			$location.path('/main');
		};

		$scope.closeAlert = function() {
    		$scope.showAlert = false;
		};

  }]);

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

    	$scope.showAlert = true
    	$scope.textWizard = true

		$scope.trainWizard = function() {
			$location.path('/details')
		};
  
		$scope.listIdeas = function() {
			$location.path('/ideas')
		};

		$scope.closeAlert = function() {
    		$scope.showAlert = false
		}

		$scope.toggleEditor = function() {
			$scope.textWizard = !$scope.textWizard
		}

  	}]);


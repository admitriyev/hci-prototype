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

		$scope.startOver = function() {
			$location.path('/')
		};
  }]);

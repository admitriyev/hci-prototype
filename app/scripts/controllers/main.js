'use strict';

/**
 * @ngdoc function
 * @name hciApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hciApp
 */
angular.module('hciApp')

    .controller('MainCtrl', ['$scope','$http','$location', '$modal', '$routeParams', function ($scope,$http,$location,$modal,$routeParams) {

    	$scope.ideaData = {};
    	$scope.showAlert = true;
    	$scope.textWizard = true;
    	$scope.wizardModeLabel = 'Wizard';
    	$scope.editMode = ($routeParams.mode === 'edit');
    	if ($scope.editMode === true) {
    		$scope.editModeLabel = 'Edit';
    	} else {
    		$scope.editModeLabel = 'New';
    	}

    	var clearForm = function() {
    		$scope.ideaData.technology = null;
    		$scope.ideaData.techDetails = null;
    		$scope.ideaData.purpose = null;
    		$scope.ideaData.problem = null;
    		$scope.ideaData.sauce = null;
    		$scope.ideaData.plainDescription = null;
    	};

		$scope.trainWizard = function() {
			$location.path('/details');
		};
  
		$scope.listIdeas = function() {
			$location.path('/ideas');
		};

		$scope.closeAlert = function() {
    		$scope.showAlert = false;
		};

		$scope.toggleEditor = function() {
			$scope.textWizard = !$scope.textWizard;
		};

		$scope.startOver = function() {
		    var modalInstance = $modal.open({
		      templateUrl: 'promptModal.html',
		      controller: 'resetModalCtrl',
		      size: 'sm',
		      resolve: {
		        items: function () {
		          return $scope.items;
		        }
		      }
		    });

		    modalInstance.result.then(function (selectedItem) {
		      $scope.selected = selectedItem;
		    }, function () {
		      //$log.info('Modal dismissed at: ' + new Date());
		      clearForm();
		    });
		};

		$scope.saveIdea = function() {
		    var modalInstance = $modal.open({
		      templateUrl: 'saveModal.html',
		      controller: 'saveModalCtrl',
		      size: 'sm',
		      resolve: {
		        items: function () {
		          return $scope.items;
		        }
		      }
		    });

		    modalInstance.result.then(function (selectedItem) {
		      clearForm();
		      $scope.selected = selectedItem;
		    }, function () {
		      	//$log.info('Modal dismissed at: ' + new Date());
				$location.path('/ideas');
		    });
		};


  	}]);

// --- RESET
//var resetModalCtrl = function ($scope, $modalInstance, items) {
angular.module('hciApp')
    .controller('resetModalCtrl', ['$scope','$modalInstance', 'items', function ($scope,$modalInstance,items) {

	  $scope.items = items;
	  $scope.selected = {
	    //item: $scope.items[0]
	  };

	  $scope.ok = function () {
	    $modalInstance.dismiss('reset');
	  };

	  $scope.cancel = function () {
	    $modalInstance.close($scope.selected.item);
	  };

	}]);

// --- SAVE
angular.module('hciApp')
    .controller('saveModalCtrl', ['$scope','$modalInstance', 'items', function ($scope,$modalInstance,items) {

	  $scope.items = items;
	  $scope.selected = {
	    //item: $scope.items[0]
	  };

	  $scope.list = function () {
	    $modalInstance.dismiss('list');
	  };

	  $scope.reset = function () {
	    $modalInstance.close($scope.selected.item);
	  };

	}]);

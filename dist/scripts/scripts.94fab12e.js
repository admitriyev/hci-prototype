"use strict";angular.module("hciApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/ideas",{templateUrl:"views/ideas.html",controller:"IdeasCtrl"}).when("/details",{templateUrl:"views/details.html",controller:"DetailsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("hciApp").controller("MainCtrl",["$scope","$http","$location",function(a,b,c){a.ideaDetails=function(){c.path("/details")},a.listIdeas=function(){c.path("/ideas")}}]),angular.module("hciApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("hciApp").controller("DetailsCtrl",["$scope","$http","$location",function(a,b,c){a.saveIdea=function(){},a.startOver=function(){c.path("/")}}]),angular.module("hciApp").controller("IdeasCtrl",["$scope","$http","$location",function(a,b,c){a.startOver=function(){c.path("/")}}]);
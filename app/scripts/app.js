'use strict';

/**
 * @ngdoc overview
 * @name hciApp
 * @description
 * # hciApp
 *
 * Main module of the application.
 */
angular
  .module('hciApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/ideas', {
        templateUrl: 'views/ideas.html',
        controller: 'IdeasCtrl'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

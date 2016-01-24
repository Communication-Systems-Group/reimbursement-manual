'use strict';

/**
 * @ngdoc overview
 * @name reimbursementManualApp
 * @description
 * # reimbursementManualApp
 *
 * Main module of the application.
 */
angular
  .module('reimbursementManualApp', [
    'ngAnimate',
    'ngRoute'
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
      .otherwise({
        redirectTo: '/'
      });
  });

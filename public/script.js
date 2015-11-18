var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider

    .when('/', {
      templateUrl: '/pages/home.html',
      cotroller: ''
    })

    .when('/log', {
      templateUrl: '/pages/workoutlogger.html',
      controller : 'AppCtrl'
    });
});

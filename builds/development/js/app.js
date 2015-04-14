var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);
// namespacing / app name / support module - link to controller
// ngRoute来自于/angular-route.min.js

var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html'
    }); //$routeProvider when(path, route);
}]);
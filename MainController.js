'use strict';

var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider',
    function ($routeProvider) {
    	$routeProvider

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})

		.when('/research', {
			templateUrl: 'views/research.html',
			controller: 'ResearchController'
		})
		.when('/data', {
			templateUrl: 'views/data.html',
			controller: 'DataController'
		})

		.when('/cv', {
			templateUrl: 'views/cv.html',
			controller: 'CVController'
		})

		.otherwise({
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		});

}]);

app.controller('MainController', function ($scope) {
    });

app.controller('HomeController', function ($scope) {
    });

app.controller('AboutController', function($scope) {
    });

app.controller('ResearchController', function($scope) {
    });

app.controller('DataController', function($scope) {
    });

app.controller('CVController', function($scope) {
    });

var app = angular.module('resume', ['ngroute']);

app.config(function($routeProvider){

	$routeProvider
		.when('/login', {
			templateURL: 'views/login.html',
			controller: 'loginCtrl.js'
		})

		.otherwise({
			redirectTo: '/login'
		})
});
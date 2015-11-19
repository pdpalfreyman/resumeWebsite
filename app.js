var app = angular.module('resume', ['ngRoute', 'firebase']);

app.config(function($routeProvider){

	$routeProvider
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'loginCtrl'
		})
		.otherwise({
			redirectTo: '/login'
		})
});

app.run(function($rootScope, $location, authService) {
	$rootScope.$on("$routeChangeStart", function(event, next, previous, error) {
		var authRequired = null
		if (next && next.$$route && next.$$route.authRequired){
			authRequired = next.$$route.authRequired
		}
		if (authRequired && !authService.getAuth()) {
	    	$location.path("/login");
		}
	});
});
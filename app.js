var app = angular.module('resume', ['ngRoute', 'firebase']);

app.constant('fb', {
	url: 'https://pdpresume.firebaseio.com/'
});

app.config(function($routeProvider){

	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'mainCtrl',
			resolve: {
				guestsRef: function(mainService){
					return mainService.getGuests();
				}
			}
		})
		.otherwise({
			redirectTo: '/home'
		})
});
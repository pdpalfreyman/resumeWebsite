var app = angular.module('resume');

app.controller('loginCtrl', function($scope, authService, $location, $rootScope){

	var loginCallback = function(user){
		user.uid = user.uid.replace('simplelogin:', '');
		console.log(user.uid)
		$location.path('/home/')
	};

	$scope.login = function(){
		return authService.login($scope.details, loginCallback)
	};

})
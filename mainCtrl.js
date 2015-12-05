var app = angular.module('resume');

app.controller('mainCtrl', function($scope, $location, $rootScope, $firebaseArray, guestsRef){

	var firebaseUrl = 'https://pdpresume.firebaseio.com/'

	var fbRef = new Firebase(firebaseUrl);


	$scope.guest = $firebaseArray(guestsRef)

	$scope.newGuest = function(name, company){
		$scope.guest.$add({
			name: name,
			company: company
		})
	}

})
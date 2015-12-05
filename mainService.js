var app = angular.module('resume');

app.service('mainService', function($q, $http, $firebase, $firebaseObject, $firebaseArray, $location, fb){

	this.getGuests = function(){
		return new Firebase(fb.url + '/guests');
	}
	
});
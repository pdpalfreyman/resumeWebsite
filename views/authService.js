var app = angular.module('resume');

app.service('authService', function($firebaseAuth, $firebaseArray, $firebaseObject, $q, $location){

	var firebaseUrl = 'https://pdpresume.firebaseio.com/'

	var fbRef = new Firebase(firebaseUrl);
	var authObj = $firebaseAuth(fbRef);

	this.login = function(user, cb){
		authObj.$authWithPassword({
			email: user.email,
			password: user.password
		}).then(function(authData){
			console.log('Logged in as: ', authData.uid);
			cb(authData)
		}).catch(function(error){
			console.error('Authentication Failed: ', error)
		});
	}


});
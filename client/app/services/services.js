angular.module('finder.services',[])
.factory('Auth', function($http, $location, $window){
	var signin = function (user) {
	  return $http({
	    method: 'POST',
	    url: '/login',
	    data: user
	  })
	  .then(function (resp) {
	  	console.log('resp.data in signin', resp.data)

	    return resp.data;
	  });
	};

	var signup = function (user) {
	  return $http({
	    method: 'POST',
	    url: '/signup',
	    data: user
	  })
	  .then(function (resp) {
	  	console.log('resp.data in signup', resp)
	    return resp;
	  });
	};

	return {
    signin: signin,
    signup: signup
  };

})

.factory('Profile', function($http) {
	var getProfile = function(user){
		return $http({
			method: 'POST',
			url: '/profile',
			data: user
		});
	}

	return {
		getProfile: getProfile
	};
});
angular.module('finder.myProfile', [])

.controller('MyProfileController', function ($scope, $window, $location, Profile) {
    console.log("in my profile controller")
    $scope.getProfile = function(){
      Profile.getProfile();
    }

})
.run(function(){
  console.log("in my profile")
});

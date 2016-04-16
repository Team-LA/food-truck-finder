angular.module('finder.profile', [])

.controller('ProfileController', function ($scope, $window, $location, Profile) {
  console.log('$scope.user', $scope.user);
  $scope.onClick = function() {
    $scope.user = {
      name: $scope.name,
      cuisine: $scope.cuisine,
      locations:[{
        address: $scope.address,
        hours:{
          "1": [$scope.start1, $scope.end1],
          "2": [$scope.start2, $scope.end2],
          "3": [$scope.start3, $scope.end3],
          "4": [$scope.start4, $scope.end4],
          "5": [$scope.start5, $scope.end5],
          "6": [$scope.start6, $scope.end6],
          "7": [$scope.start7, $scope.end7]
        }
      }]
    };

    $scope.onLogout = function() {
      
    }

    Profile.getProfile($scope.user).then(function(resp){
      console.log('$scope.user', $scope.user)
      console.log('resp.data in ProfileController',resp.data);
      //$location.path('/myProfile');
    });
  }
});

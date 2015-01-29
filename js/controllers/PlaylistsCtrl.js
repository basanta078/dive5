angular.module('starter')

.controller('PlaylistsCtrl', ['$scope', 
	function($scope) {
   
  var favorites = JSON.parse(window.localStorage['favorites'] || '{}');
  $scope.favorites = favorites.name;
}]);
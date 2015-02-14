angular.module('starter.controllers')

.controller('dive5Ctrl', ['$scope', 'favorites', 
	function($scope, favorites) {
  
  		$scope.favorites = favorites.getlist(); 
  
}]);
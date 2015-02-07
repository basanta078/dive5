angular.module('starter')

.controller('dive5Ctrl', ['$scope', 'favorites', 
	function($scope, favorites) {
  
  		$scope.favorites = favorites.getlist(); 
  
}]);
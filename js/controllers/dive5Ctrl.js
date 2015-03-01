angular.module('starter.controllers')

.controller('dive5Ctrl', ['$scope', 'favorites', 'player', 
	function($scope, favorites, player) {
  		//Gets favorites list from controller
  		$scope.favorite = favorites.getlist(); 

  		  $scope.playSong  = function(url){
		    player.playSong(url);
		  };

		 /*
		 $scope.playAll = function(){
		   	var list = favorites.getlist();
		   	list.forEach(function (track){
		   		console.log(track);
			 	player.playSong(track.url);
			 });
		 }
		 */


  
}]);
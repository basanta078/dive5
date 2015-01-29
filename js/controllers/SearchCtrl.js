angular.module('starter')

.controller('SearchCtrl', ['$scope', 'Spotify', 
  function($scope, Spotify){
  $scope.results = [];

  $scope.search = function(keyword){
    $scope.results = [];
    Spotify.search(keyword+ "*", 'artist').then( function(data){
      if (data.artists && data.artists.items.length){
        artists = [];
        data.artists.items.forEach(function (artist){
          artists.push(artist);
        })
        $scope.results = artists;
      }
    });  
  }; 
}]);
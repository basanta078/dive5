angular.module('starter')

.controller('ArtistCtrl', [ '$scope', '$stateParams', 'Spotify', 'favorites', 'player',
  function($scope, $stateParams, Spotify, favorites, player) {
  $scope.artistId = $stateParams.playlistId;
  $scope.relatedArtists = [];
  $scope.artistTracks = [];

  Spotify.getRelatedArtists($scope.artistId).then(function (data) {
    if (data.artists && data.artists.length){
        artists = [];
        data.artists.forEach(function (artist){
          artists.push(artist);
        })
        $scope.relatedArtists = artists;
      }
  });
  audioObject = null;
  
  $scope.playSong  = function(url){
    player.playSong(url);
  };

  $scope.onHold  = function(trackName){
    favorites.add(trackName);

  };

  Spotify.getArtistTopTracks($scope.artistId, 'US').then(function (data2) {
    if (data2.tracks && data2.tracks.length){
        tracks = [];

        data2.tracks.forEach(function (track){
          tracks.push(track);
        })
        $scope.artistTracks = tracks;
      }
  });



}]);

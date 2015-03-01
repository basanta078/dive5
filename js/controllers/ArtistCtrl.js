angular.module('starter.controllers')

.controller('ArtistCtrl', [ '$scope', '$stateParams', 'Spotify', 'favorites', 'player',
  function($scope, $stateParams, Spotify, favorites, player) {
  
  //artist id passed through url from search page or another artists page
  $scope.artistId = $stateParams.artistid;

  $scope.relatedArtists = [];
  $scope.artistTracks = [];
  //$scope.artistName = "";

  //
  //Getting the required artist info
  //
  //getting top tracks and artist name (we only have artist id passed through url)
  Spotify.getArtistTopTracks($scope.artistId, 'US').then(function (data2) {
    if (data2.tracks && data2.tracks.length){
        tracks = [];

        data2.tracks.forEach(function (track){
          tracks.push(track);
        })
        $scope.artistTracks = tracks;
        $scope.artistName = tracks[0].artists[0].name
      }
  });

  //Relatedartist
  Spotify.getRelatedArtists($scope.artistId).then(function (data) {
    if (data.artists && data.artists.length){
        artists = [];
        data.artists.forEach(function (artist){
          artists.push(artist);
        })
        $scope.relatedArtists = artists;
      }
  });
  //All Info done

  audioObject = null;
  
  $scope.playSong  = function(url){
    player.playSong(url);
  };

  $scope.onHold  = function(trackName, previewurl){
    favorites.add(trackName, previewurl);

  };




}]);

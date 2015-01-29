angular.module('starter')

.controller('ArtistCtrl', [ '$scope', '$stateParams', 'Spotify' ,
  function($scope, $stateParams, Spotify) {
  $scope.artistId = $stateParams.playlistId;
  $scope.relatedArtists = [];
  $scope.artistTracks = [];
  favorites = {
      name: []
    };


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
    if (audioObject){
      audioObject.pause();
    }
    audioObject = new Audio(url);
    audioObject.play();
  };

  $scope.onHold  = function(trackName){

    var favorites = JSON.parse(window.localStorage['favorites'] || '{"name": [] }');
    
    favorites.name.push(trackName);
    console.log(favorites);

    window.localStorage['favorites'] = JSON.stringify(favorites);

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

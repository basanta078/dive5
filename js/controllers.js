angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SearchCtrl', function($scope, Spotify){
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
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams, Spotify) {
  $scope.artistId = $stateParams.playlistId;
  $scope.relatedArtists = [];
  Spotify.getRelatedArtists($scope.artistId).then(function (data) {
    if (data.artists && data.artists.length){
        artists = [];
        data.artists.forEach(function (artist){
          artists.push(artist);
        })
        $scope.relatedArtists = artists;
      }
  console.log(artists);
});

});

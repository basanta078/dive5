angular.module('starter.controllers')
.service('favorites', function($ionicLoading){
	var self = this;

	this.favs = JSON.parse(window.localStorage['favorites'] || '[]');

	this.getlist = function(){
		return self.favs;
	};

	this.add = function(trackname, trackurl){
		dup = false
		this.favs.forEach(function (track){
			if (track.name === trackname){
				console.log("trying to add duplicate song");
				dup = true;
			}

		});


		var newFav =  {
            "name": trackname,
            "url": trackurl
        };

		if (dup){
			$ionicLoading.show({
		        template: 'You already have that song',
		        noBackdrop: true,
		        duration: 1500
		    });
			return;	
		}
		self.favs.push(newFav);
    	window.localStorage['favorites'] = JSON.stringify(this.favs);

    	$ionicLoading.show({
	        template: 'Added to favorites',
	        noBackdrop: true,
	        duration: 500
	    });	
	};
	
	/*
	this.clearAll = function(){
		favorites = [];
    	window.localStorage['favorites'] = JSON.stringify(favorites);
	}
	*/

});
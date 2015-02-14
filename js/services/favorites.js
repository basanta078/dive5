angular.module('starter.controllers')
.service('favorites', function(){
	var self = this;

	this.favs = JSON.parse(window.localStorage['favorites'] || '[]');

	this.getlist = function(){
		return self.favs;
	};

	this.add = function(trackname, trackurl){
		dup = false
		this.favs.forEach(function (track){
			if (track === trackname){
				console.log("trying to add duplicate song");
				dup = true;
			}

		});


		var newFav =  {
            "name": trackname,
            "url": trackurl
        };

		if (dup)
			return;
		self.favs.push(newFav);
    	window.localStorage['favorites'] = JSON.stringify(this.favs);	
	};

});
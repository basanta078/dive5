angular.module('starter')
.service('favorites', function(){
	var self = this;

	this.favs = JSON.parse(window.localStorage['favorites']);

	this.getlist = function(){
		return self.favs;
	};

	this.add = function(trackname){
		dup = false
		this.favs.forEach(function (track){
			if (track === trackname){
				console.log("trying to add duplicate song");
				dup = true;
			}

		});
		if (dup)
			return;
		self.favs.push(trackname);
    	window.localStorage['favorites'] = JSON.stringify(this.favs);	
	};

});
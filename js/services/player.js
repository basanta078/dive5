angular.module('starter')
.service('player', function(){
	var self = this;

	this.audio = null;

	this.lastUrl = "";

	this.playSong  = function(url){
    if (url === this.lastUrl && this.audio){
      if (this.audio.currentTime > 0 && !this.audio.ended && !this.audio.paused)
      	this.audio.pause();
      else if (this.audio.paused && !this.audio.ended)
      	this.audio.play();
      else if (this.audio.ended)
      	this.audio.play();

    }
    else{
    	if (this.audio)
    		this.audio.pause();
    	this.audio = new Audio(url);
    	this.audio.play();
    	this.lastUrl = url;
    }
  };

});
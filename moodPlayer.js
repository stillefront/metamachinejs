/** constructor for the moodPlayer. Responsible for synchronized playback of backgroundmusic
  *
  */

//@param moodUrl
//@param video
//
//
function moodPlayer(moodUrl,video){

	console.log("moodPlayer initialized"); //for debug purposes
	this.video = video;
	this.moodUrl = moodUrl;              
	
	document.getElementById('audiomood').innerHTML = '<audio id="mood2"><source src="'+ moodUrl +'" type="audio/mpeg"></audio>';
	
	var sound = document.getElementById('mood2');


	sound.currentTime = video.currentTime; //sync audio to video and then .play()!
	sound.play();
	
	console.log(video); //debugging
	console.log(sound); //debugging

}



moodPlayer.pause = function() {
    var sound = document.getElementById('mood2');
    if (!sound.paused) {
        sound.pause();
    } else {
        sound.play();
    };

}

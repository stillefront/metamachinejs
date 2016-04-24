//
// parse playlist positions from URL and starts Player
// Martin Stelter
//
//

$(document).ready(function(){

var playlist = [];

var moodPlay;

var playlistAudio = [];

// Fetch indexes out of URL
var url = window.location.href; // returns URL
var ticket = url.split('tck=')[1]; // return ticket as 1 string

ticket = ticket.split('-');

var indexes = url.substring( url.lastIndexOf('ixs=')+4, url.lastIndexOf('aud=') ); // returns indexes as 1 string

var moodIdx = url.substring( url.lastIndexOf('md=')+3, url.lastIndexOf('tck=')); // returns mood index as string

var speechIdx =  url.substring( url.lastIndexOf('aud=')+4, url.lastIndexOf('md=')); // returns speech index as string

console.log("indexes", indexes);

console.log("moodIdx", moodIdx);

console.log("speechIdx", speechIdx);

indexes = indexes.split('-'); // splits id into array of playlist indexes

speechIdx = speechIdx.split('-'); // same procedure for our speech-playlist

$.ajax({
	type: "GET",
	url: "./xml/metadata.xml",
	dataType: "xml",

		success: function(xml){

		
		// Fetch file names out of XML
		for(i = 0; i < indexes.length; i++) {
			playlist[i] = $('name:eq( '+indexes[i]+' )',xml).text();
		}
		console.log("playlist", playlist);

		//Fetch file name for mood-soundtrack out of XML
		moodPlay = $('name:eq( '+moodIdx+' )', xml).text(); // http://stackoverflow.com/questions/10343150/the-jquery-eqindex-selector/
		console.log('moodPlay', moodPlay);

		//Fetch file name for speech-audiotracks out of XML
		for(i = 0; i < speechIdx.length; i++) {
			playlistAudio[i] = $('name:eq( '+speechIdx[i]+' )',xml).text();
		}
		console.log("playlistAudio", playlistAudio);



		// Lifemirror Player Video
	    var player = new LifemirrorPlayer();
	    var audio = new speechPlayer();


	    var url = window.location.href; // returns URL
	    var dir = url.substring(0, url.lastIndexOf('/'));  // returns directory only
	    console.log(dir);
	    console.log(url);

		    player.initialise(playlist, "film", dir+"/vid/", null);  // see LifemirrorPlayer.js lines 19-26
		    audio.initialise(playlistAudio, "speech", dir+"/aud/speech/", null);
		    
		    audio.preloadAudio();
		    player.preloadVideos();

	       // Audio Setup #1: moodPlayer

	    var moodUrl = dir + "/aud/mood/" + moodPlay; 
	    var video = document.getElementById(countContainer);
	    var mood = new moodPlayer(moodUrl, video);


	      // Audio Setup #2: speechPlayer
	   //var audio = new speechPlayer();
	   //audio.initialise(playlistAudio, "speech", dir+"/aud/speech/", null);
	   //audio.preloadAudio();

	    





	    // Build UI
	    var openTag = '<div id="ticket">';
	    var closeTag = '</div>';
	    var showTicket = openTag + "Liebe: " + ticket[0] + closeTag
					   + openTag + "Glück: " + ticket[1] + closeTag
					   + openTag + "Tradition: " + ticket[2] + closeTag
					   + openTag + "Abenteuer: " + ticket[3] + closeTag
					   + openTag + "Perfektion: " + ticket[4] + closeTag;
	    document.getElementById('ticketBox').innerHTML = showTicket;

	    // show end screen
	    document.addEventListener("videosEnded", function(e) { // triggerd by LifemirrorPlayer.js
            document.getElementById('end').style.display = 'inline';
    	});

		}, // end success: function(xml)
		
		error: function(){ 
			alert("something's wrong Diane");

		} // end error handler


}); // end $.ajax
}) //end jQuery


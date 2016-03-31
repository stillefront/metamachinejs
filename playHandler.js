//
// parse playlist positions from URL and starts Player
// Martin Stelter
//
//

$(document).ready(function(){

var playlist = [];

// Fetch indexes out of URL
var url = window.location.href; // returns URL
var ticket = url.split('tck=')[1]; // return ticket as 1 string

ticket = ticket.split('-');

var indexes = url.substring( url.lastIndexOf('ixs=')+4, url.lastIndexOf('tck=')-1 ); // returns indexes as 1 string

console.log("indexes", indexes);

indexes = indexes.split('-'); // splits id into array of playlist indexes


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


		// Lifemirror Player Video
	    var player = new LifemirrorPlayer();
	    var url = window.location.href; // returns URL
	    var dir = url.substring(0, url.lastIndexOf('/'));  // returns directory only
	       
		    player.initialise(playlist, "film", dir+"/vid/", null);  // see LifemirrorPlayer.js lines 19-26
		    player.preloadVideos();

	       // Audio Setup #1: moodPlayer

	    var url = "file:///home/alexej/Dokumente/repos/metamachinejs/aud/mood/moodmelodymahler.mp3"; 
	    var video = document.getElementById(countContainer);
	    var mood = new moodPlayer(url, video);

	   

	    /* function moodPlayer() {
	    var vid = document.getElementbyId('film');
	    var aud = document.getElementbyId('audiomood');

	    aud.currentTime = vid.currentTime;
	    aud.play();

	    };
	    var audioDir = '<audio autoplay> <source src="file:///home/alexej/Dokumente/repos/metamachinejs/aud/mood/moodmelodymahler.mp3" type="audio/mpeg"></audio>'; 
	    document.getElementById('audiomood').innerHTML = audioDir;
	    document.getElementsById('audiomood') = moodPlayer();
*/







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


// metamachine with jQuery
//
//
//
//

$(document).ready(function(){

var pos_begin,
    pos_middle,
    pos_end,
    mediatype,
    gender;

var begin = [];
var middle = [];
var end = [];

var beginAudio = [];
var middleAudio = [];
var endAudio = [];

var uniqueBegin = [];
var uniqueMiddle = [];
var uniqueEnd = [];

var uniqueBeginAudio = [];
var uniqueMiddleAudio = [];
var uniqueEndAudio = [];

var random_Begin;
var random_Middle;
var random_Middle2;
var random_End;

var random_BeginAudio;
var random_MiddleAudio;
var random_EndAudio;

var playlist = [];
var indexes = [];
var indexesAudio = [];

var parmMood;

// start generating playlist on click
$('#generatePlaylist').click(function(event){

// fetch parameters from HTML5 range sliders attr1 to attr6
var attr = [];

attr[0] = $('#attr1').val(); 
attr[1] = $('#attr2').val();
attr[2] = $('#attr3').val();
attr[3] = $('#attr4').val();
attr[4] = $('#attr5').val();

// fetch parameters from HTML radio-buttons

gender = $("input[name='gender']:checked").val();

//fetch the max chosen value for category to determine which mood-sound has to be chosen
function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 0; i < arr.length; i++) {
        if (attr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

var attrMax = indexOfMax(attr);


var attrXML = []; // for comparison

var genderXML; // for comparison of chosen speech gender

// reset Arrays
begin.length = 0;
middle.length = 0;
end.length = 0;
beginAudio.length = 0;
middleAudio.length = 0;
endAudio.length = 0;
playlist.length = 0;
uniqueBegin.length = 0;
uniqueMiddle.length = 0;
uniqueEnd.length = 0;
uniqueBeginAudio.length = 0;
uniqueMiddleAudio.length = 0;
uniqueEndAudio.length = 0;
indexes.length = 0;

// retrieve data from xml with jQuery.ajax method 
$.ajax({
	type: "GET",
	url: "./xml/metadata.xml",
	dataType: "xml",

		success: function(xml){
			// Note: If playlist remains empty/undefined, try
			// - check if XML is 100% correct, no misspellings, no broken tags etc.
			// - clear browser cache
		$(xml).find('clip').each(
			function(index){
		
			    pos_begin = $(this).find('pos_vorne').text();
		    	    pos_middle = $(this).find('pos_mitte').text();
		    	    pos_end = $(this).find('pos_hinten').text();
		    	    attrXML[0] = $(this).find('liebe').text();
			    attrXML[1] =  $(this).find('glueck').text();
			    attrXML[2] = $(this).find('tradition').text();
			    attrXML[3] =  $(this).find('abenteuer').text();
			    attrXML[4] =  $(this).find('perfektion').text();
			    mediatype = $(this).find('_media').text();
			    genderXML = $(this).find('sex').text();
		          
			    
			    // get suitable videos for the beginning
			    for(i = 0; i < attr.length; i++){
			    
				    if (attrXML[i] == attr[i] && pos_begin == "true" && mediatype == "video" ) {
				    begin.push(index);

				    }
			    
			    } // end for

			    // get suitable videos for the middlepart
			    for(i = 0; i < attr.length; i++){
			    
				    if (attrXML[i] == attr[i] && pos_middle == "true" && mediatype == "video") {
				    middle.push(index);
				    }
			    
			    } // end for

			    // get suitable videos for the end
			    for(i = 0; i < attr.length; i++){
			    
				    if (attrXML[i] == attr[i] && pos_end == "true" && mediatype == "video") {
				    end.push(index);
				    }
			    
			    } // end for
			    
			    //get suitable speech-audio for the beginning
			    for(i = 0; i < attr.length; i++){
			    
				    if (attrXML[i] == attr[i] && pos_begin == "true" && genderXML == gender && mediatype == "speech" ) {
				    beginAudio.push(index);

				    }
			    
			    } // end for

			    //get suitable speech-audio for the middlepart
			    for(i = 0; i < attr.length; i++){
			    
				    if (attrXML[i] == attr[i] && pos_begin == "true" && genderXML == gender && mediatype == "speech" ) {
				    middleAudio.push(index);

				    }
			    
			    } // end for

			    //get suitable speech-audio for the end
			    for(i = 0; i < attr.length; i++){
			    
				    if (attrXML[i] == attr[i] && pos_begin == "true" && genderXML == gender && mediatype == "speech" ) {
				    endAudio.push(index);

				    }
			    
			    } // end for

			    //get suitable soundtrack for mood
			    for(i = 0; i < attr.length; i++){

				    if (attrXML[attrMax] == 5 && mediatype == "music") {
			    		parmMood = $(this).index();
			    	    };

		            } // end for

			    



			}) // end each


			// Filter out the duplicates
	        uniqueBegin = begin.filter(function(elem, pos) {
    			return begin.indexOf(elem) == pos;
  		    	}); // end uniquePlaylist 

	        uniqueMiddle = middle.filter(function(elem, pos) {
    			return middle.indexOf(elem) == pos;
  		    	}); // end uniquePlaylist 

	        uniqueEnd = end.filter(function(elem, pos) {
    			return end.indexOf(elem) == pos;
  		    	}); // end uniquePlaylist 
	        
		uniqueBeginAudio = beginAudio.filter(function(elem, pos) {
    			return beginAudio.indexOf(elem) == pos;
  		    	}); // end uniquePlaylist 
		
		uniqueMiddleAudio = middleAudio.filter(function(elem, pos) {
    			return middleAudio.indexOf(elem) == pos;
  		    	}); // end uniquePlaylist 
		
		uniqueEndAudio = endAudio.filter(function(elem, pos) {
    			return endAudio.indexOf(elem) == pos;
  		    	}); // end uniquePlaylist 


	        //DEBUG
	        console.log("uniqueBegin", uniqueBegin);
	        console.log("uniqueMiddle", uniqueMiddle);
	        console.log("uniqueEnd", uniqueEnd);
	        
		console.log("uniqueBeginAudio", uniqueBeginAudio);
	        console.log("uniqueMiddleAudio", uniqueMiddleAudio);
	        console.log("uniqueEndAudio", uniqueEndAudio);

		console.log("parmMood", parmMood);


		    // scramble chosen values from generated position-arrays and put them into respective positions of our playlist
		    // after each filling the last item is excluded from the next respective array
		    random_Begin = uniqueBegin[Math.floor(Math.random() * begin.length)];		    
		    indexes[0] = random_Begin;
			uniqueMiddle = $.grep(uniqueMiddle, function(value) { return value != random_Begin; }); // see http://stackoverflow.com/questions/3596089

		    for(i = 1; i < 3; i++){
			    
				random_Middle = uniqueMiddle[Math.floor(Math.random() * uniqueMiddle.length)];
		    	indexes[i] = random_Middle;
		    	uniqueMiddle = $.grep(uniqueMiddle, function(value) { return value != random_Middle;});
			    
			}

		    uniqueEnd = $.grep(uniqueMiddle, function(value) { return value != random_Middle; });
		    random_End = uniqueEnd[Math.floor(Math.random() * uniqueEnd.length)];
		    indexes[3] = random_End;
		    




		    // same for our speech-track...
		    random_BeginAudio = uniqueBeginAudio[Math.floor(Math.random() * beginAudio.length)];		    
		    indexesAudio[0] = random_BeginAudio;
			uniqueMiddleAudio = $.grep(uniqueMiddleAudio, function(value) { return value != random_BeginAudio; }); // see http://stackoverflow.com/questions/3596089

		    
			    
		    random_MiddleAudio = uniqueMiddleAudio[Math.floor(Math.random() * uniqueMiddleAudio.length)];
		    indexesAudio[1] = random_MiddleAudio;
		    uniqueMiddleAudio = $.grep(uniqueMiddleAudio, function(value) { return value != random_MiddleAudio;});
			    
		

		    uniqueEndAudio = $.grep(uniqueMiddleAudio, function(value) { return value != random_MiddleAudio; });
		    random_EndAudio = uniqueEndAudio[Math.floor(Math.random() * uniqueEndAudio.length)];
		    indexesAudio[2] = random_EndAudio;



		    //check playlist for 'undefined' elements, when found: recursive function of function(xml)
		 



		    // Prompt indices in HTML	
			$("#playlist").html(""); // clear old elements before .append new ones
			for(i = 0; i < indexes.length; i++){
				$("#playlist").append('<br>'+indexes[i]);
			}


			// Assemble URL Parms and Redirect to Play.html
			var parmsIndexes = "";
			var parmTicket = attr[0] + "-" + attr[1] + "-" + attr[2] + "-" + attr[3] + "-" + attr[4];
			for(i = 0; i < indexes.length; i++) {
				if (i == 0 ) { parmsIndexes = indexes[i]; }
				else { parmsIndexes += "-" + indexes[i]; }
			}

			var parmsAudio = "";
			for(i = 0; i <indexesAudio.length; i++) {
				if (i == 0) {parmsAudio = indexesAudio[i]; }
				else { parmsAudio += "-" + indexesAudio[i]; }
			}
	        window.location.href = 'play.html?ixs='+ parmsIndexes + "aud=" + parmsAudio + "md=" + parmMood + "tck=" + parmTicket; // parmMood is a single value, not an Array!
		    

		}, // end success: function(xml)
		
		error: function(){ 
			alert("something's wrong Diane");

		} // end error handler


}); // end $.ajax
}); // end .click(function(event)


}) //end jQuery


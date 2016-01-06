// metamachine with jQuery

$(document).ready(function(){

var pos_begin,
    pos_middle,
    pos_end,
    abenteuer,
    geborgenheit,
    koerpergenuss,
    kuligenuss,
    chance,
    geselligkeit,
    name;	    

var begin = [];
var middle = [];
var end = [];

var random_Begin = [];
var random_Middle = [];
var random_Middle2 = [];
var random_End = [];

var playlist = [];

// start generating playlist on click
$('#generatePlaylist').click(function(event){

// fetch parameters from HTML5 range sliders attr1 to attr6
var attr1 = $('#attr1').val();
var attr2 = $('#attr2').val();
var attr3 = $('#attr3').val();
var attr4 = $('#attr4').val();
var attr5 = $('#attr5').val();
var attr6 = $('#attr5').val();

// retrieve data from xml with jQuery.ajax method 
$.ajax({
	type: "GET",
	url: "metadata.xml",
	dataType: "xml",

		success: function(xml){
		$(xml).find('clip').each(function(){
		
		    pos_begin = $(this).find('pos_vorne').text();
	    	    pos_middle = $(this).find('pos_mitte').text();
	    	    pos_end = $(this).find('pos_hinten').text();
	    	    abenteuer = $(this).find('abenteuer').text();
		    geborgenheit =  $(this).find('geborgenheit').text();
		    koerpergenuss = $(this).find('koer_genuss').text();
		    kuligenuss =  $(this).find('kulin_genuss').text();
		    chance =  $(this).find('chance').text();
		    geselligkeit =  $(this).find('geselligkeit').text();
	    	    name = $(this).find('name').text();

		    // get suitable videos for the beginning; NOTE: IMPLEMENT THOSE AS LOOPS IN THE FUTURE!

		    if (abenteuer == attr1 && pos_begin == "true") {
		    begin.push(name);
		    } 
		    if (geborgenheit == attr2 && pos_begin == "true") {
		    begin.push(name);
		    } 
		    if (koerpergenuss == attr3 && pos_begin == "true") {
		    begin.push(name);
		    } 
		    if (kuligenuss == attr4 && pos_begin == "true") {
		    begin.push(name);
		    } 
		    if (chance == attr5 && pos_begin == "true") {
		    begin.push(name);
		    } 
		    if (geselligkeit == attr6 && pos_begin == "true") {
		    begin.push(name);
		    } 

		    // get suitable videos for the middlepart

		    if (abenteuer == attr1 && pos_middle == "true") {
		    middle.push(name);
		    }
		    if (geborgenheit == attr2 && pos_middle == "true") {
		    middle.push(name);
		    }
		    if (koerpergenuss == attr3 && pos_middle == "true") {
		    middle.push(name);
		    }
		    if (kuligenuss == attr4 && pos_middle == "true") {
		    middle.push(name);
		    }
		    if (chance == attr5 && pos_middle == "true") {
		    middle.push(name);
		    }
		    if (geselligkeit == attr6 && pos_middle == "true") {
		    middle.push(name);
		    }

		    // get suitable videos for the endpart

		    if (abenteuer == attr1 && pos_end == "true") {
		    end.push(name);
		    }
		    if (geborgenheit == attr2 && pos_end == "true") {
		    end.push(name);
		    }
		    if (koerpergenuss == attr3 && pos_end == "true") {
		    end.push(name);
		    }
		    if (kuligenuss == attr4 && pos_end == "true") {
		    end.push(name);
		    }
		    if (chance == attr5 && pos_end == "true") {
		    end.push(name);
		    }
		    if (geselligkeit == attr6 && pos_end == "true") {
		    end.push(name);
		    }

		    // resulting arrays have dublicate objects in them; NOTE #2: Implement dublicate filter for arrays!
		    // filter function solution: http://mikeheavers.com/main/code-item/removing_duplicates_in_an_array_using_javascript  

		    console.log("begin:", begin);
		    console.log("middle", middle);
		    console.log("end", end);

		    console.log("--------------");

		     // scramble the chosen values from generated position-arrays

		    random_Begin = begin[Math.floor(Math.random() * begin.length)];		    
		    playlist.push(random_Begin);

		    random_Middle = begin[Math.floor(Math.random() * middle.length)];
		    playlist.push(random_Middle);

		    random_Middle2 =  begin[Math.floor(Math.random() * middle.length)];
		    playlist.push(random_Middle);

		    random_End = begin[Math.floor(Math.random() * end.length)];
		    playlist.push(random_End);

		    // removing dublicates from final playlist


	            var uniquePlaylist = playlist.filter(function(elem, pos) {
    			return playlist.indexOf(elem) == pos;
  		    }); // end uniquePlaylist 



		    console.log("playlist:", playlist);
		    console.log("filtered playlist:", uniquePlaylist);



		    console.log("Ticket:", attr1, attr2, attr3, attr4, attr5, attr6);
		
	$("#XMLread").append('<li>' +pos_begin+ '-' +pos_middle+ '-' +pos_end+ '-' +abenteuer+ '-' +name+ '</li>');
		
		})
		
		}, // end function(xml)
		
		error: function(){ 
			console.log("something's wrong Diane");
		} // end error handler


}); // end $.ajax
}); // end .click(function(event)


})


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
var random_End = [];

var playlist = [];



 
$.ajax({
	type: "GET",
	url: "metadata.xml",
	dataType: "xml",

		success:function(xml){
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

		    if (pos_begin === "true") {
		    begin.push(name);
		    } 
		    if (pos_middle === "true") {
		    middle.push(name);
		    } 
		    if (pos_end === "true") {
		    end.push(name);
		    }
		    console.log("begin:", begin);
		    console.log("middle", middle);
		    console.log("end", end);
		
	$("#XMLread").append('<li>' +pos_begin+ '-' +pos_middle+ '-' +pos_end+ '-' +abenteuer+ '-' +name+ '</li>');
		
		})
		
		}



});

})


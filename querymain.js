// metamachine with jQuery

$(document).ready(function(){

$.ajax({
	type: "GET",
	url: "metadata.xml",
	dataType: "xml",
		success:function(xml){
		$(xml).find('clip').each(function(){
		
		var pos_begin = $(this).find('pos_vorne').text(),
	    	    pos_middle = $(this).find('pos_mitte').text(),
	    	    pos_end = $(this).find('pos_hinten').text(),
	    	    abenteuer = $(this).find('abenteuer').text(),
	    	    name = $(this).find('name').text();
		
	$("#XMLread").append('<li>' +pos_begin+ '-' +pos_middle+ '-' +pos_end+ '-' +abenteuer+ '-' +name+ '</li>');
		
		})
		
		}



});






/*
var xmlDoc = $.parseXML("/xml/metadata.xml");
var $xml = $(xmlDoc);

var $clip = $xml.find("clip");

$clip.each(function(){
	var pos_begin = $(this).find('pos_vorne').text(),
	    pos_middle = $(this).find('pos_mitte').text(),
	    pos_end = $(this).find('pos_hinten').text(),
	    abenteuer = $(this).find('abenteuer').text(),
	    name = $(this).find('name').text();

	$("#XMLread").append('<li>' +pos_begin+ '-' +pos_middle+ '-' +pos_end+ '-' +abenteuer+ '-' +name+ '</li>');



		});

*/

})


// metamachine with jQuery

$(document).ready(function(){


var title, attr1, attr2, attr3, attr4, attr5, attr6, posBegin, posMiddle, posEnd;

$.ajax({
	url: '/xml/metadata.xml',
	type: 'GET',
	dataType: 'xml',
		success: function(returnedXMLResponse){
			$('clip', returnedXMLResponse).each(function(){
				title = $('name', this).text();
				attr1 = $('abenteuer', this).text();
				posBegin = $('pos_vorne', this).text(); 
			})
		}

});



})


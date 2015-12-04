// the main file of metamachine.js

xmlhttp = new XMLHttpRequest();	
	xmlhttp.open("GET","xml/metadata.xml",false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;


	document.getElementById("begin").innerHTML=xmlDoc.getElementsByTagName("pos_vorne")[0].childNodes[0].nodeValue;
	document.getElementById("middle").innerHTML=xmlDoc.getElementsByTagName("pos_mitte")[0].childNodes[0].nodeValue;
	document.getElementById("end").innerHTML=xmlDoc.getElementsByTagName("pos_hinten")[0].childNodes[0].nodeValue;



	
function getVideo(){

	return xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
}	

function videoWahl(){
	var rangevideo = document.getElementById("videowahl").value;
       	document.getElementById("wert").innerHTML = rangevideo;
	document.getElementById("clipname").innerHTML=xmlDoc.getElementsByTagName("name")[rangevideo].childNodes[0].nodeValue;

}
	
	
	
	
var video = document.getElementById('video');
var source = document.createElement('source');

source.setAttribute('src', getVideo());

video.appendChild(source);



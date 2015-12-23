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


function printPlaylist() {

	var finalPlaylist = createPlaylist();
	finalPlaylist.toString();
       console.log(finalPlaylist);	
	document.getElementById("playlist").innerHTML = finalPlaylist.toString();

}
	
	
	
	
var video = document.getElementById('video');
var source = document.createElement('source');

source.setAttribute('src', getVideo());

video.appendChild(source);



function createPlaylist(attr1, attr2, attr3, attr4, attr5) { // search through XML and generate playlist, in a very primitive manner
 
	var clips = xmlDoc.getElementsByTagName("clip");

console.log(clips);

	var firstPos = [];
	var middlePos = [];
	var endPos = [];

	var playList = [];


	for (var i = 0; i <= clips.length; i++){ // getting all suitable elements for the first position in our playlist
	
		var abenteuer = xmlDoc.getElementsByTagName("abenteuer")[i].childNodes[0].nodeValue;
		var geborgenheit = xmlDoc.getElementsByTagName("geborgenheit")[i].childNodes[0].nodeValue;
		var geselligkeit = xmlDoc.getElementsByTagName("geselligkeit")[i].childNodes[0].nodeValue;
		var koer_genuss = xmlDoc.getElementsByTagName("koer_genuss")[i].childNodes[0].nodeValue;
		var kulin_genuss = xmlDoc.getElementsByTagName("kulin_genuss")[i].childNodes[0].nodeValue;
		var chance = xmlDoc.getElementsByTagName("chance")[i].childNodes[0].nodeValue;
		var position = xmlDoc.getElementsByTagName("pos_vorne")[i].childNodes[0].nodeValue;
		var name = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;




		console.log(abenteuer.toString());
		console.log(name.toString());
		console.log(position.toString());
		console.log(chance.toString());


		if (abenteuer == attr1 && position == true) { 
		firstPos.push(name);
		}
		if (geborgenheit == attr2 && position == true) {
		firstPos.push(name);
		}
		if (geselligkeit == attr3 && position == true) {
		firstPos.push(name);
		}
		if (koer_genuss == attr4 && position == true) {
		firstPos.push(name);
		}
		if (kulin_genuss == attr5 && position == true) {
		firstPos.push(name);
		}
		if (chance == attr6 && position == true) {
		firstPos.push(name);
		}
		console.log(firstPos.toString());
	}

	for (var j = 0; j <= list.length; j++){ // getting all suitable elements for the middle position in our playlist by pushing them into middlePos-Array
	
		var abenteuer = xmlDoc.getElementsByTagName("abenteuer")[j];
		var geborgenheit = xmlDoc.getElementsByTagName("geborgenheit")[j];
		var geselligkeit = xmlDoc.getElementsByTagName("geselligkeit")[j];
		var koer_genuss = xmlDoc.getElementsByTagName("koer_genuss")[j];
		var kulin_genuss = xmlDoc.getElementsByTagName("kulin_genuss")[j];
		var chance = xmlDoc.getElementsByTagName("chance")[j];
		var position = xmlDoc.getElementsByTagName("pos_mitte")[j];
		var name = xmlDoc.getElementsByTagName("name")[j];

		if (abenteuer == attr1 && position == true) {
		middlePos.push(name);
		}
		if (geborgenheit == attr2 && position == true) {
		middlePos.push(name);
		}
		if (geselligkeit == attr3 && position == true) {
		middlePos.push(name);
		}
		if (koer_genuss == attr4 && position == true) {
		middlePos.push(name);
		}
		if (kulin_genuss == attr5 && position == true) {
		middlePos.push(name);
		}
		if (chance == attr6 && position == true) {
		middlePos.push(name);
		}
	}

	for (var k = 0; k <= list.length; k++) { // getting all suitable elements for the end position in our playlist

		var abenteuer = xmlDoc.getElementsByTagName("abenteuer")[k];
		var geborgenheit = xmlDoc.getElementsByTagName("geborgenheit")[k];
		var geselligkeit = xmlDoc.getElementsByTagName("geselligkeit")[k];
		var koer_genuss = xmlDoc.getElementsByTagName("koer_genuss")[k];
		var kulin_genuss = xmlDoc.getElementsByTagName("kulin_genuss")[k];
		var chance = xmlDoc.getElementsByTagName("chance")[k];
		var position = xmlDoc.getElementsByTagName("pos_hinten")[k];
		var name = xmlDoc.getElementsByTagName("name")[k];

		if (abenteuer == attr1 && position == true) {
		endPos.push(name);
		}
		if (geborgenheit == attr2 && position == true) {
		endPos.push(name);
		}
		if (geselligkeit == attr3 && position == true) {
		endPos.push(name);
		}
		if (koer_genuss == attr4 && position == true) {
		endPos.push(name);
		}
		if (kulin_genuss == attr5 && position == true) {
		endPos.push(name);
		}
		if (chance == attr6 && position == true) {
		endPos.push(name);
		}
	}


	var randomFirst = firstPos[Math.floor(Math.random() * firstPos.length)]; // scramble the chosen values from generated position-arrays
	playList.push(randomFirst);

	var randomMiddle = middlePos[Math.floor(Math.random() * middlePos.length)];
	playList.push(randomMiddle);

	var randomMiddle2 = middlePos[Math.floor(Math.random() * middlePos.length)];
	playList.push(randomMiddle2);

	var randomEnd = endPos[Math.floor(Math.random() * endPos.length)];
	playList.push(randomEnd);


        console.log(playList.toString());	
        console.log(firstPos.toString());	
        console.log(middlePos.toString());	
        console.log(endPos.toString());	
	document.getElementById("playlist").innerHTML = playList.toString();

	return playList;

} 

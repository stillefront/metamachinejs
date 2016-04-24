function speechPlayer() {}
var Speech = {};
var countContainerAudio = 0;
var audidx = 0;

/**
 * @param playlist An array of URLs to be played - see documentation for details
 * @param container The HTML ID of the element to insert videos into
 * @param baseurl The base URL to append to videos
 * @param options A list of additional <video> options, if any
 */
speechPlayer.prototype.initialise = function(playlist, container, baseurl, options) {
    Speech.playlist   = playlist;
    Speech.container  = container;
    Speech.baseurl    = baseurl;
    Speech.options    = options;
    Speech.preloaded  = 0;
    Speech.paused     = false;
}


speechPlayer.prototype.preloadAudio = function() {
    console.log("speechPlayer.preloadAudio");
    
    // Clear canvas
    document.getElementById(Lifemirror.container).innerHTML = "";
    audidx = 0;
    countContainerAudio = 10;

    // Write code for the 1st 4 videos
    // They serve as containers for following videos
    for(i = 0; i < 3; i++)
    {
        // Prepare HTML to insert
        // This is necessary to prevent the browser closing tags
        var htmlToInsert = "<audio preload oncanplaythrough='speechPlayer.preloaderCallback()' onended='speechPlayer.nextAudio()' id='"+(i+10)+"' style='display:none'"+Speech.options+">";
            htmlToInsert += "<source src='"+Speech.baseurl+Speech.playlist[audidx+i]+"' type='audio/mpeg'>";
            //htmlToInsert += "<source src='"+Lifemirror.baseurl+Lifemirror.playlist[idx+i]+"' type='video/ogg'>";
            htmlToInsert += "</audio>";

        // Insert the HTML
        document.getElementById(Speech.container).innerHTML += htmlToInsert;
    }
}

speechPlayer.startPlaying = function() {
    console.log("speechPlayer.startPlaying");
    
    var sound = document.getElementById(countContainerAudio);
        sound.style.display = 'inline';
        sound.play();

}

speechPlayer.pause = function() {
    var sound = document.getElementById(countContainerAudio);
    if (!sound.paused) {
        sound.pause();
    } else {
        sound.play();
    };
}



speechPlayer.nextAudio = function() {
    
    // Counts pointer in playlist for next video
    audidx++;

    // As long as there are videos to play...
    if (audidx < Speech.playlist.length) {

        // Hide last container
        document.getElementById(countContainerAudio).style.display = 'none';

        // Counts so we know which container to use next
        if (countContainerAudio <= 12) {
            countContainerAudio++;
        } else {
            countContainerAudio = 10;
        }
        console.log("countContainerAudio", countContainerAudio);

        // Show & play next container
        document.getElementById(countContainerAudio).style.display = 'inline';
        document.getElementById(countContainerAudio).play();

        // Replace old video with a new one (if there are still videos to place)
        if (Speech.playlist.length - (audidx+2) > 0) {
            var audio = document.getElementsByTagName('audio')[ (countContainerAudio +20)%3 ];
            var sources = audio.getElementsByTagName('source');
            sources[0].setAttribute("src", Speech.baseurl+Speech.playlist[audidx+2]);
            audio.load();
        }
    } else {
        this.end();
    }
}

speechPlayer.end = function () {
    // Dispatch/Trigger/Fire event that playlist/videos have ended
    //var endEvent = new CustomEvent("videosEnded");
    //document.dispatchEvent(endEvent);
	console.log("Kein Audio mehr!");
}

speechPlayer.preloaderCallback = function() {
    Speech.preloaded++;
    if(Speech.preloaded >= 3) this.startPlaying();
}

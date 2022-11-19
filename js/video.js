//Initialize Variables
var vid = document.getElementById("videoplayer");
vid.load();
vid.autoplay =false;
vid.loop = false;
vid.playbackRate = 1;

//Play Video
function playVid() {
    vid.play();
}
document.getElementById("play").addEventListener("click", playVid);


//Pause Video
function pauseVid() {
    vid.pause();
}
document.getElementById("pause").addEventListener("click", pauseVid);


//Slow down
function slowVid(){
    if (vid.playbackRate == 0.5){
        alert("Video is at slowest speed!");
    }
    else{
        vid.playbackRate /= 2;
    }
}

document.getElementById("slower").addEventListener("click", slowVid);


//Speed Up
function speedVid(){
    if (vid.playbackRate == 2){
        alert("Video is at fastest speed!");
    }
    else{
        vid.playbackRate *= 2;
    }
}

document.getElementById("faster").addEventListener("click", speedVid);


//Skip Ahead
function skipVid(){
    if(vid.currentTime + 15 < vid.duration){
        vid.currentTime += 15;
    }
    else{
        vid.currentTime = 0;
        vid.pause();
    }
}

document.getElementById("skip").addEventListener("click", skipVid);


//Mute
function muteVid(){
    var current = document.getElementById("mute").textContent;
    if(current == "Mute"){
        vid.muted = true;
        document.getElementById("mute").textContent = "Unmute";
        //set slider and text
        document.getElementById("volume").textContent = "0%";
        document.getElementById("slider").value = 0;
    }
    else{
        vid.muted = false;
        document.getElementById("mute").textContent = "Mute";
        //set slider and text
        document.getElementById("volume").textContent = vid.volume * 100 + "%";
        document.getElementById("slider").value = vid.volume * 100;
    }
}

document.getElementById("mute").addEventListener("click", muteVid);


//Volume Slider
function newspeed(){
    vid.volume = this.value / 100;
    document.getElementById("volume").textContent = vid.volume * 100 + "%";
}

document.getElementById("slider").addEventListener("change", newspeed);

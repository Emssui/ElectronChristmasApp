const audio = document.querySelector("audio");
const muteButton = document.getElementById("mute-btn");

function toggleMute() {
    if (audio.muted) {
        audio.muted = false;
        muteButton.src = "assets/images/mute.png";
    } else {
        // Mute the audio
        audio.muted = true;
        // Change button image to unmute icon
        muteButton.src = "assets/images/unmute.png";
    }
}

muteButton.addEventListener("click", toggleMute);

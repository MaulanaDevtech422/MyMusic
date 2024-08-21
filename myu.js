

window.addEventListener('load', function() {
    var audio = document.getElementById('background-music');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var playPauseIcon = document.getElementById('playPauseIcon');

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');
        } else {
            audio.pause();
            playPauseIcon.classList.remove('fa-pause');
            playPauseIcon.classList.add('fa-play');
        }
    });
});

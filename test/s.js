// script.js
document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('play-button');
    var audioPlayer = document.getElementById('audio-player');
  
    playButton.addEventListener('click', function() {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pause';
      } else {
        audioPlayer.pause();
        playButton.textContent = 'Play';
      }
    });
  });
  
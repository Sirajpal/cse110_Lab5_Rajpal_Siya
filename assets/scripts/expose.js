// expose.js

window.addEventListener('DOMContentLoaded', init);
var confetti = new JSConfetti();

function init() {
  var hornSelected = document.getElementById("horn-select");
  var volume = document.getElementById("volume");


  hornSelected.addEventListener('change', changeHorn);
  volume.addEventListener('input', changeVolume);

  
  const button = document.querySelector('button');

  button.addEventListener('click', playAudio);
}


function changeHorn() {
  var audio;
  var img;
  if(this.value == "air-horn") {
    audio = "assets/audio/air-horn.mp3";
    img = "assets/images/air-horn.svg";
  } else if(this.value == "car-horn") {
   audio = "assets/audio/car-horn.mp3";
    img = "assets/images/car-horn.svg";
  } else if(this.value == "party-horn") {
    audio = "assets/audio/party-horn.mp3";
    img = "assets/images/party-horn.svg";
  }
  document.querySelector(".hidden").src = audio;
  document.querySelector("img").src = img;
}

function playAudio() {
  var hornSelected = document.getElementById("horn-select").value;
  var soundToPlay = document.querySelector(".hidden");
  var volume = document.getElementById("volume").value;
  soundToPlay.volume = volume/100;
  soundToPlay.play();
  if(hornSelected == "party-horn") {
    confetti.addConfetti();
  }
}

function changeVolume() {
  var volume = this.value;
  var volumeImg = "";

  if(volume == 0) {
    volumeImg = "assets/icons/volume-level-0.svg";
  } else if (volume > 0 && volume < 33) {
    volumeImg = "assets/icons/volume-level-1.svg";
  } else if (volume >= 33 && volume < 67) {
    volumeImg = "assets/icons/volume-level-2.svg";
  } else if (volume >= 67) {
    volumeImg = "assets/icons/volume-level-3.svg";
  }
  document.querySelector("#volume-controls > img").src = volumeImg;
}
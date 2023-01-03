const mp3 = new Audio("lemonadediary.mp3");

const ON = document.querySelector(".music-on");
const OFF = document.querySelector(".music-off");
const PAUSE = document.querySelector(".music-pause");
const VOLUME = document.querySelector(".vol-control");

ON.addEventListener("click", play);
PAUSE.addEventListener("click", pause);
OFF.addEventListener("click", stop);
VOLUME.addEventListener("change", vol);

function play() {
  mp3.play();
  mp3.loop = true;
  mp3.volume = 0.5;
}

function pause() {
  mp3.pause();
}

function stop() {
  mp3.pause();
  mp3.currentTime = 0;
}

function vol() {
  mp3.volume = VOLUME.value / 10;
}

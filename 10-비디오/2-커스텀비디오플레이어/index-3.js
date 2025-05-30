//03-볼륨조절

const video = document.querySelector('video');
const playButton = document.querySelector('.play-pause');
const rateButtons = document.querySelectorAll('.rate');
const volumeBar = document.querySelector('input');

const setVolume = (event) => {
  //console.log(event.target.value); //비디오객체의 볼륨을 지정하는 값이 0~1사이의 값을 가짐
  video.volume = event.target.value;
};

const setRate = (event) => {
  const { rate } = event.target.dataset;
  video.playbackRate = rate;
};

const play = () => {
  playButton.innerText = '||';
  video.play();
};

const pause = () => {
  playButton.innerText = '▶';
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

playButton.addEventListener('click', togglePlay);
rateButtons.forEach((button) => {
  button.addEventListener('click', setRate);
});
volumeBar.addEventListener('change', setVolume);
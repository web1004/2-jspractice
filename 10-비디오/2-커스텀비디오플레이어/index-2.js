//02-재생속도

const video = document.querySelector('video');
const playButton = document.querySelector('.play-pause');
const rateButtons = document.querySelectorAll('.rate');

const setRate = (event) => {
  //console.log(event.target.dataset);

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

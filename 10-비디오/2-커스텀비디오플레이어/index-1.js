//01-play 버튼의 기능

const video = document.querySelector('video');
const playButton = document.querySelector('.play-pause');

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
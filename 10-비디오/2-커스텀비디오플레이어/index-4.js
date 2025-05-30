//04-시간표시(비디오 전체재생시간과 현재 재생시간을 실시간)

const video = document.querySelector('video');
const playButton = document.querySelector('.play-pause');
const rateButtons = document.querySelectorAll('.rate');
const volumeBar = document.querySelector('input');

const formatting = (time) => {  //time에는 비디오 객체가 넘겨주는 시간정도를 받음
  const sec = Math.floor(time % 60);
  const min = Math.floor(time / 60) % 60; //분에 해당하는 값을 구한다음에 60분이 넘지 않도록 함
  const hour = Math.floor(time / 3600); 

  const fSec = sec < 10 ? `0${sec}` : sec;
  const fMin = min < 10 ? `0${min}` : min;
  const fHour = hour < 10 ? `0${hour}` : hour;

  return `${fHour}:${fMin}:${fSec}`;
};

const updateTime = () => {
  const current = document.querySelector('.current');
  const duration = document.querySelector('.duration'); 

  // current.innerText = '현재';
  // duration.innerText = '전체';

  // current.innerText = video.currentTime;
  // duration.innerText = video.duration;

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const setVolume = (event) => {
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
video.addEventListener('timeupdate', updateTime);
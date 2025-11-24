const button = document.querySelector('button');

/* 비디오가 정지되어 있다면 버튼의 텍스트를 pause로 지정하고 비디오를 재생을 시켜줄거고, 비디오가 재생될때 버튼의 텍스트는 play로 지정하고 비디오재생을 멈추게 */
const togglePlay = () => {
  const video =document.querySelector('video');
  console.log(video.paused);
  /* 비디오가 가지고 있는 paused라는 값이 출력이 되고, 이 값은 비디오가 정지상태인지를 나타내는 블린값임.
  정지된 상태에서는 true값을 가지고, 재생중일때는 false값을 가짐)  */

  if(video.paused){ //멈쳐있는 상태에서 버튼을 클릭했다는 의미
    button.innerText = 'Pause';
    video.play();
  }else{
    button.innerText = 'Play';
    video.pause();
  };
};

button.addEventListener('click', togglePlay);
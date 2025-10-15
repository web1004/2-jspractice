const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let timerId;
// let msec = 0;
// let sec = 0;
// let min = 0;

let [msec, sec, min] = [0, 0, 0];  //구조분해할당

//(2)화면에 뿌리기
const displayTimer = () => {
  const time = document.querySelector('.time');

  //삼항조건 연산자 : 조건식 ? 참일때 실행문 : 거짓일때 실행문;
  const fMin = min < 10 ? `0${min}` : min;
  const fSec = sec < 10 ? `0${sec}` : sec;
  const fMsec = msec < 10 ? `0${msec}` : msec;

  time.innerText = `${fMin} : ${fSec} : ${fMsec}`;
};

//(1)시간초당 움직임
const timer = () => {
  msec++; //0.01초씩 증가  100->1

  if(msec === 100){  //100밀리초가 되면 1초
    msec = 0;
    sec++;
    if(sec === 60) { //60초가 되면 1분이 됨
      sec = 0;
      min++;
    };
  };
  displayTimer();
};

//(3)각 버튼 조작
const start = () => {
  timerId = setInterval(timer, 10); //0.01초
};
const stop = () => {
  clearInterval(timerId);
};
const reset = () => {
  stop();  //멈추고
  [msec, sec, min] = [0, 0, 0];  //구조분해할당으로 0 넣기
  displayTimer(); //0을 화면에 다시 출력
};

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
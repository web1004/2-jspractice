const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

/* 현재 시,분,초를 가져와라 하는 명령을 한번만 작성했기 때문에 한번만 나옴 
const now = new Date();
hour.innerText = now.getHours();
min.innerText = now.getMinutes();
sec.innerText = now.getSeconds(); */

//10보다 작은 경우에만 00 문자로 변환
function addZero(value){
  if(value < 10){
    value = '0' + value;
  };
  return value;
};

function clock(){
  const now = new Date();
  hour.innerText = addZero(now.getHours());
  min.innerText = addZero(now.getMinutes());
  sec.innerText = addZero(now.getSeconds());

  /* 한자리 숫자일때와 두자리숫자일때 차이가 남
  hour.innerText = now.getHours();
  min.innerText = now.getMinutes();
  sec.innerText = now.getSeconds(); */
};

setInterval(clock, 1000);  //1초마다 실행



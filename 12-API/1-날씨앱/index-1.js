//01-사용자의 현재위치 가져오기

import { API_KEY } from './env.js';

//(4)현재 날씨 api
const getCurrentWeather = (latitude, longitude) => {

};

//(3)팝업창을 허용했을때.
const getPosition =(position) => {
  //console.log(position); //latitude(위도), longitude(경도)
  const { latitude, longitude } = position.coords; //구조분해할당
  //console.log(latitude, longitude); 
  getCurrentWeather(latitude, longitude);
};

//(2)팝업창을 차단했을때 만들어둔 메세지 띄우기
const errorHandler =(error) => {
  //console.log(error.message);  //팝업창에서 차단을 클릭하면 에러메세지 뜸
  const noti = document.querySelector('.noti');
  noti.style.display = 'block';
};

//(1)geolocation api에서 소스 가져옴
if ("geolocation" in navigator) {
  /* navigator.geolocation.getCurrentPosition((position) => {
    doSomething(position.coords.latitude, position.coords.longitude);
  }); */
  navigator.geolocation.getCurrentPosition(getPosition,errorHandler);
  //(현재위치를 가져오는게 성공하면 실행되는 콜백함수, 에러가 발생했을때 실행하는 콜백함수)
} else {
  console.log('geolocation IS NOT available');
}
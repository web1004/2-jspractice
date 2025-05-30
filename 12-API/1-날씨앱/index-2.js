//02-API 요청해서 화면에 표시하기 

import { API_KEY } from './env.js';

//API요청하기(상단의 API > Current Weather Data)
const getCurrentWeather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  /* fetch(URL) -> API 요청해서 데이터 가져오는 비동기함수
  .then((response) => response.json())
  .then((data) => console.log(data));   */

  fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const city = document.querySelector('.city');
    const weather = document.querySelector('.weather');
    const temp = document.querySelector('.temp');
    const icon = document.querySelector('.icon');

    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
    //temp.innerText = data.main.temp;
    temp.innerText =  `${data.main.temp} °C`; 
  });
};

const getPosition =(position) => {
  const { latitude, longitude } = position.coords; 
  getCurrentWeather(latitude, longitude);
};

const errorHandler =(error) => {
  const noti = document.querySelector('.noti');
  noti.style.display = 'block';
};

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition,errorHandler);
} else {
  console.log('geolocation IS NOT available');
}
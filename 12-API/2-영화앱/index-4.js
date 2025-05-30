//04-검색기능-콘솔창에 확인

import { API_KEY } from "./env.js";

const form = document.querySelector('form'); //(1)

//(3) 검색
const searchMovie = (event) => {
  event.preventDefault();

  const input = document.querySelector('input');
  const {value:keyword} = input;  //value이름을 keyword 로 변경

  //console.log(keyword); ->input에 입력하고 엔터를 치면 콘솔창에 키워드가 잘 출력되는것을 확인할수 있음

  //api문서에서 하단의 API > 상단의 Guides > Search & Query for Details
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`;

  fetch(searchURL)
  .then((response) => response.json())
  //.then((data) => console.log(data));
  .then(({results}) => console.log(results));
};

const movieDetail =(event) => {
  const { id } = event.target.parentElement;
  const detailURL = `https://www.themoviedb.org/movie/${id}`;
  window.open(detailURL, '_blank');
};

const createBlock = ({
  id, 
  poster_path, 
  original_title,
  title,
  vote_average,
  release_date,
}) => {
  const parent = document.querySelector('.contents');
  const movie = document.createElement('div');
  const poster = document.createElement('img');
  const detail = document.createElement('div');
  const info = document.createElement('div');
  const date = document.createElement('div');
  const rate = document.createElement('div');
  const h3 = document.createElement('h3');

  info.append(date, rate);
  detail.append(info, h3);
  movie.append(poster, detail);
  parent.append(movie);

  movie.className = 'movie';
  detail.className = 'detail';
  info.className = 'info';
  date.className = 'date';
  rate.className = 'rate';

  movie.id = id;
  poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  h3.innerText = `${original_title} (${title})`;
  date.innerText = release_date;
  rate.innerText = `⭐️ ${vote_average}`;

  poster.addEventListener('click', movieDetail); 
};

const getPopularMovies = () => { 
  const URL =`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;

  fetch(URL)
  .then((response) => response.json())
  .then(({results}) => {
    results.forEach((movie)=> {
      createBlock(movie);
    });
  });
};

getPopularMovies();
form.addEventListener('submit', searchMovie); //(2)
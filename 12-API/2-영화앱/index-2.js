//02-원하는 모양으로 화면에 출력하기

import { API_KEY } from "./env.js";

const createBlock = ({
  id, 
  poster_path, 
  original_title,
  title,
  vote_average,
  release_date,
}) => {
  /* console.log(
    id, 
    poster_path, 
    original_title,
    title,
    vote_average,
    release_date
  );  */

  //(1)-요소생성
  const parent = document.querySelector('.contents');
  const movie = document.createElement('div');
  const poster = document.createElement('img');
  const detail = document.createElement('div');
  const info = document.createElement('div');
  const date = document.createElement('div');
  const rate = document.createElement('div');
  const h3 = document.createElement('h3');

  //02-부모자식관계구조
  info.append(date, rate);
  detail.append(info, h3);
  movie.append(poster, detail);
  parent.append(movie);

  //03-클래스 입히기
  movie.className = 'movie';
  detail.className = 'detail';
  info.className = 'info';
  date.className = 'date';
  rate.className = 'rate';

  //04-화면에 뿌리기
  movie.id = id;
  poster.src = ``;
  h3.innerText = `${original_title} (${title})`;
  date.innerText = release_date;
  rate.innerText = `⭐️ ${vote_average}`;
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
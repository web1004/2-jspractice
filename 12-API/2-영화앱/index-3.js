//03-포스터이미지 가져오기&해당포스터를 클릭하면 해당 영화정보를 보여주는 사이트로 링크연결

import { API_KEY } from "./env.js";

//(4)영화상세페이지 연결 함수
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
  //(2)api문서에서 하단의 API > 상단의 Guides > 왼쪽메뉴의 IMAGES-Basics
  poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  h3.innerText = `${original_title} (${title})`;
  date.innerText = release_date;
  rate.innerText = `⭐️ ${vote_average}`;

  //(1)포스터이미지의 파일경로확인
  //console.log(poster_path); -> 파일의 경로만 있고 앞쪽의 기본경로는 없음

  //(3)이미지 클릭시 상세페이지 연결이벤트
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
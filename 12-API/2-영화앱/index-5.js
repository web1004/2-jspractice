//05-검색기능:기존 목록을 지우고 새롭게 화면 뿌리기

import { API_KEY } from "./env.js";

const form = document.querySelector('form'); 

//(1)전부 지우는 함수
const removeAll = () => {
  const movies = document.querySelectorAll('.movie');

  movies.forEach((movie) => {
    movie.remove();
  });
};

const searchMovie = (event) => {
  event.preventDefault();

  const input = document.querySelector('input');
  const {value:keyword} = input;  

  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`;

  //(2)input에 키워드가 있을때만 실행(회면에 뿌려줌)
  if (keyword) {
    removeAll();

    fetch(searchURL)
      .then((response) => response.json())
      .then(({results}) => {
        results.forEach((movie) => {
          createBlock(movie);
      });
    });
  };

  /* 위 if문 안으로 이동
  fetch(searchURL)
  .then((response) => response.json())
  .then(({results}) => console.log(results)); */
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
form.addEventListener('submit', searchMovie); 
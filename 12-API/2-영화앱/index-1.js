//01-페이지가 로드되었을때 준비한 api를 이용해서 인기영화 데이터의 필요 부분만 호출함 

import { API_KEY } from "./env.js";

//(2)함수생성(필요한 부분만 구조분해할당)
/* const createBlock = (movie) => {
  console.log(movie);
}; */


const createBlock = ({
  id, 
  poster_path, 
  original_title,
  title,
  vote_average,
  release_date,
}) => {
  console.log(
    id, 
    poster_path, 
    original_title,
    title,
    vote_average,
    release_date
  ); 
};


//(1)api호출(api문서에서 하단의 API > 상단의 API Reference> 왼쪽메뉴중 MOVIE LISTS-Popular)
const getPopularMovies = () => { 
  const URL =`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;

  fetch(URL)
  .then((response) => response.json())
  //.then((data) => console.log(data));
  //.then(({results}) => console.log(results));

  .then(({results}) => {
    results.forEach((movie)=> {
      createBlock(movie);
    });
  });
};

getPopularMovies();
const images = document.querySelectorAll('.item'); //[0번이미지][1번이미지][2번이미지] 배열형태
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

//console.log(images);

let index = 0; //첫번째 인덱스
let lastIndex = images.length - 1;  //마지막 인덱스

//기존의 이미지는 안보이게 하고 현재의 인덱스 이미지 보이게 하기
const updateImage = () => {
  //기존의 이미지는 안보이게(show클래스 삭제);
  images.forEach((img) => {
    img.classList.remove('show');
  });
  images[index].classList.add('show'); //현재 인덱스는 보이게 하기
};

const moveToPrev = () => {
  if(index === 0){
    index = lastIndex;
  }else{
    index--;
  };
  updateImage();
};

const moveToNext = () => {
  if(index === lastIndex){
    index = 0;
  }else{
    index++;
  };
  updateImage();
};

prevButton.addEventListener('click', moveToPrev);
nextButton.addEventListener('click', moveToNext);
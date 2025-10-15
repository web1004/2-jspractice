//02-이미지에 글자쓰기

const canvas = document.querySelector('canvas');
const imageFile = document.querySelector('#image-file');
const textInputs = document.querySelectorAll('.text'); //01
const topTextInput = document.querySelector('#top-text'); //02
const bottomTextInput = document.querySelector('#bottom-text'); //02
const ctx = canvas.getContext('2d');

let image;
let width;
let height;

let topText = '';
let bottomText = '';

//03-이미지에 텍스트 그려주기(이미지에 크기대비로 위치하게 함)
const drawText = () => {
  const offsetY = height / 20;
  const fontSize = width / 10;

  ctx.font = `${fontSize}px sans-serif`;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = fontSize / 5;
  ctx.lineJoin = 'round';

  ctx.textBaseline = 'top';  //strokeText 와 fillText 입력순서 지켜야 함
  ctx.strokeText(topText, width / 2, offsetY); //(그릴요소, x좌표, y좌표)
  ctx.fillText(topText, width / 2, offsetY);

  ctx.textBaseline = 'bottom';
  ctx.strokeText(bottomText, width / 2, height - offsetY);
  ctx.fillText(bottomText, width / 2, height - offsetY);

}

//02
const updateTopText = (event) => {
  topText = event.target.value;
  // console.log(topText);
  drawText();
};

const updateBottomText = (event) => {
  bottomText = event.target.value;
  // console.log(bottomText);
  drawText();
};

//01
const showInputs = () => {
  textInputs.forEach((input) => {
    input.style.display = 'flex';
  });
};

const uploadImage = () => {
  width = image.width;
  height = image.height;

  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(image, 0, 0); 
  showInputs(); //input창은 이미지가 업로드한 다음에 나와야 함
};

const createImage = (event) => {
  const imageUrl = URL.createObjectURL(event.target.files[0]);

  image = document.createElement('img');
  image.src = imageUrl;
  image.addEventListener('load', uploadImage);
};



imageFile.addEventListener('change', createImage);
topTextInput.addEventListener('change', updateTopText); //02
bottomTextInput.addEventListener('change', updateBottomText); //02
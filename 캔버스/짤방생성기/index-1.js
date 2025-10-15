//01-업로드한 이미지를 캔버스에 그리기

const canvas = document.querySelector('canvas');
const imageFile = document.querySelector('#image-file');
const ctx = canvas.getContext('2d');

//02-1
let image;
let width;
let height;

//03-캔버스크기를 업로드한 이미지로 크기를 지정하고 캔버스위에 우리가 만든 이미지를 그려주는것
const uploadImage = () => {
  width = image.width;
  height = image.height;

  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(image, 0, 0); //drawImage(그릴이미지개체,x좌표,y좌표)
};

//02
const createImage = (event) => {
  console.log(event);
  //console.log(event.target.files[0]); //올린 파일정보를 가져와야 함

  const imageUrl = URL.createObjectURL(event.target.files[0]);

  image = document.createElement('img');
  image.src = imageUrl;
  // console.log(image);
  image.addEventListener('load', uploadImage);  //이미지가 로드가 되면
};


//01
imageFile.addEventListener('change', createImage);

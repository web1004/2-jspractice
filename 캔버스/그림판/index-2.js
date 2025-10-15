//02-위에 있는 메뉴기능 채우기 

const canvas = document.querySelector('canvas');
const color =document.querySelector('#color'); //(1)
const width = document.querySelector('#width'); //(2)
const clear =document.querySelector('.clear');  //(3)
const save =document.querySelector('.save'); //(4)

const ctx = canvas.getContext('2d'); 
//전체 크기만한 흰색배경의 종이로 저장하기
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isPainting = false;  
let lineWidth = 5; 

//(4)
save.addEventListener('click', () => {
  /* toBlob() 메서드는 콜백함수가 필요하고  이 콜백함수를 캔버스의 이미지를 의미하는 blob 라는 인자를 제공해줌
  a태그를 하나 만들어서 a태그의 href 을 blob 으로 지정해서 클릭이 되게끔 만든다. 마치 우리가 다운로드를 클릭한것과 같은 효과를 만들어서 다운로드 기능이 동작하게끔 만들어야 한다.
  */
  canvas.toBlob((blob) => {
    const a = document.createElement('a');  //a태그 생성
    a.href = URL.createObjectURL(blob); //href속성에 blob에 주소를 만들어주는 메서드(특정파일을 인자로 넣어주면 객체 url을생성해주는 메서드) 
    a.download = 'drawing.jpg';  //저정할 파일의 이름을 지정
    a.click();
  });
});

//(3)
clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //사각형 영역을 지우는 메서드(x좌표,y좌표,가로크기,세로크기)
});

//(2)
width.addEventListener('change', (event) => {
  lineWidth = event.target.value; 
});


//(1)
color.addEventListener('change', (event) => {
  console.log(event.target.value);
  ctx.strokeStyle = event.target.value;  //선의 색상을 정하는 속성
});


canvas.addEventListener('mouseout', (event) => {
  isPainting = false;
});


canvas.addEventListener('mousemove', (event) => {

  if(!isPainting){  
    return;
  }

  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';


  ctx.lineTo(event.offsetX, event.offsetY); 
  ctx.stroke(); 
  
})

canvas.addEventListener('mousedown', (event) => {
  isPainting = true; 
  ctx.beginPath();  
  ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener('mouseup', () => {
  isPainting = false; 
});
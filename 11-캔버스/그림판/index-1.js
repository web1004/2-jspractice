//01-캔버스를 사용하기 위해서는 먼저 드로잉이 가능한 캔버스를 선언해줘야 함
//클릭을 하지 않아도 마우스가 움직이면 그려지고 있음. -> isPainting 변수의 값이 true일때만 그려지고 false일때는 그려지지 않게끔 수정해야 함 

const canvas = document.querySelector('canvas');


const ctx = canvas.getContext('2d'); //2차원렌더링 컨텍스트를 생성...리턴받은 컨택스트를 기준으로 그림을 그릴수 있음

let isPainting = false;  //지금 그림을 그리는중인지 아닌지....기본값
let lineWidth = 5;  //그려지는 기본두께


//(4)마우스가 캔버스영역을  벗어났을때 멈추게 해야 함. 
canvas.addEventListener('mouseout', (event) => {
  isPainting = false;
});

//(3)마우스를 움직일때의 이벤트
canvas.addEventListener('mousemove', (event) => {
  //console.log(event);
  //3-2
  if(!isPainting){  //false라면 선을 그리지 않고 리턴
    return;
  }

  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  /* 문제: 확인하면..마우스를 클릭해서 그린다가 바깥에서 마우스를 떼고 다시 돌아오면 클릭한 상태가 아닌데도 계속 그려짐 -> 마우스가 캔버스영역을  벗어났을때 멈추게 해야 함. */



  // 3-1 console.log(event);
  ctx.lineTo(event.offsetX, event.offsetY); 
  //이전경로부터 지정된 위치까지 선을 그리는 메서드로 인자로 x,y좌표값이 필요함,선을 그리기는 하지만 실제로 렌더링은 되지 않아서 선이그려지지 않음
  ctx.stroke(); 
  //지정된 경로에 선을 그려지는 메서드
})


//(1)마우스를 클릭했을때 그리기를 시작해야 함
canvas.addEventListener('mousedown', (event) => {
  //console.log(event);
  //offsetX,offsetY - 이벤트가 발생한 타겟객체에서 상대적인 마우스의 위치를 좌표로 반환하는 값-이것을 이용해서 선을 그리게 함
  isPainting = true; //그리고 있는중이라는 것을 나타내는 변수
  ctx.beginPath();  //그리기를 시작(새로운 경로) 캔버스를 사용해서 어떤거를 그리려고 하면 항상 새로운 경로를 시작해서 출발점을 초기화해야 한다.
  ctx.moveTo(event.offsetX, event.offsetY); //눈에 보이지 않는 펜이 지정된 위치로 이동하게 끔 함
});

//(2)클릭을 뗐을때의 이벤트(그리기 종료)
canvas.addEventListener('mouseup', () => {
  isPainting = false; //마우스에서 손을 떼면 다시 false값
});
//03-사용자의 선택과 컴퓨터의 선택을 가져와서 누가 이겼는지 판별하는 함수를 콘솔에 출력

const buttons = document.querySelectorAll('button');

const result = ['가위', '바위', '보']; 

//누가 이겼는지 판별하는 함수생성
const game = (user,computer) => {
  if(user === computer){
    console.log('무승부');
  }else{
    //가위보, 바위가위, 보바위 -> 사용자가 이기는 경우
    //가위바위, 바위보, 보가위 -> 컴퓨터가 이기는 경우
    switch(user + computer){
      case '가위보':
      case '바위가위':
      case '보바위':
      console.log('사용자 승리!'); 
      break;
      case '가위바위':
      case '바위보':
      case '보가위':
      console.log('컴퓨터 승리!');
      break; 
    };
  };
};

const play = (event) => { 
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random()*3);
  const computer = result[randomIndex];

  game(user,computer);  //판별함수에 사용자와 컴퓨터의 선택값을 전달
};

buttons.forEach((button) => {
  button.addEventListener('click', play)
});
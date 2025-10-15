//가위바위보를 이미지로 바꾸기

const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');

const result = ['가위','바위','보'];

const show = (user, computer, result) => {
  computerChoice.innerText = computer
  userChoice.innerText = user;
  winner.innerText = result;
};

const game = (user,computer) => {
  if(user === computer){
    message ='무승부';
  }else{
    switch(user + computer){  
      case '가위보':
      case '바위가위':
      case '보바위':
      message = '사용자 승리!'; 
      break;
      case '가위바위':
      case '바위보':
      case '보가위':
      message ='컴퓨터 승리!';
      break; 
    };
  };
  show(user, computer, message); 
};

const play = (event) => {
  //const user = event.target.innerText;
  const user = event.target.dataset.choice;  //수정-data속성 불러오기
  const randomIndex = Math.floor(Math.random()*3);
  const computer = result[randomIndex];

  game(user,computer); 
};

buttons.forEach((button) => {
  button.addEventListener('click', play);
});
//2.컴퓨터 선택부분을 만들고, 컴퓨터의 선택은 랜덤으로 게임이 진행할때마다 선택이 바뀔수 있게 만든다.

const buttons = document.querySelectorAll('button');

/* 사용자가 어떤 버튼을 클릭하면 컴퓨터가 어떤 랜덤한 값을 선택하게 만든다. 
0,1,2 index로 구분하여 컴퓨터가 0부터 2사이에 값을 랜덤하게 선택하게 만들어야 한다. */
const result = ['가위','바위','보'];

//사용자와 컴퓨터가 가위,바위,보 중에 어떤것을 선택했는지...
const play = (event) => {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random()*3);
  const computer = result[randomIndex]

  console.log(user,computer);
};

buttons.forEach((button) => {
  button.addEventListener('click', play);
});

/* 수학(Math)객체
Math.random() :  0~1사이에 있는 부동소수점 난수를 생성(정수값으로 떨어지지 않음)
Math.random()*3 : 난수의 범위지정을 원하는 최대값(<3)
Math.floor(Math.random()*3) : 정수로 바꾸기
*/
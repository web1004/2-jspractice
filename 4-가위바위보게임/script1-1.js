//1.가위바위보 버튼들을 가져와서 사용자가 선택하면 어떤것을 선택했는지 알수 있게 함

const buttons = document.querySelectorAll('button');
//console.log(buttons);

//핸들러함수
const play = (event) => {
  console.log(event.target);
};

//3개의 버튼들에 동일한 이벤트를 등록할거라서 배열에 사용할수 있는 반복문인 forEach를 사용함
//인자에 실행될 함수를 지정해야 하는데 이 인자는 buttons(여러개를 포함한 요소)가 가지고 있는 요소들, 즉 각각의 button에 실행할 내용넣기
buttons.forEach((button) => {
  button.addEventListener('click', play);
});
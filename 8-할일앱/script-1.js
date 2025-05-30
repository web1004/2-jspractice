//01-input에 내용을 입력하면 목록에 추가됨
//submit 이벤트는 폼의 내부에 있는 input에 내용을 입력하고 엔터를 치거나, 버튼을 클릭할때 이벤트가 발생함

const form =document.querySelector('form');
const input =document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();  //새로고침이 발생하는것을 막음
  //console.log(input.value);

  /* 문제:아무것도 입력이 되지 않은 경우도 빈줄이 생성됨
  const li = document.createElement('li'); //li태그를 생성
  li.innerText = input.value; //li요소에 사용자가 작성한 input의 값을 출력
  ul.appendChild(li);  //화면에 출력이 될려면 문서를 구성하고 있는 어떤 요소에 붙여주여야 함
  input.value = ''; */

  //해결:input의 내용이 비어있지않은 경우만 실행
  if(input.value !== ''){
    const li = document.createElement('li'); 
    li.innerText = input.value; 
    ul.appendChild(li);  
    input.value = '';
  };
});
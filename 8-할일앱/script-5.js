//05-새로고침을 해도 화면에서 지워지지않고 로컬스토리지에 저장됨

const form =document.querySelector('form');
const input =document.querySelector('input');
const ul = document.querySelector('ul');

//(1)새로운 아이템을 하나의 오브젝트로 만들어서 todos라는 배열에 저장,전체 아이템들을 저장할 배열을 생성
const todos = [];

/* 배열에는 아래와 같은 형태로 저장이 될것임
{
  id:1,
  text:'hello',
}  
*/

//(6)새로운 아이템이 추가될때마다 로컬스토리지에 저장된 정보가 업데이트되어야 함
const save = () => {
  //localStorage.setItem(키값, 저장할 데이터지정);
  //localStorage.setItem('todos', 'todos');
  //저장하려는 배열을 텍스트 형식으로 바꾸어서 저장(자바스크립트 객체를 JSON문자열로 변환해줌) 
  localStorage.setItem('todos', JSON.stringify(todos));
};

const delItem = (event) => {
  const target = event.target.parentElement;
  target.remove();
};

const addItem = (todo) => {  //(5)todo로 받음
  if(todo !== ''){  //수정
    const li = document.createElement('li'); 
    const button = document.createElement('button'); 
    const span =document.createElement('span'); 

    //span.innerText = text;
    span.innerText = todo.text; //수정(todo객체안의 text라는 키값의 데이터를 가져옴)
    button.innerText = '삭제';
    button.addEventListener('click',delItem); 
    
    ul.appendChild(li); 
    li.appendChild(span);
    li.appendChild(button);  
  };
};

const handler = (event) => {
  event.preventDefault(); 

  //(2)todo라는 오브젝트로 포장:객체는 키와 값으로 구성
  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo); //(3)todos라는 배열에 추가


  //addItem(input.value); 
  addItem(todo); //(4)todo를 전달
  save(); //(7)함수 호출
  input.value = '';
};

form.addEventListener('submit', handler);
//01-폼에 할일을 추가하면 화면에 그리고 로컬스토리지에 저장, 입력된 값을 유지
//할일을 입력하고 엔터하면 todo 목록에 내용이 추가됨

const form = document.querySelector('form');


const createElement = (listId, todo) => {
  const list = document.querySelector(`#${listId}`);
  const item = document.createElement('div');

  item.id = todo.id;
  item.innerText = todo.text;
  item.className = 'item';
  item.draggable = 'true';

  list.appendChild(item);

};


//새로운 할일 객체를 만들어주는 역할의 함수
const createTodo = (event) => {
  event.preventDefault();

  const input = document.querySelector('input');
  const id = uuidv4();

  //UUID : 범용고유식별자 https://www.uuidgenerator.net/
  //https://cdnjs.com/libraries/uuid

  const newTodo = {
    id,
    text: input.value,
  };

  // console.log(newTodo);
  createElement('todo', newTodo);
  input.value = '';
}

form.addEventListener('submit', createTodo);
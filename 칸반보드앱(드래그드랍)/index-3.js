//03-로컬리스트저장과 마우스오른쪽메뉴 누르면 삭제

const form = document.querySelector('form');
const blocks = document.querySelectorAll('.list');

//드래그의 출발지점과 끝지점을 알아야 함
let from, to;

let todoList = [], doingList = [], doneList = [];

const lists = {
  todo: todoList,
  doing: doingList,
  done: doneList,
};

const removeTodo = (event) => {
  event.preventDefault();

  const { id } = event.target;
  const { id: listId } = event.target.parentElement;

  event.target.remove();
  lists[listId] = lists[listId].filter((todo) => {
    return todo.id !== id;
  });

  saveList(listId);

};

const saveList = (listId) => {
  localStorage.setItem(listId, JSON.stringify(lists[listId]));
};


const dragOver = (event) => {
  // console.log(event.target.id);
  event.preventDefault();

  const { id: targetId } = event.target;
  const listIds = Object.keys(lists);

  // console.log(listIds);

  if (listIds.includes(targetId)) {
    to = targetId;
  }

  console.log(to);
};

const dragStart = (event) => {
  // console.log('드래그시작');
  // console.log(event.target.parentElement.id);

  from = event.target.parentElement.id;
  to = from;
};

const dragEnd = (event) => {
  const { id } = event.target;

  if (from === to) {
    return;
  }

  event.target.remove();
  lists[from] = lists[from].filter((todo) => {
    if (todo.id !== id) {
      return todo;
    } else {
      createElement(to, todo);
    }
  });

  saveList(from);
  saveList(to);
};


const createElement = (listId, todo) => {
  const list = document.querySelector(`#${listId}`);
  const item = document.createElement('div');

  item.id = todo.id;
  item.innerText = todo.text;
  item.className = 'item';
  item.draggable = 'true';

  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
  item.addEventListener('contextmenu', removeTodo);
  

  list.appendChild(item);
  lists[listId].push(todo);
  // saveList(listId); ->이동
};


//새로운 할일 객체를 만들어주는 역할의 함수
const createTodo = (event) => {
  event.preventDefault();

  const input = document.querySelector('input');
  const id = uuidv4();

  //UUID : 범용고유식별자 https://www.uuidgenerator.net/
  //uuid cdn 구글검색 : https://cdnjs.com/libraries/uuid

  const newTodo = {
    id,
    text: input.value,
  };

  // console.log(newTodo);
  createElement('todo', newTodo);
  input.value = '';
  saveList('todo');
}

const loadList = () => {
  const userTodoList = JSON.parse(localStorage.getItem('todo'));
  const userDoingList = JSON.parse(localStorage.getItem('doing'));
  const userDoneList = JSON.parse(localStorage.getItem('done'));

  if (userTodoList) {
    userTodoList.forEach((todo) => {
      createElement('todo', todo);
    });
  }

  if (userDoingList) {
    userDoingList.forEach((todo) => {
      createElement('doing', todo);
    });
  }

  if (userDoneList) {
    userDoneList.forEach((todo) => {
      createElement('done', todo);
    });
  }

};

loadList();
form.addEventListener('submit', createTodo);
blocks.forEach((block) => {
  block.addEventListener('dragover', dragOver);
});
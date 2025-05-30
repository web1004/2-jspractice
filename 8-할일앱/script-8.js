//08-전체목록개수,삭제버튼이미지,전체삭제

const form =document.querySelector('form');
const input =document.querySelector('input');
const ul = document.querySelector('ul');
const todoCount = document.querySelector('.todo-count'); //추가
const clearAll = document.querySelector('.clear-all'); //추가

let todos = []; 

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

//(2)todos 총개수 구하기
const updateTodoCount = () => {
  todoCount.textContent = todos.length;
};

const delItem = (event) => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id !== parseInt(target.id)); 
  
  save();  
  target.remove();
  updateTodoCount(); //함수호출
};

//(1)삭제버튼-아이콘폰트이미지로 수정
const addItem = (todo) => {  
  if(todo !== ''){  
    const li = document.createElement('li'); 
    //const button = document.createElement('button'); 
    const span =document.createElement('span');
    const icon = document.createElement('i');

    icon.classList.add('fa-solid','fa-trash-can');
    span.innerText = todo.text;  
    //button.innerText = '삭제';
    //button.addEventListener('click',delItem); 
    icon.addEventListener('click',delItem); 

    ul.appendChild(li); 
    li.appendChild(span);
    //li.appendChild(button);  
    li.appendChild(icon);
    li.id = todo.id; 

    updateTodoCount(); //함수호출
  };
};

const handler = (event) => {
  event.preventDefault();
  
  const todo = {
    id: Date.now(), 
    text: input.value,
  };

  todos.push(todo);
  addItem(todo);  
  save();
  input.value = '';
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem('todos'));

  if(userTodos){
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  };
};

//(3)전체삭제하기
clearAll.addEventListener('click', () => {
  ul.innerHTML = ''; //목록비우기
  todoCount.textContent = 0; //개수초기화
  todos = []; //배열비우기
  localStorage.removeItem('todos'); //로컬스토리 데이터 삭제
});

init();
form.addEventListener('submit',handler);
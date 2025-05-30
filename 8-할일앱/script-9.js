//09-최종오류수정,소스정리

const form =document.querySelector('form');
const input =document.querySelector('input');
const ul = document.querySelector('ul');
const todoCount = document.querySelector('.todo-count');
const clearAll = document.querySelector('.clear-all'); 

let todos = []; 

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const updateTodoCount = () => {
  todoCount.textContent = todos.length;
};

const delItem = (event) => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id !== parseInt(target.id)); 
  
  save();  
  target.remove();
  updateTodoCount(); 
};

//(2)중복된 검증 삭제
const addItem = (todo) => {  
  // if(todo !== ''){  
    const li = document.createElement('li'); 
    const span =document.createElement('span');
    const icon = document.createElement('i');

    icon.classList.add('fa-solid','fa-trash-can');
    span.innerText = todo.text;  
    icon.addEventListener('click',delItem); 

    ul.appendChild(li); 
    li.appendChild(span);
    li.appendChild(icon);
    li.id = todo.id; 

    updateTodoCount(); 
  //};
};

const handler = (event) => {
  event.preventDefault();
  
  const todo = {
    id: Date.now(), 
    text: input.value,
  };

  //(1)이미 이벤트헨들러에서 공백이 아닌것들만  addItem()함수를 실행하고 있기 때문에 중복으로 검증할 필요없음
  if((input.value) !== '') {  
    todos.push(todo);
    addItem(todo);  
    save();
    input.value = '';
  };
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem('todos'));

  if(userTodos){
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;

    updateTodoCount();  //추가
  };
};

/* clearAll.addEventListener('click', () => {
  ul.innerHTML = ''; 
  todoCount.textContent = 0; 
  todos = []; 
  localStorage.removeItem('todos'); 
}); */
const clearItems = () => {
  ul.innerHTML = ''; 
  todoCount.textContent = 0; 
  todos = []; 
  localStorage.removeItem('todos'); 
  updateTodoCount();
};

init();
form.addEventListener('submit',handler);
clearAll.addEventListener('click',clearItems);
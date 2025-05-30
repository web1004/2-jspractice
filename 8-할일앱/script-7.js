//07-새로고침을 할때 로컬스토리지에 저장된 기존의 정보가 있다면 해당 정보를 알아서 화면에 그림(렌더링)

const form =document.querySelector('form');
const input =document.querySelector('input');
const ul = document.querySelector('ul');

let todos = []; 

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const delItem = (event) => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id !== parseInt(target.id)); 
  
  save();  
  target.remove();
};

const addItem = (todo) => {  
  if(todo !== ''){  
    const li = document.createElement('li'); 
    const button = document.createElement('button'); 
    const span =document.createElement('span');
    span.innerText = todo.text;  
    button.innerText = '삭제';
    button.addEventListener('click',delItem);  

    ul.appendChild(li); 
    li.appendChild(span);
    li.appendChild(button);  
    li.id = todo.id; 
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

//로컬스트로지에 있는 내용을 화면에 뿌려줌
const init = () => {
  //const userTodos = localStorage.getItem('todos'); -> 배열,객체형태로 볼수 없음 
  const userTodos = JSON.parse(localStorage.getItem('todos'));
  //console.log(userTodos);

/*   userTodos.forEach((todo) => {
    addItem(todo);
  });
  todos = userTodos; 
  문제:기존의 데이터가 있는 경우는 잘  되지만, 만약에 로컬스토리지를 삭제하고 새로고침을 누른후에 실행하면 에러가 남
  */

  //로컬스토리지에 데이터가 있는 경우만 실행
  if(userTodos){
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }

};

init();
form.addEventListener('submit',handler);
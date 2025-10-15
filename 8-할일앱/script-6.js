//06-화면에서 요소가 지워지면 todos 배열도 업데이트가 이루어져서 다시 save가 되게함
//삭제할 아이템이 정확하게 구분하려면 아이디를 식별할수 있는 값이 필요함

const form =document.querySelector('form');
const input =document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];  //(3)const 데이터 변경불가->let으로 변경

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

/*(2)삭제하려는 id값을 정확하게 알고 있으므로 첫번째로 todos배열에서 해당하는 id값을 가진 요소를 찾아서 삭제하고 그 요소가 삭제된 새로운 배열을 다시 저장하게끔 만들어준다.*/
const delItem = (event) => {
  const target = event.target.parentElement;

  /* todos = todos.filter((todo) => {
    console.log(todo.id, target.id);
  }); 
  문제:todo.id는 숫자로 되어 있는데, target.id는 문자로 되어 있어서 타입이 다르기 때문에 비교가 안됨
  */ 

  //각각 요소를 가져와서 todo의 id가 지금 삭제하려는 teaget 의 id값이 같지 않은 경우만 필터링해서 다시 todos에 저장
  todos = todos.filter((todo) => todo.id !== parseInt(target.id));  //타겟의 아이디를 숫자로

  save(); //필터링된 데이터를 다시 저장하기위해 함수호출
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
    li.id = todo.id; //(1)생성한 리스트의 id값을 todo가 가지고 있는 id값으로 지정  
  };
};

const handler = (event) => {
  event.preventDefault(); 

  const todo = {
    id: Date.now(), //id값을 미리 생성해서 저장하고 있음
    text: input.value,
  };

  todos.push(todo); 
  addItem(todo);
  save();
  input.value = '';
};

form.addEventListener('submit', handler);
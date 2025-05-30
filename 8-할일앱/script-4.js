//04-삭제버튼에 이벤트를 처리

const form =document.querySelector('form');
const input =document.querySelector('input');
const ul = document.querySelector('ul');

//삭제함수
const delItem = (event) => {
  //console.log('삭제!!!!!!!');
  //console.log(event);
  //console.log(event.target);
  //console.log(event.target.parentElement);

  const target = event.target.parentElement;
  target.remove();
};

const addItem = (text) => {
  if(text !== ''){
    const li = document.createElement('li'); 
    const button = document.createElement('button'); 
    const span =document.createElement('span');
    span.innerText = text;
    button.innerText = '삭제';
    button.addEventListener('click',delItem);  //추가

    ul.appendChild(li); 
    li.appendChild(span);
    li.appendChild(button);    
  };
};

const handler = (event) => {
  event.preventDefault(); 
  addItem(input.value);
  input.value = '';
};

form.addEventListener('submit',handler);
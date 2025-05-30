//03-삭제버튼 추가

const form =document.querySelector('form');
const input =document.querySelector('input');
const ul = document.querySelector('ul');

const addItem = (text) => {
  if(text !== ''){
    const li = document.createElement('li'); 
    const button = document.createElement('button'); //추가
    const span =document.createElement('span'); //추가

    //li.innerText = input.value; 
    span.innerText = text;
    button.innerText = '삭제';

    //<li><span>..</span><button>...</button></li>
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
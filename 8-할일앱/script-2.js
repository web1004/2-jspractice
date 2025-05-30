//02-함수들을 분리

const form =document.querySelector('form');
const input =document.querySelector('input');
const ul = document.querySelector('ul');

const addItem = (text) => {
  if(text !== ''){
    const li = document.createElement('li'); 
    li.innerText = input.value; 
    ul.appendChild(li);  
  };
};

const handler = (event) => {
  event.preventDefault(); 
  addItem(input.value);
  input.value = '';
};

form.addEventListener('submit',handler);

/*아래 내용을 동작에 따라 2개의 함수로 분리  
form.addEventListener('submit', (event) => {
  event.preventDefault();  
  if(input.value !== ''){
    const li = document.createElement('li'); 
    li.innerText = input.value; 
    ul.appendChild(li);  
    input.value = '';
  };
}); */
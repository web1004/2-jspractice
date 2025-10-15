//최종소스

let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before'); 
let removeTargetBtn = document.querySelector('#target-remove');
let removeAllTargetBtn = document.querySelector('#target-all-remove');  
let removeBtn = document.querySelector('.remove-btn');
let inputBox =document.querySelector('input');

addBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');  
  button.textContent = 'X'; 
  button.classList.add('remove-btn');

  button.addEventListener('click',removeParentNode);  

  ul.appendChild(li);
  li.appendChild(button);
  li.classList.add('item');
  inputBox.value = '';
  inputBox.focus();
});

addBeforeBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');
  li.textContent = inputBox.value; 
  
  let button = document.createElement('button');  
  button.textContent = 'X'; 
  button.classList.add('remove-btn');

  button.addEventListener('click',removeParentNode); 
  
  ul.insertBefore(li, targetLi);
  li.appendChild(button);
  li.classList.add('item'); 
  inputBox.value = ''; 
  inputBox.focus(); 
});

removeTargetBtn.addEventListener('click', function(){
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});

function removeParentNode(event){
  event.target.parentNode.remove();
  inputBox.value = '';
  inputBox.focus();
};

removeAllTargetBtn.addEventListener('click', function(){
  const itemList = document.querySelectorAll('.item');
  itemList.forEach(item => item.remove());
});

removeBtn.addEventListener('click',removeParentNode)
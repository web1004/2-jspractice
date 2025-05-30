//07-앞에 추가할때도 뒤에 추가하는것과 동일하게 X버튼과 클래스 추가하기

let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let removeTargetBtn = document.querySelector('#target-remove');
let inputBox =document.querySelector('input');

addBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent =inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  button.classList.add('remove-btn');

  button.addEventListener('click',removeParentNode);

  ul.appendChild(li);
  li.appendChild(button);
  inputBox.value = '';
  inputBox.focus();
});

addBeforeBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');
  li.textContent =inputBox.value;

  //앞에 추가할때도 뒤에 추가하는것과 동일하게 X버튼과 클래스 추가
  let button = document.createElement('button');
  button.textContent = 'X';
  button.classList.add('remove-btn');

  button.addEventListener('click',removeParentNode); //뒤에추가버튼 내용에서 복사

  ul.insertBefore(li,targetLi);
  li.appendChild(button); //뒤에추가버튼 내용에서 복사
  inputBox.value = ''; //뒤에추가버튼 내용에서 복사
  inputBox.focus(); //뒤에추가버튼 내용에서 복사
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
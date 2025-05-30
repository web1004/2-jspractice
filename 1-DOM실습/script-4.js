//04-타깃제거 버튼을 클릭했을때 처음에 있는 스쿼트 삭제하기

let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let removeTargetBtn = document.querySelector('#target-remove');
let inputBox =document.querySelector('input');

addBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');

  ul.appendChild(li);
  li.textContent =inputBox.value;
});

addBeforeBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');
  console.log(targetLi);

  li.textContent =inputBox.value;
  ul.insertBefore(li,targetLi);
});

removeTargetBtn.addEventListener('click', function(){
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});
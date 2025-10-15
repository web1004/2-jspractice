//3.앞에 추가 버튼을 클릭했을때 앞에 추가하기

let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');  //추가
let inputBox =document.querySelector('input');

addBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');

  ul.appendChild(li);
  li.textContent = inputBox.value; 
});

addBeforeBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');  //추가

  //ul.appendChild(li); ->뒤에추가라서 삭제
  li.textContent = inputBox.value; 
  //insertBefore(추가할태그, 어디앞에 추가할지);
  ul.insertBefore(li, targetLi);
});
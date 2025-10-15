//2."뒤에추가" 버튼을 클릭했을때 input태그에 있는 내용을 가져와서 추가하기

let addBtn = document.getElementById('button');
let inputBox =document.querySelector('input');

addBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');

  ul.appendChild(li);
  li.textContent = inputBox.value;  //value ->input 태그에 있는 내용을 가져옴
});


/* 위 이벤트로 이동함 
let li = document.createElement('li');
let ul = document.querySelector('ul');

li.textContent = '달리기';
ul.appendChild(li); */
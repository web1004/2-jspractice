//02-추가 버튼을 클릭했을때 input태그에 있는 내용을 가져와서 추가하기

let addBtn = document.getElementById('button');
let inputBox =document.querySelector('input');

addBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');

  ul.appendChild(li);
  li.textContent =inputBox.value; //value ->input 태그에 있는 내용을 가져옴
});


/* 위 이벤트 안으로 이동
let li = document.createElement('li');
let ul = document.querySelector('ul');

ul.appendChild(li);
li.textContent = '데드리프트'; */
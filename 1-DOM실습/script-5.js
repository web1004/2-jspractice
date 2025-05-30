//05-각 목록에 X버튼을 넣어서 클릭했을때 해당 아이템이 지워짐

let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let removeTargetBtn = document.querySelector('#target-remove');
let inputBox =document.querySelector('input');

addBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent =inputBox.value;

  //추가할때마다 X버튼과 클래스 추가하기.....
  let button = document.createElement('button');
  button.textContent = 'X';
  // button.setAttribute('class', 'remove-btn');
  button.classList.add('remove-btn');

  //뒤에 버튼 추가할때 삭제하는 이벤트 추가.....
  button.addEventListener('click', function(event){
    //console.log(event.target);
    //console.log(event.target.parentNode);
    event.target.parentNode.remove();
  });

  ul.appendChild(li);
  li.appendChild(button);
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
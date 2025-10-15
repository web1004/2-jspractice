//8.전체삭제버튼 추가해서 전체 지우기(최종소스정리)

let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before'); 
let removeTargetBtn = document.querySelector('#target-remove');
let removeAllTargetBtn = document.querySelector('#target-all-remove');  //추가 
let removeBtn = document.querySelector('.remove-btn'); //추가
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
  li.classList.add('item'); //(1)클래스 추가
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
  li.classList.add('item'); //(1)클래스 추가
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

//(2)전체 지우기
removeAllTargetBtn.addEventListener('click', function(){
  //alert('전체삭제');
  const itemList = document.querySelectorAll('.item');

  //해당요소.forEach((파라미터) => {}); -> 변수가 한개이고, 문장이 한줄이면 (),{}를 생략가능
  itemList.forEach(item => item.remove());
});

//(3)처음부터 만들어져있던 스쿼트에도 삭제추가
removeBtn.addEventListener('click',removeParentNode)
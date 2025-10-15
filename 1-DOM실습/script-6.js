//6.input에 입력하고 추가버튼을 클릭하면 입력된 내용 지우고 커서 위치하게 함(중복된 소스정리)

let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before'); 
let removeTargetBtn = document.querySelector('#target-remove'); 
let inputBox =document.querySelector('input');

addBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');  
  button.textContent = 'X'; 
  button.classList.add('remove-btn');

/* (2)중복된 소스 함수로 교체 
  button.addEventListener('click', function(event){
    event.target.parentNode.remove();
  }); */
  button.addEventListener('click',removeParentNode);  //클릭시 함수호출

  ul.appendChild(li);
  li.appendChild(button);

  //(1)추가버튼 클릭시 input내용 자동으로 지우고 커서가 위치하게 함
  inputBox.value = '';
  inputBox.focus();
});

addBeforeBtn.addEventListener('click', function(){
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target'); 

  li.textContent = inputBox.value; 
  ul.insertBefore(li, targetLi);
});

removeTargetBtn.addEventListener('click', function(){
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});

//(3)중복된 소스 함수만들기
function removeParentNode(event){
  event.target.parentNode.remove();
  inputBox.value = '';
  inputBox.focus();
};
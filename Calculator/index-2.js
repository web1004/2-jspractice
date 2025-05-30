/* 02-모든 버튼에 이벤트 등록 */

const $numberButtons = document.querySelectorAll('[data-number]');
const $operationButtons = document.querySelectorAll('[data-operation]');
const $allClearButton = document.querySelector('[data-all-clear]');
const $deleteButton = document.querySelector('[data-delete]');
const $equalsButton = document.querySelector('[data-equals]');
const $previousDisplay = document.querySelector('[data-previous-operand]');
const $currentDisplay = document.querySelector('[data-current-operand]');

/* $numberButtons 배열은 현재 버튼을 가지고 있는 NodeList 배열이고, forEach는 각각의 버튼을  하나씩 콜백함수에 파라미러오 넘겨줌, 각각의 버튼에 이벤트를 추가하고 실행함 */
$numberButtons.forEach((button) => {
  //console.log(button); 
  button.addEventListener('click', (e) => {
    console.log(e.target.textContent);
  });
});

$operationButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.textContent);
  });
});

$allClearButton.addEventListener('click', () => {
  alert('allClearButton~')
});

$deleteButton.addEventListener('click', () => {
  alert('deleteButton~')
});

$equalsButton.addEventListener('click', () => {
  alert('equals~')
});
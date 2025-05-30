/* 01-html요소 불러오기, 버튼한개 이벤트 등록해보기 */

const $numberButtons = document.querySelectorAll('[data-number]');
const $operationButtons = document.querySelectorAll('[data-operation]');
const $allClearButton = document.querySelector('[data-all-clear]');
const $deleteButton = document.querySelector('[data-delete]');
const $equalsButton = document.querySelector('[data-equals]');
const $previousDisplay = document.querySelector('[data-previous-operand]');
const $currentDisplay = document.querySelector('[data-current-operand]');

console.log($numberButtons);

// $equalsButton.addEventListener('click', function () {
//   alert('equals~')
// });

$equalsButton.addEventListener('click', () => {
  alert('equals~')
});
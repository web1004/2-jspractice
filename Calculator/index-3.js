/* 03-숫자버튼을 클릭하면 화면에 출력하기 */

const $numberButtons = document.querySelectorAll('[data-number]');
const $operationButtons = document.querySelectorAll('[data-operation]');
const $allClearButton = document.querySelector('[data-all-clear]');
const $deleteButton = document.querySelector('[data-delete]');
const $equalsButton = document.querySelector('[data-equals]');
const $previousDisplay = document.querySelector('[data-previous-operand]');
const $currentDisplay = document.querySelector('[data-current-operand]');

let currentNumberStr = ''; //(2)전역변수,해당영역에 넣어줄 값을 담는 변수

//(6)1000단위로 ,표시하기 함수생성
function updateDisplay(){
  let floatNumber = parseFloat(currentNumberStr);
  // let displayNumber = floatNumber.toLocaleString(); ->소수점자리가 3자리까지만 나옴
  let displayNumber = floatNumber.toLocaleString('en',{
    maximumSignificantDigits: 10,
  });
  $currentDisplay.textContent = displayNumber;
};

$numberButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    /* $currentDisplay.textContent = e.target.textContent; */ //(1) 

    //(3)변수에 담았다가 할당->계속 같은 자리에 출력됨
    let numberStr = e.target.textContent;
    // currentNumberStr = numberStr;
    // $currentDisplay.textContent = currentNumberStr; 
    
    //(5).은 한번만 입력되게 함
    if(numberStr === '.' && currentNumberStr.includes('.')){
      return;  //동작을 수행하지 않고 리턴
    }
    
    //(4)이어서 출력됨
    currentNumberStr = currentNumberStr + numberStr;
    // $currentDisplay.textContent = currentNumberStr; (6)으로 포함

    updateDisplay(); //(6)
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
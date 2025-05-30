/* 04-숫자를 클립한 후 연산자를 클릭하면 위쪽으로 나오게 함  */

const $numberButtons = document.querySelectorAll('[data-number]');
const $operationButtons = document.querySelectorAll('[data-operation]');
const $allClearButton = document.querySelector('[data-all-clear]');
const $deleteButton = document.querySelector('[data-delete]');
const $equalsButton = document.querySelector('[data-equals]');
const $previousDisplay = document.querySelector('[data-previous-operand]');
const $currentDisplay = document.querySelector('[data-current-operand]');

let currentNumberStr = ''; 
let previousNumberStr = '';  //(1)previous 영역에 표시할 값을 담는 변수
let operation = null;  //(1)연산자를 담고 있는 변수


function updateDisplay(){
  let floatNumber = parseFloat(currentNumberStr);
  let displayNumber = floatNumber.toLocaleString('en',{
    maximumSignificantDigits: 10,
  });

  $currentDisplay.textContent = displayNumber;
  
  $previousDisplay.textContent = previousNumberStr; //(4) 위로 올라가면 콤마가 표시되지 않음(반복되는 소스 함수로 만들기)


};

$numberButtons.forEach((button) => {
  button.addEventListener('click', (e) => {

    let numberStr = e.target.textContent;    
    if(numberStr === '.' && currentNumberStr.includes('.')){
      return;  
    }    
    currentNumberStr = currentNumberStr + numberStr;

    updateDisplay(); 
  });   
});

$operationButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    previousNumberStr = currentNumberStr; //(2)

    //(3)
    updateDisplay();
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
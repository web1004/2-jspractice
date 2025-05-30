/* 04-숫자를 클립한 후 연산자를 클릭하면 위쪽으로 나오게 함  */

const $numberButtons = document.querySelectorAll('[data-number]');
const $operationButtons = document.querySelectorAll('[data-operation]');
const $allClearButton = document.querySelector('[data-all-clear]');
const $deleteButton = document.querySelector('[data-delete]');
const $equalsButton = document.querySelector('[data-equals]');
const $previousDisplay = document.querySelector('[data-previous-operand]');
const $currentDisplay = document.querySelector('[data-current-operand]');

let currentNumberStr = ''; 
let previousNumberStr = '';  
let operation = null;  

function getDisplayNumber(numberStr){
  let floatNumber = parseFloat(numberStr);
  //04 NaN이면 아무것도 하지 말고 끝내기
  if(isNaN(floatNumber)){
    return;
  }
  let displayNumber = floatNumber.toLocaleString('en',{
    maximumSignificantDigits: 10,
  });
  return displayNumber;
};

function updateDisplay(){

  $currentDisplay.textContent = getDisplayNumber(currentNumberStr);
  //02
  if(operation){
    $previousDisplay.textContent = getDisplayNumber(previousNumberStr) + ' ' + operation; //05위에 연산기호가 뜨게 함
  }
  //위로 $previousDisplay.textContent = getDisplayNumber(previousNumberStr);

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
    previousNumberStr = currentNumberStr;
    currentNumberStr = ''; //03 아래 부분은 지워지게->확인해보면 이번에 아래 부분이 NaN이 나옴
    operation = e.target.textContent; //01

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
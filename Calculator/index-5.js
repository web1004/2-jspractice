/* 05-계산하기  */

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

  //03
  if(operation){
    $previousDisplay.textContent = getDisplayNumber(previousNumberStr) + ' ' + operation;
  }else{
    $previousDisplay.textContent = '';
  }

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
    currentNumberStr = '';
    operation = e.target.textContent;  

    updateDisplay();
  });
});

//02
function compute() {
  let prev = parseFloat(previousNumberStr);
  let curr = parseFloat(currentNumberStr);
  //둘중에 하나라도 값이 아니면 리턴
  if (isNaN(prev) || isNaN(curr)) {
    return;
  }

  let result = null;
  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '×':
      result = prev * curr;
      break;
    case '÷':
      result = prev / curr;
      break;
  }

  currentNumberStr = result;
  operation = null;  //연산이 끝난후 초기화
  previousNumberStr = '';
}

$equalsButton.addEventListener('click', () => {
  // alert('equals~')
  compute(); //01
  updateDisplay();
});

$allClearButton.addEventListener('click', () => {
  alert('allClearButton~')
});

$deleteButton.addEventListener('click', () => {
  alert('deleteButton~')
});


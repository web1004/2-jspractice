/* 08-연산자를 먼저 입력하면 undefined->예외처리  */

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
    //01currentNumberStr 에 값이 없다면 리턴
    if(!currentNumberStr){
      return;
    }
    //02 여기까지 왔다는건 currentNumberStr 가 있는것이기 때문에 2개의 값이 있으면 계산을 수행
    if(previousNumberStr){
      compute();
    }

    previousNumberStr = currentNumberStr; 
    currentNumberStr = '';
    operation = e.target.textContent;  

    updateDisplay();
  });
});

function compute() {
  let prev = parseFloat(previousNumberStr);
  let curr = parseFloat(currentNumberStr);

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
  operation = null;  
  previousNumberStr = '';

}

$equalsButton.addEventListener('click', () => {
  compute(); 
  updateDisplay();
});

function clear() {
  currentNumberStr = '';
  previousNumberStr = '';
  operation = null;
};
$allClearButton.addEventListener('click', () => {
  clear();
  updateDisplay();
});


function deleteDisplayNumber() {
  currentNumberStr = currentNumberStr.slice(0, -1);
};
$deleteButton.addEventListener('click', () => {
  deleteDisplayNumber();
  updateDisplay(); 
});


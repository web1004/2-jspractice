/* 07-Delete 구현  */

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

//02
function deleteDisplayNumber() {
  //console.log(currentNumberStr.slice(0, -1));  //02-1끝에 있는 문자열 하나 추출
  currentNumberStr = currentNumberStr.slice(0, -1); //03
};
$deleteButton.addEventListener('click', () => {
  // alert('deleteButton~')
  deleteDisplayNumber(); //01
  updateDisplay(); //02-1에서 주석걸고 확인
});


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

//01 , 표시하기 함수
function getDisplayNumber(numberStr){
  let floatNumber = parseFloat(numberStr);
  let displayNumber = floatNumber.toLocaleString('en',{
    maximumSignificantDigits: 10,
  });
  return displayNumber;
};

function updateDisplay(){
  /* let floatNumber = parseFloat(currentNumberStr);
  let displayNumber = floatNumber.toLocaleString('en',{
    maximumSignificantDigits: 10,
  }); */

  // 02 아래거로 수정 $currentDisplay.textContent = displayNumber;
  $currentDisplay.textContent = getDisplayNumber(currentNumberStr);
  // 02 아래거로 수정 $previousDisplay.textContent = previousNumberStr; 
  $previousDisplay.textContent = getDisplayNumber(previousNumberStr);

};

//2번까지 하고 나서 확인하면 숫자를 입력할때 위쪽에 NaN이 나옴(일단 ,가 위에 잘 표시되는지부터 확인)

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
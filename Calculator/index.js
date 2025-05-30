//01. 숫자를 클릭하면 화면에 숫자 표시하기
//02. 숫자를 클릭하고 연산자를 클릭하면 화면부분 변경하기





const $numberButtons = document.querySelectorAll('[data-number]');
const $operationButtons = document.querySelectorAll('[data-operation]');
const $allClearButton = document.querySelector('[data-all-clear]');
const $deleteButton = document.querySelector('[data-delete]');
const $equalsButton = document.querySelector('[data-equals]');
const $previousDisplay = document.querySelector('[data-previous-operand]');
const $currentDisplay = document.querySelector('[data-current-operand]');

let currentNumberStr = ''; //전역변수,해당영역에 넣어줄 값을 담는 변수
let previousNumberStr = '';  //previous 영역에 표시할 값을 담는 변수
let operation = null;  //연산자를 담고 있는 변수

//, 표시하기 함수
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



//화면에 표시하는 함수 만들기
function updateDisplay(){
  /* let floatNumber = parseFloat(currentNumberStr);
    let displayNumber = floatNumber.toLocaleString('en',{
      maximumSignificantDigits: 10,
    }); */
    // $currentDisplay.textContent = currentNumberStr;
    // $currentDisplay.textContent = displayNumber;
    // $previousDisplay.textContent = previousNumberStr;


    $currentDisplay.textContent = getDisplayNumber(currentNumberStr);
    // $previousDisplay.textContent = getDisplayNumber(previousNumberStr);

    if(operation){
      $previousDisplay.textContent = getDisplayNumber(previousNumberStr) + '' + operation;
    }else{
      $previousDisplay.textContent = '';
    }
    //이 상태에서 확인하면  previous 영역에는 , 가 표시되지 않음
}

// console.log($numberButtons);
$numberButtons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e.target.textContent);
    // $currentDisplay.textContent = e.target.textContent;
    let numberStr = e.target.textContent;
    
    //.은 한번만 입력되게 함
    if(numberStr === '.' && currentNumberStr.includes('.')){
      return;
    }
    currentNumberStr = currentNumberStr + numberStr;

    //1000단위로 ,표시하기
    //많이 사용하는 부분이므로 함수로 만들기
    updateDisplay();

    /* let floatNumber = parseFloat(currentNumberStr);
    let displayNumber = floatNumber.toLocaleString('en',{
      maximumSignificantDigits: 10,
    });
    // $currentDisplay.textContent = currentNumberStr;
    $currentDisplay.textContent = displayNumber; */
  });
});
/* numberButtons  숫자버튼을 가지고 있는 배열이고, foreach함수는 각각의 버튼을 하나씩 콜백함수에 파라미터로 넘겨줌*/

//02
$operationButtons.forEach((button) => {
  button.addEventListener('click', function (e) {
    // console.log(e.target.textContent);
    if(!currentNumberStr){
      return;
    }
    if(previousNumberStr){
      compute();
    }
    previousNumberStr = currentNumberStr;
    currentNumberStr = '';
    operation = e.target.textContent;

    //표시하기
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

$equalsButton.addEventListener('click', function () {
  // alert('equals~')
  compute();
  updateDisplay();
});

function clear() {
  currentNumberStr = '';
  previousNumberStr = '';
  operation = null;
}
$allClearButton.addEventListener('click', function () {
  // alert('allClearButton~')
  clear();
  updateDisplay();
});

function deleteDisplayNumber() {
  // console.log(currentNumberStr.slice(0, -1));
  currentNumberStr = currentNumberStr.slice(0, -1);
}
$deleteButton.addEventListener('click', function () {
  // alert('deleteButton~')
  deleteDisplayNumber();
  updateDisplay();
});


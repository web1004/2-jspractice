//(3)입력박스(tabpanel)들에 입력한 내용이 있는지 없는지 식별하는 함수 만들기

const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const submitButton = document.querySelector('#submit');
const tabTargets = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.tabpanel');
const isEmpty = (str) => !str.trim().length;  
let currentStep = 0; 

nextButton.addEventListener('click', () => {
  tabTargets[currentStep].classList.remove('active');
  tabPanels[currentStep].classList.add('hidden');

  tabTargets[currentStep+1].classList.add('active');
  tabPanels[currentStep+1].classList.remove('hidden');
  currentStep++;

  validateEntry(); //(3-3)입력상태에 따라서 이전다음버튼 비활성화(업데이트)
  updateStatusDisplay(); 
});

function updateStatusDisplay(){
  if(currentStep === tabTargets.length-1){ 
    nextButton.classList.add('hidden'); 
    prevButton.classList.remove('hidden');  
    submitButton.classList.remove('hidden');
  }else if(currentStep === 0){ 
    nextButton.classList.remove('hidden');
    prevButton.classList.add('hidden');
    submitButton.classList.add('hidden');
  }else{
    nextButton.classList.remove('hidden');
    prevButton.classList.remove('hidden');
    submitButton.classList.add('hidden');
  };
};

//(3-1)
//입력목록의 유효성검사 함수(패널들에 입력이 되었는지 안되었는지 확인)
//입력을 해야히지만 이전다음버튼 나오게 함
function validateEntry(){
  //각 단계별로 패널안의 내용(첫 단계 input) 
  let input = tabPanels[currentStep].querySelector('.form-input'); //urrentStep(0)현재단계
  nextButton.setAttribute('disabled', true);  //첫단계에서는 다음버튼 비활성화
  submit.setAttribute('disabled', true); //첫단계에서는 전송버튼도 비활성화

  //입력을 하면 활성화되어야 함(현재 input을 넣어줘서 내용이 있는지 검사를 해서 알려주는 역할함수) 
  setButtonPermissions(input);

  input.addEventListener('input',()=>setButtonPermissions(input)); //input에 입력을 하고 있을때(사용자가 입력한 내용을 실시간으로 넘김)
  input.addEventListener('blur',()=>setButtonPermissions(input));  //input 밖을 클릭(포커스가 풀리면)을 할때도(입력이 끝나면,입력을 안하고 넘어갈수도 있음)
};

//(3-2)입력한 내용이 있는지없는지 판별함수 
function setButtonPermissions(input){
  if(isEmpty(input.value)){  //입력한 내용이 없다면
    nextButton.setAttribute('disabled', true); //다음버튼 비활성화
    submitButton.setAttribute('disabled', true);  //전송버튼 비활성화
  }else{
    nextButton.removeAttribute('disabled');  //비활성화 속성삭제
    submitButton.removeAttribute('disabled');
  };
};

//(3-4)로드하자마자 버튼 업데이트(새로고침했을땐 아무것도 입력안했으므로 버튼들을 비활성화해야 함)
validateEntry();
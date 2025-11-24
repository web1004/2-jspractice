//(2)다음 버튼을 누를때 아래 버튼 변경

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
  updateStatusDisplay(); //입력단계 업데이트 함수 호출
});

//입력단계 업데이트 함수
//클래스 hidden을 추가해서 안보이게 하고, hidden을 삭제해서 보이게 함
function updateStatusDisplay(){
  if(currentStep === tabTargets.length-1){  //마지막 단계일때
    nextButton.classList.add('hidden'); 
    prevButton.classList.remove('hidden');
    submitButton.classList.remove('hidden');
  }else if(currentStep === 0){ //첫단계일때
    nextButton.classList.remove('hidden');
    prevButton.classList.add('hidden');
    submitButton.classList.add('hidden');
  }else{ //중간단계일때
    nextButton.classList.remove('hidden');
    prevButton.classList.remove('hidden');
    submitButton.classList.add('hidden');
  };
};
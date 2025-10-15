//(4)이전버튼도 만들기

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

  validateEntry(); 
  updateStatusDisplay(); 
});

//이전버튼추가
prevButton.addEventListener('click', () => {
  tabTargets[currentStep].classList.remove('active');
  tabPanels[currentStep].classList.add('hidden');

  tabTargets[currentStep-1].classList.add('active');
  tabPanels[currentStep-1].classList.remove('hidden');
  currentStep--;

  nextButton.removeAttribute('disabled');  //추가(이미 입력을 하고 뒤로 넘어가는 상태임)

  validateEntry(); 
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

function validateEntry(){
  let input = tabPanels[currentStep].querySelector('.form-input'); 
  nextButton.setAttribute('disabled', true);  
  submit.setAttribute('disabled', true); 

  setButtonPermissions(input);

  input.addEventListener('input',()=>setButtonPermissions(input)); 
  input.addEventListener('blur',()=>setButtonPermissions(input)); 
};

function setButtonPermissions(input){
  if(isEmpty(input.value)){  
    nextButton.setAttribute('disabled', true); 
    submitButton.setAttribute('disabled', true);  
  }else{
    nextButton.removeAttribute('disabled');  
    submitButton.removeAttribute('disabled');
  };
};

validateEntry(); //열자마자 실행함
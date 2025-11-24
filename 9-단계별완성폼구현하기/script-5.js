//(5)전송버튼 클릭했을때 메시지창 띄우기

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

//이전버튼 추가
prevButton.addEventListener('click', () => {
  tabTargets[currentStep].classList.remove('active');
  tabPanels[currentStep].classList.add('hidden');

  tabTargets[currentStep-1].classList.add('active'); 
  tabPanels[currentStep-1].classList.remove('hidden'); 
  currentStep--; 
  
  nextButton.removeAttribute('disabled'); 

  validateEntry(); 
  updateStatusDisplay(); 
});

//추가
submitButton.addEventListener('click', () => {
  alert('응답해주셔서 감사합니다!!');
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

validateEntry();
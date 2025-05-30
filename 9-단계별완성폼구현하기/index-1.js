//(1)다음 버튼을 누를때 단계번호 이동

//(1-1)변수지정
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const submitButton = document.querySelector('#submit');
const tabTargets = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.tabpanel');
const isEmpty = (str) => !str.trim().length;  //!(length가없다면) 입력한 글자수 확인 ,trim()-앞뒤공백제거
let currentStep = 0; //단계를 표시할 변수저장(열자마자는 0단계)

//(1-2)단계수정-단계2로변경,1번째 안보이도록 hidden, 2번째 보이도록 hidden제거
nextButton.addEventListener('click', () => {
  tabTargets[currentStep].classList.remove('active');
  tabPanels[currentStep].classList.add('hidden');

  tabTargets[currentStep+1].classList.add('active');
  tabPanels[currentStep+1].classList.remove('hidden');

  //다음으로 넘어가려면 현재 urrentStep 증가
  currentStep++;
  console.log(currentStep);
});
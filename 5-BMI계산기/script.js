//01.폼을 작성하고 엔터를 입력했거나 아래 버튼을 클릭했을때 이벤트 처리
//02.아무것도 입력을 안한경우는 실행이 되지 않게 함

const form = document.querySelector('form');

//(3)BMI지수와 비만도출력 함수작성
const display = (bmi) => {
  const result = document.querySelector('.result');
  let group;

  if (bmi >= 30.0) {
    group = '중등도비만';
  } else if (bmi >= 25.0) {
    group = '경도비만';
  } else if (bmi >= 23.0) {
    group = '과제충';
  } else if (bmi >= 18.5) {
    group = '정상';
  } else {
    group = '저체중';
  }

  result.innerText = `${bmi} ▶ ${group}`;

};

//(2)BMI 지수계산 함수작성
const calculate = (weight, height) => {
  return (weight / (height*height)).toFixed(1);  //소수 1자리까지만 나옴
};

//(1)formHandler 함수작성
const formHandler = (event) => {
  event.preventDefault();  //폼이 제출할때마다 새로고침되는 것을 막음

  const heightInput = document.querySelector('#height');
  const weightInput = document.querySelector('#weight');

  if(heightInput.value !== '' && weightInput !== ''){ //내용이 비어있지 않다면 실행
    const weight = weightInput.value;
    const height = heightInput.value / 100;
    const bmi = calculate(weight, height);

    display(bmi);
    heightInput.value = '';
    weightInput.value = '';
  };
};

form.addEventListener('submit',formHandler);
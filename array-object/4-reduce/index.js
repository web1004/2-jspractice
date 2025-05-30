import products from '../products.js';

//(2)
let myProducts;
let selected = []; //체크한 것만 정보를 담는다.

//(6)숫자값을 받아서 우리가 원하는 모양대로 포맷한 다음에 특정요소에 출력
const updateTotal = (price) => {
  const span = document.querySelector('.total-price');

  const formatted = new Intl.NumberFormat('ko-KR', { 
    style: 'currency',
    currency: 'KRW',
  }).format(price);

  span.innerText = formatted;
};

//(5)selected 배열의 값을 계산
const calculate = () => {
  /* const reducer = (acc, current) => acc + current.price;
  const result = selected.reduce(reducer, 0);
  console.log(result);  */

  const result = selected.reduce((acc, current) => {
    return acc + current.price;
  }, 0);

  updateTotal(result);
};

//(4)
const addCart = (event) => {
  //console.log(event);
  //console.log(event.target.checked);
  //console.log(event.target.parentElement.id);

  const {checked} = event.target;
  const {id} = event.target.parentElement;
  //console.log(id,checked);

  /* 체크(true)했다면  id를 이용해서 정보를 가져와서 selected 배열에 담는다.
  비체크(false)했다면 selected 배열에서 추가했던 id를 가진 상품을 제거해준다.*/

  if (checked) {
    myProducts.forEach((product) => {
      if (product.id === parseInt(id)) {  
        selected.push(product);
      }
    });
  } else {
    selected = selected.filter((product) => {
      return product.id !== parseInt(id);
    });
  }
  //console.log(selected); 

  calculate();
};

//(3)수정
const createItem = (product) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const div = document.createElement('div');
  const check = document.createElement('input');  //추가


  const price = new Intl.NumberFormat('ko-KR', { 
    style: 'currency',
    currency: 'KRW',
  }).format(product.price);

  li.id = product.id;
  h3.className = 'name';
  h3.innerText = product.name;
  div.className = 'price';
  div.innerText = price;
  
  check.setAttribute('type', 'checkbox'); //<input type="checkbox">
  check.addEventListener('change', addCart);

  li.append(check, h3, div); //check추가
  ul.append(li);
}; 

const importData = () => {
  myProducts = products.data;  //수정

  myProducts.map((product) => {  
    if(!document.getElementById(product.id)){
      createItem(product);
    }
  });
};

importData();  //(1)바로실행
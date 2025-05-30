//import products from "../products.json" assert { type: 'json'};
import products from '../products.js';

const button = document.querySelector('button');

//console.log(products);
//console.log(products.data);




//03-화면에 그려주는 함수
const createItem = (product) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const div = document.createElement('div');

  //원표시함수
  const price = new Intl.NumberFormat('ko-KR', { //포맷팅할 언어, 옵션{}
    style: 'currency',
    currency: 'KRW',
  }).format(product.price);

  li.id = product.id;
  h3.className = 'name';
  h3.innerText = product.name;
  div.className = 'price';
  //div.innerText = product.price;
  div.innerText = price;  //위에서 만든 원표시함수의 price를 출력

  li.append(h3, div);
  ul.append(li);

};

//02
const importData = () => {
  products.data.map((product) => {
    //createItem(product); -> 클릭시 여러번 그려짐

    //같은 아이디값을 가진 product가 존재하지 않을때만 실행
    if(!document.getElementById(product.id)){
      createItem(product);
    }
  });
};

//01
button.addEventListener('click', importData);
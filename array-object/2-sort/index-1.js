import products from '../products.js';

const button = document.querySelector('button');
//(1)버튼 가져오기
const asceButton = document.querySelector('.asceding');
const descButton = document.querySelector('.descending');

//(4)지우기
const removeItems = () => {
  const items = document.querySelectorAll('li');

  items.forEach((item) => {
    item.remove();
  });
};

//(3)-오름차순정렬 함수
const sortAsce = () => {
  //const myProducts = products.data.sort();
  //비교함수를 생략하면 유니코드 순서로 정렬되는데, 유니코드로 정렬하는 경우 숫자를 정확히 정렬할수 없다.

  //비교를 위한 인자를 반드시 넣어야 함(배열요소 2개을 인자로 가지고, a는 앞쪽요소, b는 뒤쪽요소)
  const myProducts = products.data.sort((a, b) => {  
    return a.price - b.price;  //가격으로 비교해야 함
  });

  //console.log(myProducts); -> 금액이 작은것부터 정렬된것을 확인할수 있음
  removeItems();
  myProducts.forEach((product) => {
    createItem(product);
  });
};

//(5)-내림차순정렬 함수
const sortDesc = () => {
  const myProducts = products.data.sort((a, b) => {  
    return b.price - a.price;  
  });

  removeItems();
  myProducts.forEach((product) => {
    createItem(product);
  });
}

const createItem = (product) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const div = document.createElement('div');

  const price = new Intl.NumberFormat('ko-KR', { 
    style: 'currency',
    currency: 'KRW',
  }).format(product.price);

  li.id = product.id;
  h3.className = 'name';
  h3.innerText = product.name;
  div.className = 'price';
  div.innerText = price; 

  li.append(h3, div);
  ul.append(li);

};

const importData = () => {
  products.data.map((product) => {
    if(!document.getElementById(product.id)){
      createItem(product);
    }
  });
};

button.addEventListener('click', importData);
//(2)버튼클릭
asceButton.addEventListener('click', sortAsce);  
descButton.addEventListener('click', sortDesc);

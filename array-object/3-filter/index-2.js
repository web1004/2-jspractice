//상품목록을 불러왔을때만 필터링되게 함

import products from '../products.js';
const button = document.querySelector('button');
const select = document.querySelector('select');

let myProducts; //(1)

const removeItems = () => {
  const items = document.querySelectorAll('li');

  items.forEach((item) => {
    item.remove();
  });

};

//(3)
const selectCategory = (event) => {

  if(myProducts) {  //myProducts가 존재할때만 
    const { selectedIndex } = event.target.options;
    const { value } = event.target.options[selectedIndex];
  
    const filtered = myProducts.filter((product) => {
      return product.category === value;
    });
  
    removeItems();
    filtered.forEach((product) => {
      createItem(product);
    });
  }
};


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
  
  //(2)
  if(products) {
    select.selectedIndex = 0; //초기화
    myProducts = products.data;

    myProducts.map((product) => {
      if (!document.getElementById(product.id)) {
        createItem(product);
      }
    });
  }
};


button.addEventListener('click', importData);
select.addEventListener('change', selectCategory);
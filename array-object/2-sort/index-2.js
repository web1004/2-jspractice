import products from '../products.js';

const button = document.querySelector('button');
const asceButton = document.querySelector('.asceding');
const descButton = document.querySelector('.descending');

let myProducts; //(1)전역으로 설정

const removeItems = () => {
  const items = document.querySelectorAll('li');
  items.forEach((item) => {
    item.remove();
  });
};

const sortAsce = () => {
  if(myProducts) {
    const myProducts = products.data.sort((a, b) => {  
      return a.price - b.price;  
    });
  
    removeItems();
    myProducts.forEach((product) => {
      createItem(product);
    });
  }
};

const sortDesc = () => {
  if(myProducts) {
    const myProducts = products.data.sort((a, b) => {  
      return b.price - a.price;  
    });
  
    removeItems();
    myProducts.forEach((product) => {
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
  if(products){
    myProducts = products.data;

    myProducts.map((product) => {
      if(!document.getElementById(product.id)){
        createItem(product);
      }
    });
  }  
};

button.addEventListener('click', importData);
asceButton.addEventListener('click', sortAsce);  
descButton.addEventListener('click', sortDesc);
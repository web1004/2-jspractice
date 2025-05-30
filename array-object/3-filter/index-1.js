import products from '../products.js';
const button = document.querySelector('button');
//(1)요소 가져오기
const select = document.querySelector('select');

const removeItems = () => {
  const items = document.querySelectorAll('li');

  items.forEach((item) => {
    item.remove();
  });

};

//(3)
const selectCategory = (event) => {
  //console.log(event); //콘솔창에서 target ... 클릭해서 options ->selectedIndex  번호확인가능
  const { selectedIndex } = event.target.options;
  //console.log(selectedIndex);  //해당옵션의 index값을 확인가능
  //console.log(event.target.options[selectedIndex]); //value값만을 뽑아아야 함
  const { value } = event.target.options[selectedIndex];
  //console.log(value);

  //데이터에서 사용자가 선택한 필터(value)가 상품의 카테고리가 일치한 경우만 화면에 그려줘야 함
  const filtered = products.data.filter((product) => {
    return product.category === value;
  });

  //console.log(filtered);
  removeItems();
  filtered.forEach((product) => {
    createItem(product);
  });

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
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });

};


button.addEventListener('click', importData);
select.addEventListener('change', selectCategory);  //02

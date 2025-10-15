//1.목록을 추가하고 글자 넣기

let li = document.createElement('li');
let ul = document.querySelector('ul');

li.textContent = '달리기';
ul.appendChild(li);
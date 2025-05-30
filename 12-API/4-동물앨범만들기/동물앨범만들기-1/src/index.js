const API_URL = 'https://animal-api-two.vercel.app/';

//(2)
const $content = document.querySelector('div.content');
let template = [];

//(1)API
const getData = async () => {
    let res = await fetch(API_URL);
    try {
        if (res) {
            let data = await res.json();
            //console.log(data);
            data.photos.forEach((elm) => {
              //console.log(elm)
              template += `<img src="${elm.url}"></img>`; //(3)
            });
            $content.innerHTML = template;
        }
    } catch (err) {
        console.log(err);
    }
};

getData();
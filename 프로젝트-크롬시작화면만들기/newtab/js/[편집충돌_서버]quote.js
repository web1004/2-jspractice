(function(){
  const API_URL = "https://random-quote.hyobb.com/";
  const quoteElement = document.getElementById("quote");
  const quoteItem = localStorage.getItem("quote");  //(5)

  //(4)오늘의 날짜 구하기(명언을 새로고침할때 바뀌게 하지 않고 하루에 1개의 명언이 나오게 함)
  //명언을 로컬스토리지에 저장해서 동일한 날짜라면 명언API를 호출하지 않고 로컬스토리지에 저장된 명언을 가져오게 함 
  const nowDate = new Date();
  const month = nowDate.getMonth()+1;
  const date = nowDate.getDate();


  //(3)명언 텍스트로 표시
  const setQuote = (result) => {
    //(4-1)
    let quote = {createDate: `${month}-${date}`, quoteData:result}; //객체를 설정해서 변수에 담아둠
    localStorage.setItem("quote", JSON.stringify(quote));

    quoteElement.textContent = result;
  };


  //(1)API호출
  /* const getQuote =  async() => {
    const data = await fetch(API_URL).then((res) => res.json());
    console.log(data);
    const result = data[1].respond;
    console.log(result);
  } */

  //(2)에러처리
  const getQuote =  async() => {
    try{
      const data = await fetch(API_URL).then((res) => res.json());
      //console.log(data);
      const result = data[1].respond;
      //console.log(result);
      setQuote(result); //03함수에 전달
    }catch(err){
      setQuote("작은 기회로부터 종종 위대한 업적이 시작된다. - 데모스테네스")
    } 
  }

  //(5)
  /* 웹페이지에 접속했을때 localStorage에 quote라는 키값의 데이터가 존재하고 createDate값이 오늘의 날짜와 동일하다면
  getQuote함수를 호출하지 않고 그렇지 않을경우만 getQuote함수를 호출한다.
  하루에 한개의 명언만 볼수 있고 날짜가 변경될때마다 다른 명언을 볼수 있게 하기 위해
  명언을 로컬스토리지에 저장해서 동일날 날짜라면 명언 api 를 호출하지 않고 로컬스토리지에 저장된 명언을 가져올수 있게 한다.*/

  if(quoteItem){ //quoteItem이 있다면... 
    let {createDate, quoteData} = JSON.parse(quoteItem);
    //로컬스토리지에 저장되어 있는 키값인 createDate가 오늘의 날짜와 동일하다면 저장되어 있는 quoteData를 불러와서 텍스트에 표시
    if(createDate === `${month}-${date}`){  //오늘 날짜와 동일하다면
      quoteElement.textContent = `"${quoteData}`;
    }else{
      getQuote();
    }
  }else{  //quoteItem이 존재하지 않는다면 
    getQuote();
  }

  // getQuote(); //05에서 주석처리

})();
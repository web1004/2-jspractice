(function(){
  const searchInput = document.getElementById("search-input");

  const showSearchResult = () => {
    let searchWord = searchInput.value;
    //구글에서 키워드입력후 연결된 주소를 보면 알수 있음
    window.location.href = `https://www.google.com/search?q=${searchWord}`;
    searchWord = "";
  };

  //검색어를 입력하고 엔터를 눌렀을때 showSearchResult()함수가 실행될수 있도록 코드작성
  const enterKey = (event) => {
    if(event.code === "Enter") {
      showSearchResult();
    }
  };

  searchInput.addEventListener("keypress", (event) => {
    enterKey(event);
  });

  /* keypress를 실행하는 event 가 enterKey함수의 인수로 전달되어서 누르는 이벤트의 키가 엔터와 동일하다면
  showSearchResult()함수를 실행시켜서 입력한 검색어의결과페이지로 이동시킬수 있다.  */
})();
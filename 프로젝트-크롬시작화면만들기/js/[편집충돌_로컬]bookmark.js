(function(){

  const newBookmarkForm = document.getElementById("bookmark-item-input-form");
  const addBookmarkBtn = document.getElementById("bookmark-item-add-btn"); //(2)
  const addBtn = document.getElementById("add-btn"); //(3)
  const cancelBtn = document.getElementById("cancel-btn");
  const bookmarkItemList = document.getElementById("bookmark-list"); //(4)

  //(1)한번 추가한 북마크는 재접속할때 추가한 상태여야 하기 때문에 로컬스토리지에 저장해야 함
  let bookmarkList = []; //빈 배열로 초기화
  if(localStorage.getItem("bookmarkList")){ //로컬소토리지에 내용이 있다면
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));  //로컬스토리지에 저장된 값을 bookmarkList에 넣어주고
  }else{
    localStorage.setItem("bookmarkList",JSON.stringify(bookmarkList)); //현재 저장되어 있는 빈 배열을 넣어줌
  }

  //(3)아이템 추가하기-만약 로컬스토리지에 북마크리스트가 있다면 북마크변수에 로컬스토리지데이터를 넣어준다.
  const addBookmarkItem = () => {
    let bookmarkList = [];  //빈 배열로 초기화
    if(localStorage.getItem("bookmarkList")){
      bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    }

    let name = document.getElementById("new-bookmark-name-input").value;
    let url = document.getElementById("new-bookmark-url-input").value;
    let createAt = Date.now(); //현재의 날짜(1970.1.1 0시0분0초부터 지금 이 순간까지 경과된 밀리초를 나타내는 숫자값을 얻어올수 있음)

    bookmarkList.push({name:name, url:url,createAt:createAt}); //객체형태로 bookmarkList의 배열에 값을 넣어둔 다음
    localStorage.setItem("bookmarkList",JSON.stringify(bookmarkList)); //이 값을 로컬스토리지에 다시 넣어줌

    document.getElementById("new-bookmark-name-input").value="";  //저장을 했으니 초기화
    document.getElementById("new-bookmark-url-input").value="";

    setBookmarItem({name:name, url:url,createAt:createAt}); //(5)번에서 추가
    newBookmarkToggle(); //새로운 북마크의 정보를 입력하는 폼을 닫아주는 (2)함수실행     
  };

  //(2)북마크 추가버튼을 클릭할때만 아래 입력폼 나오게 함
  let isAddBtnClick = false;
  newBookmarkForm.style.display = "none";  //아래 폼 안보이게 함

  const newBookmarkToggle = () => {
    isAddBtnClick = !isAddBtnClick;  //!false이므로 true
    isAddBtnClick ? (newBookmarkForm.style.display = "block") : (newBookmarkForm.style.display = "none");
  };

  //(6)북마크 삭제
  const deleteBookmarkItem = (id) => {
    const isDelete = window.confirm("정말 삭제하시겠습니까?");
    if(isDelete){
      let bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")); //로컬스토리지에 있는 북크를 가져옴
      let nowBookmarkList = bookmarkList.filter((elm)=>elm.createAt !== id);  //북마크리스트에 특정 북마크 아이템을 삭제한 북마크리스트를 담아줌
      
      //id와 동일하지 않는 리스트만 모아서 새로운 배열에 담아줌
      localStorage.setItem("bookmarkList",JSON.stringify(nowBookmarkList)); //다시 로컬스토리지에 저장
      document.getElementById(`bookmark-item-${id}`).remove();
    };
  };

  //(5)웹페이지에 접속할때, 북마크아이템이 추가될때마다 호출이 되어야 하므로 (3)함수 내용추가
  const setBookmarItem = (item) => {
    //console.log(item);
    const bookmarkItem = document.createElement("div");
    bookmarkItem.classList.add("bookmark-item");
    bookmarkItem.id = `bookmark-item-${item.createAt}`;

    const bookmarkInfo = document.createElement("div");
    bookmarkInfo.classList.add("bookmark-info");

    const bookmarkUrl = document.createElement("a");
    bookmarkUrl.classList.add("bookmark-url");
    bookmarkUrl.href = item.url;

    const urlIcon = document.createElement("div");
    urlIcon.classList.add("url-icon");

    const urlIconImg = document.createElement("img");
    urlIconImg.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`

    const nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = item.name;

    const bookmarkDelBtn = document.createElement("div");
    bookmarkDelBtn.textContent="삭제";
    bookmarkDelBtn.classList.add("del-btn");

    //(7)삭제함수 추가
    bookmarkDelBtn.addEventListener("click", () => {
      deleteBookmarkItem(item.createAt);
    });

    bookmarkItem.appendChild(bookmarkInfo);
    bookmarkItem.appendChild(bookmarkDelBtn);
    bookmarkInfo.appendChild(bookmarkUrl);
    bookmarkUrl.appendChild(urlIcon);
    bookmarkUrl.appendChild(nameElement);
    urlIcon.append(urlIconImg);   
    bookmarkItemList.appendChild(bookmarkItem);
  };

  //(4)로컬스토리지에 저장된 데이터를 꺼내서 화면에 표시하기
  const setBookmarkList = () => {
    bookmarkList.forEach((item) => {
      setBookmarItem(item); //(5)함수호출
    })
  };



  addBookmarkBtn.addEventListener("click", newBookmarkToggle);  //(2)
  addBtn.addEventListener("click", addBookmarkItem);//(3)
  cancelBtn.addEventListener("click",newBookmarkToggle); //(3)
  setBookmarkList(); //(5) 


})();
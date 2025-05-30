(function(){
  const newBookmarkForm = document.getElementById("bookmark-item-input-form");
  const addBookmarkBtn = document.getElementById("bookmark-item-add-btn");
  const addBtn = document.getElementById("add-btn");
  const cancelBtn = document.getElementById("cancel-btn");
  const bookmarkItemList = document.getElementById("bookmark-list");

  // 01-한번 추가한 북마크는 재접속할때 추가한 상태여야 하기 때문에 로컬스토리지에 저장해야 함
  let bookmarkList = [];
  if(localStorage.getItem("bookmarkList")){ //로컬소토리지에 내용이 있다면
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
  }else{
    localStorage.setItem("bookmarkList",JSON.stringify(bookmarkList));
  }

  //03-만약 로컬스토리지에 북마크리스트가 있다면 북마크변수에 로컬스토리지데이터를 넣어준다.
  const addBookmarkItem = () => {
    let bookmarkList = [];  //빈 배열로 초기화
    if(localStorage.getItem("bookmarkList")){
      bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    }
    let name = document.getElementById("new-bookmark-name-input").value;
    let url = document.getElementById("new-bookmark-url-input").value;
    let createAt = Date.now();
    bookmarkList.push({name:name, url:url,createAt:createAt});
    localStorage.setItem("bookmarkList",JSON.stringify(bookmarkList));

    document.getElementById("new-bookmark-name-input").value="";
    document.getElementById("new-bookmark-url-input").value="";
    setBookmarItem({name:name, url:url,createAt:createAt});
    newBookmarkToggle();
  }

  //02-북마크 추가버튼을 클릭할때만 아래 입력폼 나오게 함
  let isAddBtnClick = false;
  newBookmarkForm.style.display = "none";

  const newBookmarkToggle = () => {
    isAddBtnClick = !isAddBtnClick;
    isAddBtnClick ? (newBookmarkForm.style.display = "block") : (newBookmarkForm.style.display = "none");
  }

  //06
  const deleteBookmarkItem = (id) => {
    const isDelete = window.confirm("정말 삭제하시겠습니까?");
    if(isDelete){
      let bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
      let nowBookmarkList = bookmarkList.filter((elm)=>elm.createAt !== id);
      localStorage.setItem("bookmarkList",JSON.stringify(nowBookmarkList));
      document.getElementById(`bookmark-item-${id}`).remove();
    }
  }

  //05
  const setBookmarItem = (item) => {
    //console.log(item);
    const bookmarkItem = document.createElement("div");
    bookmarkItem.classList.add("bookmark-item");
    bookmarkItem.id = `bookmark-item-${item.createAt}`;

    const bookmarkInfo = document.createElement("div");
    bookmarkInfo.classList.add("bookmark-info");

    const bookmarkUrl = document.createElement("a");
    bookmarkUrl.classList.add("bookmark-url");

    const urlIcon = document.createElement("div");
    urlIcon.classList.add("url-icon");

    const urlIconImg = document.createElement("img");

    bookmarkUrl.href = item.url;
    urlIconImg.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`
    const nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = item.name;

    const bookmarkDelBtn = document.createElement("div");
    bookmarkDelBtn.textContent="삭제";
    bookmarkDelBtn.classList.add("del-btn");
    
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
  }

  //04-화면에 표시하기
  const setBookmarkList = () => {
    bookmarkList.forEach((item) => {
      setBookmarItem(item);
    })
  }

  addBookmarkBtn.addEventListener("click", newBookmarkToggle);//(2)
  addBtn.addEventListener("click", addBookmarkItem);//(3)
  cancelBtn.addEventListener("click",newBookmarkToggle);
  setBookmarkList();
}) ();
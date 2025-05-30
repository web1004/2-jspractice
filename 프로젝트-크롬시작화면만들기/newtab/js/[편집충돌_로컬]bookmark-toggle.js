(function(){

  const bookmarkBar = document.getElementById("bookmark-bar");
  const bookmarkOpen = document.getElementById("bookmark-open");
  const bookmarkClose = document.getElementById("bookmark-close");
  const bookmarkOpenBtn = document.getElementById("bookmark-open-btn");
  const bookmarkCloseBtn = document.getElementById("bookmark-close-btn");

  //(2)새로고침을 하거나 닫았다 다시 열어도 최종상태를 유지
  const isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
  if(isBookMarkBarOpen === "close"){
    bookmarkBar.style.display = "none";
    bookmarkOpen.style.display = "none";
    bookmarkClose.style.display = "flex";
  }else{
    bookmarkBar.style.display = "block";
    bookmarkOpen.style.display = "flex";
    bookmarkClose.style.display = "none";
  }

  /* (1)북마크닫기와 열기버튼을 눌렀을때 북마크바를 열고 닫기(북마크 연상태에서 웹페이지를 종료했다면 다음에 재접속했을때 열려있어야 하므로 북마크바가 열렸는지 닫혔는지에 대한 정보를 로컬스토리지에 저장한다.) */
  const bookmarkBarToggle = () => {
    const isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
    /* 북마크바는 열고닫는 2가지 상황으로 나눌수 있고 북마크바를 여는 상황은  isBookMarkBarOpen값이  close일때이고,
    북마크바를 닫는 상황은 isBookMarkBarOpen값이  open일때와 localStorage에 해당값이 존재하지 않을때이다. */

    /* if(isBookMarkBarOpen){ //있을때
      if(isBookMarkBarOpen === "open"){
        localStorage.setItem("isBookMarkBarOpen","close");
        bookmarkBar.style.display = "none";  //북마크바 안보이게
        bookmarkOpen.style.display = "none";  //오픈버튼 안보이게
        bookmarkClose.style.display = "flex"; //닫기버튼 보여야 함
      }else{
        localStorage.setItem("isBookMarkBarOpen","open");
        bookmarkBar.style.display = "block";
        bookmarkOpen.style.display = "flex";
        bookmarkClose.style.display = "none";
      }
    }else{  //localStorage에 해당값이 존재하지 않을때 닫아야 하므로(오픈일때와 동일하게)
      localStorage.setItem("isBookMarkBarOpen","close");
      bookmarkBar.style.display = "none";
      bookmarkOpen.style.display = "none";
      bookmarkClose.style.display = "flex";      
    }  */ 
  
    if(isBookMarkBarOpen === "close"){  //북마크바를 열어주고  
      localStorage.setItem("isBookMarkBarOpen","open");
      bookmarkBar.style.display = "block";
      bookmarkOpen.style.display = "flex";
      bookmarkClose.style.display = "none";
      return;
    } localStorage.setItem("isBookMarkBarOpen","close");
    bookmarkBar.style.display = "none";
    bookmarkOpen.style.display = "none";
    bookmarkClose.style.display = "flex";
  };

  bookmarkOpenBtn.addEventListener("click",bookmarkBarToggle);
  bookmarkCloseBtn.addEventListener("click",bookmarkBarToggle);
})();
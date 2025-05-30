//즉시실행함수안에 작성한 코드를 넣어두면 함수 내부에서만 실행되기 때문에 다른 스크립트 소스에서 실행이 안되어서 오류를 막을수 있다.
(function(){
  
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  //02-두자리숫자로 맞추기
  const modifyNumber = (number) => {
    return parseInt(number) < 10 ? `0${number}` : `${number}`;
  }

  //03-날짜화면에 텍스트표시
  const setNowDate = (month, date, day) => {
    dateElement.textContent = `${month}월 ${date}일 ${day}`;
  }

  //01-오늘의 날짜와 요일
  const getNowDate = () => {
    const nowDate = new Date();
    let week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    let month = modifyNumber(nowDate.getMonth()+1);
    let date = modifyNumber(nowDate.getDate());
    let day = nowDate.getDay();
    //console.log(month, date, day);
    setNowDate(month, date, week[day]); 
  };

  //05-시간 화면에 텍스트표시
  const setNowTime = (hour, minute) => {
    timeElement.textContent = `${hour} : ${minute}`
  }

  //04-시간
  const getNowTime = () => {
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());
    //console.log(hour, minute);
    setNowTime(hour, minute);
  };


  getNowDate();
  getNowTime();
  setInterval(getNowTime, 1000);

})();
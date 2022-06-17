const todayDiv = document.getElementById("today");
const timeDiv = document.getElementById("clock");

const dayList = ["월", "화", "수", "목", "금", "토", "일"];

function getToday() {
    let now = new Date();
    let year = now.getFullYear(); 
    let month = now.getMonth() + 1; 
    let date = now.getDate(); 
    let day = now.getDay() - 1; 

    todayDiv.textContent =
        year +
        "-" +
        formatNumber(month) +
        "-" +
        formatNumber(date) +
        " " +
        dayList[day]

}

function getTime() {
  let now = new Date();
  let hour = now.getHours(); 
  let minute = now.getMinutes(); 
  let second = now.getSeconds(); 
  let noon = "오전";
  if (hour > 11) {
    noon = "오후";
    hour = hour - 12;
    if (hour == 0) {
      hour = 12;
    }
  }



  timeDiv.textContent =
    noon +
    " " +
    formatNumber(hour) +
    ":" +
    formatNumber(minute) +
    ":" +
    formatNumber(second);
}


getTime();
setInterval(getTime, 1000);


function formatNumber(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}
getToday();
setInterval(getToday, 1000);
getTime();
setInterval(getTime, 1000);
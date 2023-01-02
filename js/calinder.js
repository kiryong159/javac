//const utc = Cdate.getTime() + Cdate.getTimezoneOffset() * 60 * 1000;
// UTC표준시 도출(UCT와 우리나라 시간차이 인듯?)
const Cdate = new Date();
// 오늘 날자

let thisMonth = new Date(
  Cdate.getFullYear(),
  Cdate.getMonth(),
  Cdate.getDate()
);

let currentYear = thisMonth.getFullYear();
let currentMonth = thisMonth.getMonth();
let currentDate = thisMonth.getDate();

renderCAL(thisMonth);
function renderCAL(thisMonth) {
  //렌더링을 위한 데이터 정리
  currentYear = thisMonth.getFullYear();
  currentMonth = thisMonth.getMonth();
  currentDate = thisMonth.getDate();
  // 지난달 마지막날의 요일,날자
  const lastday = new Date(currentYear, currentMonth, 0);
  const prevDate = lastday.getDate();
  const prevDay = lastday.getDay();
  // 이번달 마지막날의 요일,날자
  const currentendday = new Date(currentYear, currentMonth + 1, 0);
  const nextDate = currentendday.getDate();
  const nextDay = currentendday.getDay();
  //console.log(prevDate, prevDay, nextDate, nextDay);

  const navYearMonth = document.querySelector(".nav-year-month");
  navYearMonth.innerText = `${currentYear}년 ${currentMonth + 1}월`;

  const calinderDates = document.querySelector(".dates-box");
  calinderDates.innerHTML = "";

  if (prevDay !== 6) {
    for (let i = prevDate - prevDay; i <= prevDate; i++) {
      calinderDates.innerHTML =
        calinderDates.innerHTML +
        '<div class="dates prev disable">' +
        i +
        "</div>";
    }
  }

  for (let i = 1; i <= nextDate; i++) {
    calinderDates.innerHTML =
      calinderDates.innerHTML + '<div class="dates current">' + i + "</div>";
  }

  if (nextDay !== 6) {
    for (let i = 1; i <= 6 - nextDay; i++) {
      calinderDates.innerHTML =
        calinderDates.innerHTML +
        '<div class="dates next disable">' +
        i +
        "</div>";
    }
  }
}
const goPrev = document.querySelector(".go-prev");
const goNext = document.querySelector(".go-next");

goPrev.addEventListener("click", prevcal);
goNext.addEventListener("click", nextcal);

function prevcal() {
  thisMonth = new Date(currentYear, currentMonth - 1, 1);
  renderCAL(thisMonth);
}

function nextcal() {
  thisMonth = new Date(currentYear, currentMonth + 1, 1);
  renderCAL(thisMonth);
}

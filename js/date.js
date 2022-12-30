const yearSpan = document.querySelector(".day-year span");
const timeSpan = document.querySelector(".day-time span");
const weatherSpan = document.querySelector(".weather span");

function year() {
  const date = new Date();
  const year = JSON.stringify(date.getFullYear());
  const month = JSON.stringify(date.getMonth() + 1).padStart(2, "0");
  const day = JSON.stringify(date.getDate()).padStart(2, "0");
  yearSpan.innerText = `${year}년 ${month}월 ${day}일`;
  const hour = JSON.stringify(date.getHours()).padStart(2, "0");
  const minut = JSON.stringify(date.getMinutes()).padStart(2, "0");
  const second = JSON.stringify(date.getSeconds()).padStart(2, "0");
  timeSpan.innerText = `${hour}:${minut}:${second}`.padStart(2, "0");
}

setInterval(year, 1000);

year();

navigator.geolocation.getCurrentPosition(geook, geono);

function geook(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b2ff35336779cc01b7c21f313684fca7&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const jiyork = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      weatherSpan.innerText = `${jiyork} / ${weather} / ${temp}도`;
    });
}
function geono() {
  alert("위치를 찾을수없어요.");
}

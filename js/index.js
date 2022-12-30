const loginform = document.querySelector(".greeting");
const logininput = document.querySelector(".greeting input");
const h1 = document.querySelector(".greeting-box h1");
const h12 = document.querySelector(".greeting-box .secondh1");

function handleSubmit(event) {
  event.preventDefault();
  const username = logininput.value;
  localStorage.setItem("username_key", username);
  loginform.classList.add("hidden");
  hello(username);
}

function hello() {
  const namee = localStorage.getItem("username_key");
  h1.classList.remove("hidden");
  h12.classList.remove("hidden");
  h1.innerText = `Greetings!!`;
  h12.innerText = `${namee}`;
}

if (localStorage.getItem("username_key") !== null) {
  // 스토리지에 무언가 있을때
  hello();
} else {
  //스토리지가 비었을때
  loginform.classList.remove("hidden");
  loginform.addEventListener("submit", handleSubmit);
}

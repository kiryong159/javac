const imgs = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];

const imgselect = imgs[Math.floor(Math.random() * imgs.length)];

const bodyimg = document.createElement("img");

const body = document.querySelector("body");
bodyimg.src = imgselect;

body.appendChild(bodyimg);

const changebtn = document.querySelector(".changebg");

changebtn.addEventListener("click", changebg);

function changebg() {
  const imgselect = imgs[Math.floor(Math.random() * imgs.length)];
  bodyimg.src = imgselect;

  body.appendChild(bodyimg);
}

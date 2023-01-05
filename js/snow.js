const bodyyy = document.querySelector("body");

function makeSnowflake() {
  const snowflake = document.createElement("div");
  const delay = Math.random() * 10;
  const opac = Math.random();
  const duration = Math.random() * 10 + 10;
  snowflake.classList.add("snowflake");
  snowflake.style.left = `${Math.random() * window.innerWidth - 10}px`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = `${opac}`;
  snowflake.style.animation = `fall ${duration}s linear`;
  bodyyy.appendChild(snowflake);
  setTimeout(() => {
    bodyyy.removeChild(snowflake);
    makeSnowflake();
  }, duration * 1000);
}

for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    makeSnowflake();
  }, 300 * i);
}

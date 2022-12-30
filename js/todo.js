const todoForm = document.querySelector(".todo-box");
const todoInput = document.querySelector(".todo-box input");
const ul = document.querySelector("ul");
todoForm.addEventListener("submit", submitTodo);

function submitTodo(event) {
  event.preventDefault();
  const inputvalue = todoInput.value;
  todoInput.value = "";
  localStorage.setItem("todo-value", inputvalue);
  printTodo(inputvalue);
}

function printTodo(event) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("buttom");
  const icon = document.createElement("i");
  icon.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  ul.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = event;
  button.appendChild(icon);
}

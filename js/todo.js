const todoForm = document.querySelector(".todo-box");
const todoInput = document.querySelector(".todo-box input");
const ul = document.querySelector("ul");
let todos = [];

todoForm.addEventListener("submit", submitTodo);

function savetodos() {
  localStorage.setItem("todos_key", JSON.stringify(todos));
}

function submitTodo(event) {
  event.preventDefault();
  const inputvalue = todoInput.value;
  todoInput.value = "";
  const inputvalueOBJ = {
    text: inputvalue,
    id: Date.now(),
  };
  printTodo(inputvalueOBJ);
  todos.push(inputvalueOBJ);
  savetodos();
}

function printTodo(event) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const icon = document.createElement("i");
  icon.innerHTML = `<i class="fa-solid fa-trash fa-lg"></i>`;
  ul.appendChild(li);
  li.id = event.id;
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = event.text;
  button.appendChild(icon);
  icon.addEventListener("click", Dbtn);
}

function Dbtn(event) {
  const Dselect = event.target.parentElement.parentElement.parentElement;
  Dselect.remove();
  todos = todos.filter((aa) => aa.id !== parseInt(Dselect.id));
  savetodos();
  // 7.8 2분48
}

const checklocal = localStorage.getItem("todos_key");

if (checklocal !== null) {
  const parselocal = JSON.parse(localStorage.getItem("todos_key"));
  parselocal.forEach((element) => {
    printTodo(element);
  });
  todos = parselocal;
}

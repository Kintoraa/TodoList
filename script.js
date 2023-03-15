const form = document.querySelector("form");

const loading = () => {
  if (localStorage.todoList) {
    list.innerHTML = localStorage.todoList;
  } else {
    list.innerHTML += "<li> Cliquez pour supprimer </li>";
  }
};

const getTodo = () => {
  list.innerHTML += "<li> " + text.value + " </li>";
  text.value = "";
  localStorage.todoList = list.innerHTML;
};

const removeTodo = (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
    localStorage.todoList = list.innerHTML;
  } else {
    e.target.classList.add("checked");
    localStorage.todoList = list.innerHTML;
  }

  return e;
};

window.addEventListener("load", () => {
  loading();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getTodo();
});

list.addEventListener("click", (e) => {
  removeTodo(e);
});

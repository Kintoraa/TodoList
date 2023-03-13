const form = document.querySelector("form");

const storageList = () => {
  localStorage.todoList = list.innerHTML;
};

const addList = () => {
  if (localStorage.todoList) {
    list.innerHTML = localStorage.todoList;
  } else {
    list.innerHTML = "<li>Cliquez sur un todo pour le supprimer </li>";
  }
};

window.addEventListener("load", () => {
  addList();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;

  item.value = "";
  storageList();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }

  storageList();
});

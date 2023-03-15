const form = document.querySelector("form");

window.addEventListener("load", () => {
  list.innerHTML = localStorage.todoList;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = text.value;
  console.log(value);
  list.innerHTML += "<li> " + value + " </li>";
  text.value = "";
  localStorage.todoList = list.innerHTML;
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
    localStorage.todoList = list.innerHTML;
  } else {
    e.target.classList.add("checked");
    localStorage.todoList = list.innerHTML;
  }
});

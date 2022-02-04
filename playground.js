const form = document.getElementById("todoForm");
const todoWrapper = document.getElementById("todoWrapper");

const todoCreater = (todoContent) => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const button = document.createElement("button");
  p.textContent = todoContent;
  button.textContent = "Done";
  div.appendChild(p);
  div.appendChild(button);

  button.addEventListener("click", () => {
    div.remove();
  });
  return div;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = form.querySelector("input").value;
  const todoItem = todoCreater(inputValue);

  todoWrapper.appendChild(todoItem);
});

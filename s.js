let todos = ["geree tseverleh", "hool hiih", "hicheel hiih", "kino uzeh"];
const button = document.getElementById("button");
const input = document.getElementById("input");
// input.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });
button.addEventListener("click", () => {
  if (!input.value) {
    errorHanding();
    return;
  } else {
    errorRemove();
    todos.push(input.value);
    renderTodos();
    input.value = null;
  }
});

function renderTodos() {
  const tasklist = document.getElementById("tasklist");
  tasklist.innerHTML = null;
  input.value = null;
  todos.sort().map((todo) => {
    const p = document.createElement("p");
    p.innerText = todo;
    tasklist.appendChild(p);
  });
}

function errorHanding() {
  const p = document.getElementById("error");
  p.innerText = "Aldaa Garlaa ! ";
}

function errorRemove() {
  const p = document.getElementById("error");
  p.innerText = null;
}

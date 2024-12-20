/* <div class="todoList">
        <div class="title">
          <div class="circle"></div>
          <h2>To do</h2>
          <p class="count">5</p>
        </div>
        <div class="list">
          <div class="listItem">
            <p>[loan-managament] - Add card component</p>
            <select name="" id="">
              <option value="">In progress</option>
              <option value="">Done</option>
            </select>
            <img src="./trash.svg" alt="" />
          </div>
          <div class="listItem">
            <p>[loan-managament] - Add card component</p>
            <select name="" id="">
              <option value="">In progress</option>
              <option value="">Done</option>
            </select>
            <img src="./trash.svg" alt="" />
          </div>
        </div>
      </div> */
const containerItems = [
  {
    title: "To do",
    count: 5,
    color: "white",
    id: "to-do",
  },
  {
    title: "In progress",
    count: 5,
    color: "yellow",
    id: "in-progress",
  },
  {
    title: "Done",
    count: 5,
    color: "green",
    id: "done",
  },
  {
    title: "Blocked",
    count: 5,
    color: "red",
    id: "blocked",
  },
];

const todoData = [
  { title: "geree tseverleh", date: "12-09", state: "to-do" },
  { title: "shine jildee yvah", date: "12-09", state: "to-do" },
  { title: "huvtsaa beldeh", date: "12-09", state: "to-do" },
  // { title: "ochih", date: "2024-12-09", state: "to-do" },
  { title: "geree tseverleh", date: "12-10", state: "in-progress" },
  { title: "shine jildee yvah", date: "12-10", state: "in-progress" },
  { title: "huvtsaa beldeh", date: "12-10", state: "in-progress" },
  // { title: "ochih", date: "2024-12-09", state: "to-do" },
  { title: "geree tseverleh", date: "12-11", state: "done" },
  { title: "shine jildee yvah", date: "12-11", state: "done" },
  { title: "huvtsaa beldeh", date: "12-11", state: "done" },
  // { title: "ochih", date: "2024-12-09", state: "to-do" },
  { title: "geree tseverleh", date: "12-12", state: "blocked" },
  { title: "shine jildee yvah", date: "12-12", state: "blocked" },
  { title: "huvtsaa beldeh", date: "12-12", state: "blocked" },
  // { title: "ochih", date: "2024-12-09", state: "todo" },
];

// add task heseg
const button = document.querySelector("#btn");
const input = document.querySelector("#input");
button.addEventListener("click", () => {
  if (!input.value) {
    errorHanding();
    return;
  } else {
    errorRemove();
    todoData.push(input.value);
    input.value = null;
  }
});

// const addTask = () => {
//   if (input.value) {
//     todoData.push({
//       title: input.value,
//       date: "2024-12-12",
//       state: "todo",
//     });
//     input.value = null;
//     // clearContainers();
//     todoData.map((item, index) => {
//       renderTodoItems(item.title, item.date, item.state, index);
//     });
//   }
// };

function addTaskList(title, color, count, id) {
  const taskContainer2 = document.querySelector("#taskContainer");
  const todoList = document.createElement("div");
  todoList.setAttribute("id", id);

  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  todoList.appendChild(titleDiv);

  const h2 = document.createElement("h2");
  h2.innerText = title;

  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;
  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  taskContainer2.appendChild(todoList);
}

function lists(title, date, state) {
  const cal = document.querySelector(`#${state}`);

  const listItem = document.createElement("div");
  listItem.setAttribute("class", "listItem");
  cal.appendChild(listItem);

  const listItemP = document.createElement("p");
  listItemP.innerText = title;

  const dateItemP = document.createElement("p");
  dateItemP.innerText = date;

  const select = document.createElement("select");

  containerItems.map((arr) => {
    let option = document.createElement("option");
    option.innerText = state;
    select.appendChild(option);
  });

  const img = document.createElement("img");
  img.setAttribute("src", "./trash.svg");

  cal.appendChild(listItem);

  listItem.appendChild(listItemP);
  listItem.appendChild(dateItemP);
  listItem.appendChild(select);
  listItem.appendChild(img);
}
containerItems.map((item) => {
  addTaskList(item.title, item.color, item.count, item.id);
});

todoData.map((item, index) => {
  lists(item.title, item.date, item.state, index);
});

function errorHanding() {
  const p = document.getElementById("error");
  p.innerText = "Aldaa Garlaa ! ";
}

function errorRemove() {
  const p = document.getElementById("error");
  p.innerText = null;
}

const addTask = () => {
  if (input.value) {
    todoData.push({
      title: input.value,
      date: "2024-12-12",
      state: "todo",
    });
    input.value = null;
    // clearContainers();
    todoData.map((item, index) => {
      lists(item.title, item.date, item.state, index);
    });
  }
};

button.addEventListener("click", addTask);

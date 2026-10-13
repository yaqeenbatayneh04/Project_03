const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const counter = document.getElementById("counter");

let totalTasks = 0;

function updateCounter() {
  counter.textContent = totalTasks;
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    return;
  }

  const li = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  taskText.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
    totalTasks--;
    updateCounter();
  });

  li.appendChild(taskText);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  totalTasks++;
  updateCounter();

  taskInput.value = "";
  taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

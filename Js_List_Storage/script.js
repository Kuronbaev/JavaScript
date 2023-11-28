// function addTask() {
//   let taskInput = document.getElementById("task");
//   let taskText = taskInput.value.trim();

//   if (taskText === "") {
//     alert("Пожалуйста, введите задачу.");
//     return;
//   }

//   let taskList = document.getElementById("taskList");
//   let taskItem = document.createElement("li");
//   taskItem.textContent = taskText;
//   taskItem.style.fontSize = "15px";
//   let deleteButton = document.createElement("button");
//   deleteButton.textContent = "Удалить";
//   deleteButton.style.color = "white";
//   deleteButton.onclick = function () {
//     taskList.removeChild(taskItem);
//   };

//   taskItem.appendChild(deleteButton);
//   taskList.appendChild(taskItem);

//   taskInput.value = "";
// }
// task.value = localStorage.getItem("task");
// taskInput.oninput = () => {
//   localStorage.setItem("taskInput", taskInput.value);
// };

// function loadTasks() {
//   let tasks = localStorage.getItem("task");
//   if (tasks) {
//     tasks = JSON.parse(tasks);
//     var taskList = document.getElementById("taskList");

//     tasks.forEach(function (taskText) {
//       var taskItem = document.createElement("li");
//       taskItem.textContent = taskText;

//       var deleteButton = document.createElement("button");
//       deleteButton.textContent = "Удалить";
//       deleteButton.onclick = function () {
//         taskList.removeChild(taskItem);
//         updateLocalStorage();
//       };

//       taskItem.appendChild(deleteButton);
//       taskList.appendChild(taskItem);

//       taskInput.value = "";
//     });
//   }
// }

function loadTasks() {
  var tasks = localStorage.getItem("tasks");
  if (tasks) {
    tasks = JSON.parse(tasks);
    var taskList = document.getElementById("taskList");

    tasks.forEach(function (taskText) {
      var taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Удалить";
      deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
        updateLocalStorage();
      };

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
    });
  }
}

// Функция для добавления задачи
function addTask() {
  let taskInput = document.getElementById("task");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Пожалуйста, введите задачу.");
    return;
  }

  let taskList = document.getElementById("taskList");
  let taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "у";
  deleteButton.onclick = function () {
    taskList.removeChild(taskItem);
    updateLocalStorage();
  };

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = "";

  updateLocalStorage();
}

// Функция для обновления localStorage с текущим списком задач

function updateLocalStorage() {
  let tasks = [];
  let taskList = document.getElementById("taskList");

  for (let i = 0; i < taskList.children.length; i++) {
    let taskItem = taskList.children[i];
    tasks.push(taskItem.textContent);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Загрузка задач при загрузке страницы
window.onload = function () {
  loadTasks();
};

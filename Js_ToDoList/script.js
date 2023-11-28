// const ul = document.querySelector(".crud");
// const btn = document.querySelector(".btn");
// const input = document.querySelector(".input");
// const form = document.querySelector(".form");
// btn.addEventListener("click", (e) => add);
// input.addEventListener("keydown", (e) => {});
// ul.addEventListener("click", (e) => {
//   if (e.target.classList.contains("del-btn")) {
//     e.target.parentNode.remove();
//   }
// });

// function addTask(port) {
//   if (input.value.trim() === "") {
//     alert("Заполните поле");
//   } else {
//     ul.innerHTML += `<li class="list-group-item d-flex align-items-center justify-content-between">
//                 ${input.value}
//                 <button class="del-btn btn btn-danger">Delete</button>
//                 </li>`;
//   }
//   input.value = "";
// }

const input = document.querySelector(".input");
const two = document.querySelector(".inputtwo");
const btn = document.querySelector(".btn");
const tr = document.querySelector("tr");
const trr = document.querySelector(".trr");
const hi = document.querySelector(".hi");
const tbody = document.querySelector("tbody");

btn.addEventListener("click", (e) => task(btn));

tbody.addEventListener;("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.parentNode.remove();
  }
});
function task(high) {
  if (input.value.trim() === "" || two.value.trim() === "") {
    alert("Заполните все поля");
  } else {
    tbody.innerHTML += `
  <tr class="tr">
  <td>${input.value}</td>
  <td>${two.value}</td>
  <td><button  class="delete"><ion-icon name="trash-outline"></ion-icon></button></td>
 </tr> 
`;
    input.value = "";
    two.value = "";
  }
}

// Напишите функцию, которая вернет текст внутри первого тэга - a.
// const teg = document.querySelector(".nav__link");
// console.log(teg.innerHTML);

// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом navlinkitem
// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов элементов с классом navlinkitem
// Task 5
// Напишите функцию, которая вернет массив со значениями атрибута data-link внутри тэгов элементов с классом nav__link .
// const data = document.querySelectorAll(".nav__link");
// console.log(
//   Array.from(data).map((el) => {
//     return el.getAttribute("data-link");
//   })
// );
// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно, по правилам внутри элемента с классом nav__link должен быть текст порядкового номера индекса. И у этого же элемента должен быть класс с текстовым номером индекса.
// // Например
// const teg = document.querySelectorAll(".top-nav a");
// console.log(
//   Array.from(teg).filter((el) => {
//     return   el.classList[1] === el.innerHTML

//     }
//   )
// );

// const teg = document.querySelectorAll(".top-nav a");

// teg.forEach((el,idx) => {
//     el = `<a href="#" class="${el.getAttribute("class")}" data-link="${idx}">${el.classList[1]}</a>`
//     console.log(el);
// });

// const get = document.querySelectorAll("nav__link");

// get.forEach((el, idx) => {
//   if (el.classList[1] !== el.innerHTML) {
//     return el.remove();
//   }
// });
//  const btn = document.querySelector("button");
//  const blog = document.querySelector(".blog");
//  const h3 = document.querySelector("h3");
//  blog.style.display = "none";

// btn.addEventListener("click", () => {
//   blog.style.display = "block";
//   btn.style.display = "none";
// });

// h3.addEventListener("click", () => {
//   blog.style.display = "none";
//   btn.style.display = "block";
// });

// const blog = document.querySelectorAll(".blog");
// const color = ["red"];

// blog.forEach((el) => {
//   el.addEventListener("click", () => {
//     el.style.background = color;
//     // el.style.transition = ".4s";
//     // el.style.backgroundSize = "cover";
//   });
// });

// const blog = document.querySelector(".blog");
// const color = ["blue"];

// blog.forEach(element => {
//     element.addE
// });
// blog.forEach((el) => {
//   el.addEventListener("click", () => {
//     el.style.background = "red";
//   });
// });

// const blog = document.querySelectorAll(".blog");
// let color = ["red", "blue"];

// blog.forEach((element) => {
//   element.addEventListener("click", () => {
//     element.Math.floor(Math.random() * 3);

//     element.style.background = "";
//   });
// });

// const blog = document.querySelectorAll(".blog")
// let color = [red]

// let sum = ["red", "baba"];
// sum = ;
// console.log(sum);

// let gum = ["red", "black", "yellow", "pink",];

// let colors = [];
// while (colors.length < 100) {
//   do {
//     var color = Math.floor(Math.random() * 1000000 + 1);
//   } while (colors.indexOf(color) >= 0);
//   colors.push("#" + ("000000" + color.toString(16)).slice(-6));
// }
// console.log(colors);

const body = document.querySelector("body");
body.style.background = "black";

let soz = document.createElement("h1");
for (let i = 0; i < 600; i++) {
  const blog = document.createElement("div");
  blog.style.width = "100px";
  blog.style.height = "100px";
  blog.style.borderRadius = "10px";
  blog.style.border = "1px solid red";
  blog.style.margin = "10px";
  blog.style.display = "flex";
  blog.style.alignItems = "center";
  blog.style.justifyContent = "center";
  body.append(blog);
  const div = document.createElement("div");
  div.classList.add("hello");
  blog.append(div);
  const divv = document.createElement("div");
  div.classList.add("hi");
  blog.append(divv);
  const divs = document.createElement("div");
  div.classList.add("have");
  blog.append(divs);
  blog.addEventListener("mouseover", () => funk(blog));
  blog.addEventListener("mouseout", () => func(blog));
}
function funk(item) {
  // let num = ["Islam", "Amir", "Kanykei", "Aziret", "Sherzat", "Muzar"];
  // let money = num[Math.floor(Math.random() * num.length)];
  // soz.textContent = money;
  let color = ["red", "yellow", "blue"];
  let colors = color[Math.floor(Math.random() * color.length)];
  let core = ["purple", "aqua", "gray"];
  let cores = core[Math.floor(Math.random() * core.length)];
  // soz.style.color = cores;
  item.style.color = cores;
  item.style.background = colors;
  item.style.transform = "scale(1.1)";
  item.style.transition = ".1s";
  item.append(soz);
  // item.style.borderRadius = "60% 60%  0% 0";
  item.style.boxShadow = "0 0 100px 30px purple";
}

function func(item) {
  item.style.background = ""; 
  item.style.transition = "3s";
  item.style.transform = "scale(1)";
  item.style.boxShadow = "";
  item.style.borderRadius = "";
  item.style.color = "";
}


// mouseover
// mouseout
// mouseenter
// mousedown
// mouseup
// mousemove

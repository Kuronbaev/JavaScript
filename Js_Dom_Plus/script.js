// const div = document.createElement("div");
// div.classList.add("wrapper");

// const body = document.querySelector("body");
// body.appendChild(div);

// console.log(body);

// const header = document.createElement("h1");
// header.textContent = "hello Amir";

// div.insertAdjacentElement("beforebegin", header);

// const ul = `
// <ul>
// <li>odin</li>
// <li>dva</li>
// <li>tri</li>
// </ul>
// `;
// div.innerHTML = ul;

// const img = document.createElement("img");
// img.src = "https://picsum.photos/240";
// img.width = "200";
// img.classList = "super";
// img.alt = "Super Man";
// div.appendChild(img);
// console.log(img);

// const paragraf = `
//  <div class="pDiv">
//  <p>paragraf</p>
//  <p>paragraf2</p>
//  </div>
//  `;

// const hello = document.createElement("nav")
// hello.classList.add

//  const list = div.a

// const gen = document.querySelector("button");
// const int = document.querySelector("p");

// gen.onclick = function () {
//   const sum = Math.floor(Math.random() * 1000);
//   int.textContent = sum;
// };
const pat = document.querySelector("p");
const blog = document.querySelectorAll(".blog");
const btn = document.querySelector("button");
// const blogs = document.querySelector("div");
let sum = 0;

btn.onclick = function () {
  blog.forEach(function (element) {
    sum += parseInt(element.textContent);
  });
  pat.textContent = sum;
};

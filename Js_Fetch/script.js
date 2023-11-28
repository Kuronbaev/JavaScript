// Promise абалы
// resolve бул бизге туура данныйлар келгени
// reject данныйлар келет но с отклонаяет

// let https = 200;
// let proomise = new Promise((resolve, reject) => {
//   if (https >= 200 && https <= 299) {
//     resolve({ id: 1, name: "Bob" });
//   } else {
//     reject({ id: 2, name: "Bill" });
//   }
// });
// promise.then((res) => console.log(res));
// promise.catch((res) => console.log(res));
// let h1 = document.querySelector("h1");
let names = document.querySelector(".names");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     data.map((el) => {
//       names.innerHTML += `<div class="card">
//       <img class="user" src="./rul.png">
//       <h1>${el.name}</h1>

//       <h2>${el.username}</h2>
//       <h3>Email: ${el.email}</h3>
//       <h4>${el.phone}</h4>
//       <h4>${el.website}</h4>
//       <h4>${el.address}</h4>
//       </div>`;
//     });
//   });
fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((data) => {
    data.map((el) => {
      names.innerHTML += `<div class="block">
      <h1 class="naz">${el.title}</h1>
        <h1 class="cat">Category: ${el.category}</h1>
        <h2 class="lor">${el.description}</h2>
        <img class="sur" src="${el.image}">
        </div>`;
    });
  });

fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((json) => console.log(json));

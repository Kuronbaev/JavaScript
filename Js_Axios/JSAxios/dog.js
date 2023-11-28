// axios(`https://restcountries.com/v3.1/all`).then((res) => {
//   res.data.sort((a, b) => {
//     return b.area - a.area;
//   });
//   console.log(res.data);
//   res.data.map((el) => {
//     dog.innerHTML += `
//       <div class="box" data-common="${el.name.common}">
//       <img src="${el.flags.png}">
//       <h3>${el.area}</h3>
//       <h3>${el.name.common}</h3>
//       </div>`;
//   });
// });
// axios(`https://dog.ceo/api/breeds/list/all`).then((res) => {
//   console.log(Object.values(res.data));
//   let obj = Object.values(res.data);
//   let arr = Object.keys(obj[0]);
//   const breeds = res.data.message;
//   const kell = res.data.message;
//   console.log(arr);
//   console.log(kell[0]);

//   for (let i = 0; i < arr.length; i++) {
//     dog.innerHTML += `<div class="boc">
// <button class="dogs" >${arr[i]}</button>
//     //       </div>`;
//     sell.innerHTML += `<option>${arr[i]}</option>`;
//   }

//   axios(`https://dog.ceo/api/breed/
// ${breeds}
// /images/random`).then((res) => {
//     sur.innerHTML += `<img src=''> `;
//   });
// });
// let obj = {
//   name: "John",
//   age: 67,
// };

// console.log(Object.keys(obj));
const dog = document.querySelector(".dog");
const input = document.querySelector(".sear");
const select = document.querySelector("select");
console.log();
const body = document.querySelector("body");
const breedsImg = document.querySelector(".image");

function getAll() {
  axios(`https://dog.ceo/api/breeds/list/all`)
    .then((res) => {
      Object.keys(res.data.message).map((el) => {
        select.innerHTML += `<option value="${el}">${el}</option>`;
        dog.innerHTML += `<button class="dogs">${el}</button>`;
      });
      // Object.keys(res.data.message).map((el) => {
      //   select.innerHTML += `<option class="opts">${el}</option>`;
      // });
    })
    .then(() => getBtn())
    .then(() => getSel());
}
getAll();

function getSel() {
  select.addEventListener("change", (e) => {
    getImg(select.value);
  });
}
getSel();
function getBtn() {
  const btns = document.querySelectorAll(".dogs");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      getImg(btn.textContent);
      console.log(btn.textContent);
    });
  });
}
getBtn();

function getImg(name) {
  axios(`https://dog.ceo/api/breed/${name}/images/random`).then((res) => {
    breedsImg.innerHTML = `<img class='parod' src="${res.data.message}" alt="img"/>`;
  });
}
getImg();

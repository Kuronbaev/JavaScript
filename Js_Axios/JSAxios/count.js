// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => {
//     data.sort((a, b) => {
//       return a.area - b.area;
//     });
//   })

//   .then((data) => {
//     data.map((el) => {
//       hiro.innerHTML += `<div class="box">
//         <img src="${el.flags.svg}" alt="">
//         <h1>${el.name.common}</h1>
//         <h2 class="area">${el.area}</h2>
//         <h5></h5>
//         </div>`;
//     });
//   });

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// axios(`https://restcountries.com/v3.1/all`).then((res) => {
//   console.log(res.data);
//   res.data.map((el) => {
//     hiro.innerHTML += `
//     <div class="box">
//     <img src="${el.flags}">
//     </div>
//     `;
//   });
// });

const sel = document.querySelector("select");
const input = document.querySelector(".sear");
const horo = document.querySelector(".horo");
const btn = document.querySelector(".btn");

axios(`https://restcountries.com/v3.1/all`).then((res) => {
  res.data.sort((a, b) => {
    return b.area - a.area;
  });
  console.log(res.data);
  res.data.map((el) => {
    horo.innerHTML += `
      <div class="box" data-common="${el.name.common}">
      <img src="${el.flags.png}">
      <h3>${el.area}</h3>
      <h3>${el.name.common}</h3>
      </div>`;
  });
});

btn.addEventListener("click", (e) => {f
  e.preventDefault()
  let str = input.value.trim().toLowerCase();
  const boxes = document.querySelectorAll(".box");
  const boxesArr = Array.from(boxes);

  boxesArr.map((box) => {
    const common = box.getAttribute("data-common").toLowerCase();

    if (common.includes(str)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
});

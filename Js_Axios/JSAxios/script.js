const hero = document.querySelector(".hero");

axios(`https://jsonplaceholder.typicode.com/users`).then((res) => {
  console.log(res.data);
  res.data.map((el) => {
    hero.innerHTML += `<div data-name="${el.username}" class="box">
    <img class="userr" src="./user.png" alt=""> 
    <h1>${el.name}</h1>
    <h2>${el.username}</h2>
    <h5>${el.phone}</h5>
    </div>`;
  });
});

const input = document.querySelector(".sear");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  let str = input.ariaValueMax.trim().toLowerCase();
  const boxes = document.querySelectorAll(".box");
  const boxesArr = Array.from(boxes);

  boxesArr.map((el) => {
    const common = el.getAttribute("data-name").toLowerCase;

    if (common.includes(str)) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
});



// fetch(`https://restcountries.com/v3.1/all`)
//   .then((res) => res.json())
//   .then((data) => {
//     data.map((el) => {
//       hiro.innerHTML += `<div>
//       <img src="${el.flags.png}">
//       </div>`;
//     });
//   })

//   .then((data) => {
//     data.sort((a, b) => {
//       return a.capital - b.capital;
//     });
//   });

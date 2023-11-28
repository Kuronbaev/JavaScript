// const colorNames = [
//     "AliceBlue",
//     "AntiqueWhite",
//     "Aqua",
//     "Aquamarine",
//     "Azure",
//     "Beige",
//     "Bisque",
//     "Black",
//     "BlanchedAlmond",
//     "Blue",
//     "BlueViolet",
//     "Brown",
//     "BurlyWood",
//     "CadetBlue",
//     "Chartreuse",
//     "Chocolate",
//     "Coral",
//     "CornflowerBlue",
//     "Cornsilk",
//     "Crimson",
//     "Cyan",
//     "DarkBlue",
//     "DarkCyan",
//     "DarkGoldenRod",
//     "DarkGray",
//     "DarkGrey",
//     "DarkGreen",
//     "DarkKhaki",
//     "DarkMagenta",
//     "DarkOliveGreen",
//     "DarkOrange",
//     "DarkOrchid",
//     "DarkRed",
//     "DarkSalmon",
//     "DarkSeaGreen",
//     "DarkSlateBlue",
//     "DarkSlateGray",
//     "DarkSlateGrey",
//     "DarkTurquoise",
//     "DarkViolet",
//     "DeepPink",
//     "DeepSkyBlue",
//     "DimGray",
//     "DimGrey",
//     "DodgerBlue",
//     "FireBrick",
//     "FloralWhite",
//     "ForestGreen",
//     "Fuchsia",
//     "Gainsboro",
//     "GhostWhite",
//     "Gold",
//     "GoldenRod",
//     "Gray",
//     "Grey",
//     "Green",
//     "GreenYellow",
//     "HoneyDew",
//     "HotPink",
//     "IndianRed",
//     "Indigo",
//     "Ivory",
//     "Khaki",
//     "Lavender",
//     "LavenderBlush",
//     "LawnGreen",
//     "LemonChiffon",
//     "LightBlue",
//     "LightCoral",
//     "LightCyan",
//     "LightGoldenRodYellow",
//     "LightGray",
//     "LightGrey",
//     "LightGreen",
//     "LightPink",
//     "LightSalmon",
//     "LightSeaGreen",
//     "LightSkyBlue",
//     "LightSlateGray",
//     "LightSlateGrey",
//     "LightSteelBlue",
//     "LightYellow",
//     "Lime",
//     "LimeGreen",
//     "Linen",
//     "Magenta",
//     "Maroon",
//     "MediumAquaMarine",
//     "MediumBlue",
//     "MediumOrchid",
//     "MediumPurple",
//     "MediumSeaGreen",
//     "MediumSlateBlue",
//     "MediumSpringGreen",
//     "MediumTurquoise",
//     "MediumVioletRed",
//     "MidnightBlue",
//     "MintCream",
//     "MistyRose",
//     "Moccasin",
//     "NavajoWhite",
//     "Navy",
//     "OldLace",
//     "Olive",
//     "OliveDrab",
//     "Orange",
//     "OrangeRed",
//     "Orchid",
//     "PaleGoldenRod",
//     "PaleGreen",
//     "PaleTurquoise",
//     "PaleVioletRed",
//     "PapayaWhip",
//     "PeachPuff",
//     "Peru",
//     "Pink",
//     "Plum",
//     "PowderBlue",
//     "Purple",
//     "RebeccaPurple",
//     "Red",
//     "RosyBrown",
//     "RoyalBlue",
//     "SaddleBrown",
//     "Salmon",
//     "SandyBrown",
//     "SeaGreen",
//     "SeaShell",
//     "Sienna",
//     "Silver",
//     "SkyBlue",
//     "SlateBlue",
//     "SlateGray",
//     "SlateGrey",
//     "Snow",
//     "SpringGreen",
//     "SteelBlue",
//     "Tan",
//     "Teal",
//     "Thistle",
//     "Tomato",
//     "Turquoise",
//     "Violet",
//     "Wheat",
//     "White",
//     "WhiteSmoke",
//     "Yellow",
//     "YellowGreen",
//   ];

//   const container = document.querySelector(".container");

//   let a = 500;
//   for (let i = 0; i < a; i++) {
//     const circle = document.createElement("div");
//     circle.setAttribute("class", "circle");

//     container.append(circle);

//     circle.addEventListener("mouseover", () => itemStyle(circle));
//     circle.addEventListener("mouseout", () => itemStyles(circle));
//     let open = document.querySelector(".open")
//     open.addEventListener("click", () => itemStyle(circle))
//   }

//   function itemStyle(item) {
//     let color = randomColor();
//     item.style.boxShadow = `0 0  20px ${color}`;
//     item.style.background = color;
//     item.style.transition = "all .4s";
//     item.style.transform = "scale(1.1)";
//   }
//   function itemStyles(item) {
//     item.style.boxShadow = "";
//     item.style.background = "";
//     item.style.transform = "";
//     item.style.transition = "all 1.7s";
//   }

//   function randomColor() {
//     let idx = Math.round(Math.random() * colorNames.length);
//     return colorNames[idx];
//   }
const body = document.querySelector("body");
body.style.transition = "";

const form = document.querySelector(".form");
const email = document.querySelector(".email");
const pass = document.querySelector(".pass");
const btn = document.querySelector(".add");
const err = document.querySelector("h4");
let core = 3;
err.style.color = "white";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "motionweb@gmail.com" && pass.value === "12345") {
    form.style.display = "none";
    email.style.borderColor = "green";
    body.style.backgroundImage =
      "url(https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1600)";
    pass.style.borderColor = "green";
    return (err.innerHTML = "Доступ открыт");
    e.preventDefault();
  } else if (email.value === "" && pass.value === "") {
    return (err.innerHTML = "Толтурунуз");
  } else if (
    (email.value === "" && pass.value === "12345") ||
    (email.value === "" && pass.value > "0")
  ) {
    email.style.borderColor = "red";
    return (err.innerHTML = "Заполните эмаил");
  } else if (
    email.value === "motionweb@gmail.com" ||
    (email.value !== "motionweb@gmail.com" && pass.value === "")
  ) {
    pass.style.borderColor = "red";
    return (err.innerHTML = "Парольду толтурунуз");
  } else {
    core--;
    email.value = "";
    pass.value = "";

    if (core > 0) {
      email.style.borderColor = "red";
      pass.style.borderColor = "red";
      return (err.innerHTML = `Осталься ${core} попыток `);
    } else if (core === 0) {
      btn = true;
      return (err.innerHTML = "Доступ закрыт");
    }
  }
});

// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     if(email.value === "123") {
//         return err.innerHTML = "hello"
//     }
// })

// dom
// const text = document.querySelector("h1");
// if (text.innerHTML === "welcome do motiom web 1") {
//   text.style.color = "red";
//   console.log("true");
// } else {
//     console.log("no");
// }

const h1 = document.querySelector("h1");
h1.style.fontSize = "20px";
h1.style.marginBottom = "0px";

const h2 = document.querySelector("h2");
h2.style.fontSize = "15px";
h2.style.marginBottom = "0px";

const p = document.querySelector("p");
p.style.fontSize = "15px";

const con = document.querySelector(".container");
con.style.width = "1440px";
con.style.margin = "0px auto";

const blog = document.querySelector(".blog");
blog.style.width = "350px";
blog.style.margin = "200px auto";
blog.style.height = "600px";
blog.style.background = "white";
blog.style.display = "flex";
blog.style.justifyContent = "center";
blog.style.flexDirection = "column";
blog.style.webkitBoxShadow = "0px 10px 5px 25px rgba(34, 60, 80, 0.07)";
blog.style.alignItems = "center";
blog.style.textAlign = "center";

const body = document.querySelector("body");
body.style.background = "purple";
body.style.margin = "0";
body.style.padding = "0";

const img = document.querySelector("img");
img.style.width = "100px";
img.style.borderRadius = "50%";

const icon = document.querySelector(".icon");
icon.style.display = "flex";
icon.style.gap = "60px";

const btn = document.querySelector("button");
btn.style.width = "200px";
btn.style.height = "40px";
btn.style.border = "0";
btn.style.borderRadius = "10px";
btn.style.background = "purple";
btn.style.color = "white";
btn.style.animation = "hello 3s infiniti easy-in-out";

// -webkit-box-shadow: 0px 10px 5px 25px rgba(34, 60, 80, 0.07);
// -moz-box-shadow: 0px 10px 5px 25px rgba(34, 60, 80, 0.07);
// box-shadow: 0px 10px 5px 25px rgba(34, 60, 80, 0.07);

blog.style.mozBoxShadow = "0px 10px 5px 25px rgba(34, 60, 80, 0.07);";
blog.style.boxShadow = " 0px 10px 5px 25px rgba(34, 60, 80, 0.07);";

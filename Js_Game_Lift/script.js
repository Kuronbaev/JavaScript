// const btn = document.querySelectorAll(".btn");
// let player = document.querySelector("img");
// player.style.transition = "1s";
// btn[0].addEventListener("click", () => {
//   player.style.bottom = "0px";
// });
// btn[1].addEventListener("click", () => {
//   player.style.bottom = "55px";
// });
// btn[2].addEventListener("click", () => {
//   player.style.bottom = "105px";
// });
// btn[3].addEventListener("click", () => {
//   player.style.bottom = "155px";
// });
// btn[4].addEventListener("click", () => {
//   player.style.bottom = "205px";
// });
// btn[5].addEventListener("click", () => {
//   player.style.bottom = "255px";
// });
// btn[6].addEventListener("click", () => {
//   player.style.bottom = "305px";
// });
// btn[7].addEventListener("click", () => {
//   player.style.bottom = "355px";
// });
// btn[8].addEventListener("click", () => {
//   player.style.bottom = "405px";
// });
// btn[9].addEventListener("click", () => {
//   player.style.bottom = "455px";
// });
// btn[10].addEventListener("click", () => {
//   player.style.bottom = "505px";
// });
// btn[11].addEventListener("click", () => {
//   player.style.bottom = "555px";
// });
// btn[12].addEventListener("click", () => {
//   player.style.bottom = "605px";
// });

const btn = document.querySelectorAll(".btn");
let player = document.querySelector("img");

btn.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Calculate the desired bottom position based on the button index
    const bottomPosition = index * 50 + 5; // Adjust the values as needed

    // Add a CSS class to trigger the rotation animation
    player.classList.add("rotate");

    // Set the bottom position after a slight delay to allow the animation to play
    setTimeout(() => {
      player.style.bottom = bottomPosition + "px";
    }, 100);

    // Remove the CSS class after the animation completes
    setTimeout(() => {
      player.classList.remove("rotate");
    }, 1000); // Adjust the timing based on your animation duration
  });
});

// const btns = document.querySelectorAll(".btn");

// btns.forEach((button) => {
//   button.addEventListener("click", () => {
//     // Toggle the "active" class to trigger the animation
//     button.classList.toggle("active");

//     // Remove the "active" class after a short delay to reset the button
//     setTimeout(() => {
//       button.classList.remove("active");
//     }, 200); // Adjust the timing based on your animation duration
//   });
// });
